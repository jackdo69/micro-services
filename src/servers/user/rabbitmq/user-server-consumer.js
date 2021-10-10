import { Consumer } from '../../../rabbitmq';

const exchange = 'user-exchange';
const queue = 'user-queue';

export default new Consumer({
  async setup(channel) {
    await channel.assertExchange(exchange, 'topic', { durable: true });
    await channel.assertQueue(queue, { durable: true });
    channel.bindQueue(queue, exchange, '');
    channel.consume(queue, async (message) => {
      const data = message.content.toString();
      console.log(`Receiving message ${data}`);
      channel.ack(message);
    });
  },
});

import rabbitmqClient from '../../rabbitmq-client';

const exchange = 'post-exchange';
const queue = 'post-queue';

export default new rabbitmqClient.Broker.Consumer({
  async setup(channel) {
    await channel.assertExchange(exchange, 'topic', { durable: true });
    await channel.assertQueue(queue, { durable: true });
    channel.bindQueue(queue, exchange, '');
    channel.consume(queue, async (message) => {
      console.log(message);
    });
  },
});

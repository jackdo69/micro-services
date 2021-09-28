import rabbitmqClient from '../../rabbitmq-client';

const postExchange = 'post-exchange';
const userExchange = 'user-exchange';

export default new rabbitmqClient.Broker.Producer({
  async setup(channel) {
    await channel.assertExchange(postExchange, 'topic', { durable: true });
    await channel.assertExchange(userExchange, 'topic', { durable: true });
  },
});

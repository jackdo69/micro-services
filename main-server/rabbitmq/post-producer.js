import { Broker } from '../../rabbitmq';

const exchange = 'post-exchange';

export default new Broker({
  async setup(channel) {
    await channel.assertExchange(exchange, 'topic', { durable: true });
  },
  async publish(message) {
    console.log(`Publising to ${exchange}`);
    await this.channel.publish(
      exchange,
      '',
      Buffer.from(JSON.stringify(message))
    );
  },
});

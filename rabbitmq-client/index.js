import Broker from './broker';
import amqp from 'amqplib';
import requireDir from 'require-directory';

async function findWorkers(module, path) {
  const brokers = [];
  requireDir(module, path, {
    visit(obj, filename) {
      brokers.push(obj.default);
      console.log(`Loading broker from ${filename}`);
    },
  });
  return brokers;
}
async function init(module) {
  const amqpUrl = process.env.RABBITMQ_URL || 'amqp://localhost:5672/';
  const connection = await amqp.connect(amqpUrl);
  // get all workers
  const brokers = await findWorkers(module, './rabbitmq');

  const channel = await connection.createChannel();
  brokers.forEach(async (item) => await item.setup(channel));
}

export default {
  init,
  Broker,
};

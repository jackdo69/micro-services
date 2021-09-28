import rabbitmqClient from '../rabbitmq-client';

(async () => {
  await rabbitmqClient.init(module);
  console.log('Post server is up!');
})();

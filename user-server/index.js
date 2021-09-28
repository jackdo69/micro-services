import rabbitmqClient from '../rabbitmq-client';

(async () => {
  await rabbitmqClient.init(module);
  console.log('User server is up!');
})();

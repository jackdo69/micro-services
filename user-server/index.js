import rabbitmqClient from '../rabbitmq';

(async () => {
  await rabbitmqClient.init(module);
  console.log('User server is up!');
})();

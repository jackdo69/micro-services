import rabbitmqClient from '../../rabbitmq';

(async () => {
  await rabbitmqClient.init(module);
  console.log('Post server is up!');
})();

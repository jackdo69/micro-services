import rabbitmqClient from '../../rabbitmq';

(async () => {
  try {
    await rabbitmqClient.init(module);
  } catch (e) {
    console.log(e);
  }
  console.log('Post server is up!');
})();

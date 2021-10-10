import rabbitmqClient from '../../rabbitmq';

(async () => {
  try {
    await rabbitmqClient.init(module);
  } catch (e) {
    console.log(e);
  }
  console.log('User server is up!');
})();

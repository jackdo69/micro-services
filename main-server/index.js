import http from 'http';
import createApp from '../express';
import rabbitmqClient from '../rabbitmq';
import routes from './routes';
(async () => {
  const PORT = process.env.PORT || 3000;
  const app = await createApp((instance) => {
    instance.use('/', routes);
  });

  const server = http.createServer(app);
  //prometheus
  server.listen(PORT, () => {
    console.log(`Main server is listening on port: ${PORT}`);
  });
  await rabbitmqClient.init(module);
})();

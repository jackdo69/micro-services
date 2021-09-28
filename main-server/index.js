import http from 'http';
import app from './app';
import rabbitmqClient from '../rabbitmq-client';
(async () => {
  const PORT = process.env.PORT || 3000;

  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Main server is listening on port: ${PORT}`);
  });
  await rabbitmqClient.init(module);
})();

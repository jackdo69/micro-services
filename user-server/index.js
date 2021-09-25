import http from 'http';
import app from './app';

const PORT = process.env.PORT || 3002;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`User server is listening on port: ${PORT}`);
});

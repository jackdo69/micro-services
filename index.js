import http from 'http';
import mainApp from './main-server/app';

const PORT = process.env.PORT || 3000;

const server = http.createServer(mainApp);

server.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

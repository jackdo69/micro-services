import client from 'prom-client';

const register = new client.Registry();

register.setDefaultLabels({
  app: 'nodejs-app',
});

client.collectDefaultMetrics({ register });

// Create a histogram metric
export default register;

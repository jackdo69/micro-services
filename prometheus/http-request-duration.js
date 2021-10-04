import client from 'prom-client';
import register from './index';

// Create a histogram metric
const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in microseconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.5, 1, 5, 10],
});

// Register the histogram
register.registerMetric(httpRequestDurationMicroseconds);

export default httpRequestDurationMicroseconds;

import client from 'prom-client';
import register from './index';

// Create a histogram metric
const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in microseconds',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10],
});

// Register the histogram
register.registerMetric(httpRequestDurationMicroseconds);

export default httpRequestDurationMicroseconds;

import url from 'url';
import httpRequestDurationMicroseconds from '../../prometheus/http-request-duration';

export default function (req, res, next) {
  const end = httpRequestDurationMicroseconds.startTimer();
  const route = url.parse(req.url).pathname;
  end({ route, code: res.statusCode, method: req.method });
  next();
}

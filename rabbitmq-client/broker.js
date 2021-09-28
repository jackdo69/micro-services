class Broker {
  constructor(methods) {
    Object.keys(methods).map((it) => (this[it] = methods[it]));
  }
}
class Producer extends Broker {
  constructor(methods) {
    super(methods);
  }
  async publish(exchange, routingKey, message) {
    this.channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(message))
    );
  }
}

class Consumer extends Broker {
  constructor(methods) {
    super(methods);
    this.callbacks = [];
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  async notifyCallbacks(message) {
    this.callbacks.forEach(async (cb) => {
      cb(message);
    });
  }
}

export default {
  Consumer,
  Producer,
};

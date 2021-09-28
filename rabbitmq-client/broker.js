export class Broker {
  constructor(methods) {
    Object.keys(methods).map((it) => (this[it] = methods[it]));
  }
}

export class Consumer extends Broker {
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

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._code = value;
  }

  toString() {
    return `[object ${this.code}]`;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.code;
    }
    return null;
  }
}

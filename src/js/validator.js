export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const pattern = /^[a-zA-Z](?!.*\d{4})[a-zA-Z0-9-_]+[a-zA-Z]$/gi;
    return pattern.test(this.name);
  }
}

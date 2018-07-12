import cuid from 'cuid';

// Simple class the exposes an API that the
// React component expects.
export default class MyUser {
  constructor(first, last) {
    this.id = cuid();
    this.first = first;
    this.last = last;
  }

  get name() {
    return `${this.first} ${this.last}`;
  }
}

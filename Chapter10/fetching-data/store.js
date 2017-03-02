import EventEmitter from 'events';
import { fromJS } from 'immutable';

// A store is a simple state container that
// emits change events when the state is updated.
class Store extends EventEmitter {
  // If "window" is defined,
  // it means we're on the client and that we can
  // expect "INITIAL_STATE" to be there. Otherwise,
  // we're on the server and we need to set the initial
  // state that's sent to the client.
  data = fromJS(
    typeof window !== 'undefined' ?
      window.INITIAL_STATE :
      { firstContent: { items: [] } }
  )

  // Getter for "Immutable.js" state data...
  get state() {
    return this.data;
  }

  // Setter for "Immutable.js" state data...
  set state(data) {
    this.data = data;
    this.emit('change', data);
  }
}

export default new Store();

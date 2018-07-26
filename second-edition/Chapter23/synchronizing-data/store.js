import { NetInfo, AsyncStorage } from 'react-native';
import { Map as ImmutableMap } from 'immutable';

// Mock data that would otherwise come from a real
// networked API endpoint.
const fakeNetworkData = {
  first: false,
  second: false,
  third: false
};

// We'll assume that the device isn't "connected"
// by default.
let connected = false;

// There's nothing to sync yet...
const unsynced = [];

// Sets the given "key" and "value". The idea
// is that application that uses this function
// shouldn't care if the network is connected
// or not.
export const set = (key, value) =>
  // The returned promise resolves to true
  // if the network is connected, false otherwise.
  new Promise((resolve, reject) => {
    if (connected) {
      // We're online - make the proper request (or fake
      // it in this case) and resolve the promise.
      fakeNetworkData[key] = value;
      resolve(true);
    } else {
      // We're offline - save the item using "AsyncStorage"
      // and add the key to "unsynced" so that we remember
      // to sync it when we're back online.
      AsyncStorage.setItem(key, value.toString()).then(
        () => {
          unsynced.push(key);
          resolve(false);
        },
        err => reject(err)
      );
    }
  });

// Gets the given key/value. The idea is that the application
// shouldn't care whether or not there is a network connection.
// If we're offline and the item hasn't been synced, read it
// from local storage.
export const get = key =>
  new Promise((resolve, reject) => {
    if (connected) {
      // We're online. Resolve the requested data.
      resolve(key ? fakeNetworkData[key] : fakeNetworkData);
    } else if (key) {
      // We've offline and they're asking for a specific key.
      // We need to look it up using "AsyncStorage".
      AsyncStorage.getItem(key).then(
        item => resolve(item),
        err => reject(err)
      );
    } else {
      // We're offline and they're asking for all values.
      // So we grab all keys, then all values, then we
      // resolve a plain JS object.
      AsyncStorage.getAllKeys().then(
        keys =>
          AsyncStorage.multiGet(keys).then(
            items => resolve(ImmutableMap(items).toJS()),
            err => reject(err)
          ),
        err => reject(err)
      );
    }
  });

// Check the network state when the module first
// loads so that we have an accurate value for "connected".
NetInfo.getConnectionInfo().then(
  connection => {
    connected = ['wifi', 'unknown'].includes(connection.type);
  },
  () => {
    connected = false;
  }
);

// Register a handler for when the state of the network changes.
NetInfo.addEventListener('connectionChange', connection => {
  // Update the "connected" state...
  connected = ['wifi', 'unknown'].includes(connection.type);

  // If we're online and there's unsynced values,
  // load them from the store, and call "set()"
  // on each of them.
  if (connected && unsynced.length) {
    AsyncStorage.multiGet(unsynced).then(items => {
      items.forEach(([key, val]) => set(key, val));
      unsynced.length = 0;
    });
  }
});

// Adapted from:
// https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html
function cancellable(promise) {
  let cancelled = false;

  // Creates a wrapper promise to return. This wrapper is
  // resolved or rejected based on the wrapped promise, and
  // on the "cancelled" value.
  const promiseWrapper = new Promise((resolve, reject) => {
    promise.then(
      val => {
        return cancelled ? reject({ cancelled: true }) : resolve(val);
      },
      error => {
        return cancelled
          ? reject({ cancelled: true })
          : reject(error);
      }
    );
  });

  // Adds a "cancel()" method to the promise, for
  // use by the React component in "componentWillUnmount()".
  promiseWrapper.cancel = function cancel() {
    cancelled = true;
  };

  return promiseWrapper;
}

export function users(fail) {
  // Make sure that the returned promise is "cancellable", by
  // wrapping it with "cancellable()".
  return cancellable(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fail) {
          reject(fail);
        } else {
          resolve({
            users: [
              { id: 0, name: 'First' },
              { id: 1, name: 'Second' },
              { id: 2, name: 'Third' }
            ]
          });
        }
      }, 4000);
    })
  );
}

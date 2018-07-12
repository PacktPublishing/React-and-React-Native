// Returns a promise that's resolved after 2
// seconds. By default, it will resolve an array
// of user data. If the "fail" argument is true,
// the promise is rejected.
export function users(fail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject('epic fail');
      } else {
        resolve({
          users: [
            { id: 0, name: 'First' },
            { id: 1, name: 'Second' },
            { id: 2, name: 'Third' }
          ]
        });
      }
    }, 2000);
  });
}

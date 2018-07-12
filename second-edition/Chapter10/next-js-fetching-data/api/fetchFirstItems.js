export default () =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve(['One', 'Two', 'Three'])
      });
    }, 1000)
  );

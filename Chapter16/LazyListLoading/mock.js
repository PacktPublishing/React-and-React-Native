import fetchMock from 'fetch-mock';

// Items...keep'em coming!
function* genItems() {
  let cnt = 0;

  while (true) {
    yield `Item ${cnt++}`;
  }
}

const items = genItems();

// Grabs the next 20 items from the "items"
// generator, and responds with the result.
fetchMock.mock(/\/items.*/, () => {
  const result = [];

  for (let i = 0; i < 20; i++) {
    result.push(items.next().value);
  }

  return ({
    items: result,
  });
});

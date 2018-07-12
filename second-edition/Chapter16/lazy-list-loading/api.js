// Items...keep'em coming!
function* genItems() {
  let cnt = 0;

  while (true) {
    yield `Item ${cnt++}`;
  }
}

const items = genItems();

export const fetchItems = () =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: new Array(20).fill(null).map(() => items.next().value)
      })
  });

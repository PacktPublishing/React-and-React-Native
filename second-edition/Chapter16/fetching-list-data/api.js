/* eslint-disable no-nested-ternary */
import fetchMock from 'fetch-mock';
import querystring from 'querystring';

// A mock item list...
const items = new Array(100).fill(null).map((v, i) => `Item ${i}`);

// The same filter and sort functionality
// as the previous example, only it's part of the
// API now, instead of part of the React component.
const filterAndSort = (data, text, asc) =>
  data
    .filter(i => text.length === 0 || i.includes(text))
    .sort(
      asc
        ? (a, b) => (b > a ? -1 : a === b ? 0 : 1)
        : (a, b) => (a > b ? -1 : a === b ? 0 : 1)
    );

export const fetchItems = (filter, asc) =>
  new Promise(resolve => {
    resolve({
      json: () =>
        Promise.resolve({
          items: filterAndSort(items, filter, asc)
        })
    });
  });

/* eslint-disable no-nested-ternary */
import fetchMock from 'fetch-mock';
import querystring from 'querystring';

// A mock item list...
const items = new Array(100)
  .fill(null)
  .map((v, i) => `Item ${i}`);

// The same filter and sort functionality
// as the previous example, only it's part of the
// API now, instead of part of the React component.
const filterAndSort = (data, text, asc) =>
  data.filter(
    i =>
      text.length === 0 ||
      i.includes(text)
  ).sort(
    asc ?
      (a, b) => b > a ? -1 : (a === b ? 0 : 1) :
      (a, b) => a > b ? -1 : (a === b ? 0 : 1)
  );

// Defines the mock handler for the "/items" URL.
fetchMock.mock(/\/items.*/, (url) => {
  // Gets the "filter" and "asc" parameters.
  const params = querystring.parse(url.split('?')[1]);

  // Performs the sorting and filtering before
  // responding.
  return ({
    items: filterAndSort(
      items,
      params.filter ? params.filter : '',
      !!+params.asc
    ),
  });
});

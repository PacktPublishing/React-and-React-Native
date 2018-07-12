import mainRoute from './scene';

const firstRoute = {
  title: 'First',
  content: 'First Content',
};

const secondRoute = {
  title: 'Second',
  content: 'Second Content',
};

const thirdRoute = {
  title: 'Third',
  content: 'Third Content',
};

// The exported routes no longer contain properties
// that point to other routes.
export default [
  Object.assign(firstRoute, mainRoute),
  Object.assign(secondRoute, mainRoute),
  Object.assign(thirdRoute, mainRoute),
];

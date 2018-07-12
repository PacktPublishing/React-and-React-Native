import mainRoute from './scene';

// Each route object has enough data to render
// the dynamic parts of the scene and the navbar.
const firstRoute = {
  index: 0,
  title: 'First',
  leftTitle: 'Third',
  rightTitle: 'Second',
  content: 'First Content',
};

const secondRoute = {
  index: 1,
  title: 'Second',
  leftTitle: 'First',
  rightTitle: 'Third',
  content: 'Second Content',
};

const thirdRoute = {
  index: 2,
  title: 'Third',
  leftTitle: 'Second',
  rightTitle: 'First',
  content: 'Third Content',
};

// Each route is extended with the components from the
// scene. This means that the same component is reused,
// and new property values change the data as the
// user navigates the application.
export default [
  Object.assign(firstRoute, mainRoute, {
    leftRoute: thirdRoute,
    rightRoute: secondRoute,
  }),
  Object.assign(secondRoute, mainRoute, {
    leftRoute: firstRoute,
    rightRoute: thirdRoute,
  }),
  Object.assign(thirdRoute, mainRoute, {
    leftRoute: secondRoute,
    rightRoute: firstRoute,
  }),
];

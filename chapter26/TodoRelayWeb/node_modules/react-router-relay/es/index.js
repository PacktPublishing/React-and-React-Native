import React from 'react';

import RelayRouterContext from './RelayRouterContext';
import RouteContainer from './RouteContainer';
import getRouteQueries from './utils/getRouteQueries';

export default {
  renderRouterContext: function renderRouterContext(child, props) {
    return React.createElement(
      RelayRouterContext,
      props,
      child
    );
  },

  renderRouteComponent: function renderRouteComponent(child, props) {
    /* eslint-disable react/prop-types */
    var key = props.key;
    var route = props.route;
    /* eslint-enable react/prop-types */

    var routeQueries = getRouteQueries(route, props);
    var queries = key ? routeQueries && routeQueries[key] : routeQueries;
    if (!queries) {
      return child;
    }

    return React.createElement(
      RouteContainer,
      { queries: queries, routerProps: props },
      child
    );
  }
};
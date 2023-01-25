import {LinkingOptions} from '@react-navigation/native';

import {Route} from './route-name';

const config: PickOnce<LinkingOptions<RouteStack>, 'config'> = {
  screens: {
    [Route.MAIN]: {
      path: '/',
      exact: true,
      initialRouteName: 'Screen 1',
      screens: {
        [Route.SC_1]: {path: 'sc1', exact: true},
        [Route.SC_2]: {path: 'sc2'},
        [Route.SC_3]: {path: 'sc3'},
      },
    },
  },
};

const linking: LinkingOptions<RouteStack> = {
  prefixes: ['Awesome://'],
  config,
};

export {linking};

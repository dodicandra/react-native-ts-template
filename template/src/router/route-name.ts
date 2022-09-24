import {NavigatorScreenParams} from '@react-navigation/native';

export const Route = {
  MAIN: 'Main',
  SC_1: 'Screen 1',
  SC_2: 'Screen 2',
  SC_3: 'Screen 3',
} as const;

export interface IBottomTabScreen {
  [Route.SC_1]: undefined;
  [Route.SC_2]: undefined;
  [Route.SC_3]: undefined;
}

export type RouteStackNavigation = {
  [Route.MAIN]?: NavigatorScreenParams<IBottomTabScreen>;
  [Route.SC_1]: undefined;
  [Route.SC_2]: undefined;
  [Route.SC_3]: undefined;
};

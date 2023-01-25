import {createNavigationContainerRef, StackActions} from '@react-navigation/native';

import {Route} from './route-name';

export const navigationRef = createNavigationContainerRef();

const navigate: typeof navigationRef.navigate = navigationRef.navigate;

const back = () => {
  navigationRef.goBack();
};

const replace = <RouteName extends KeyOf<RouteStack>>(
  ...args: undefined extends RouteStack[RouteName]
    ? [screen: RouteName] | [screen: RouteName, params: RouteStack[RouteName]]
    : [screen: RouteName, params: RouteStack[RouteName]]
) => {
  const [name, params] = args;
  navigationRef.dispatch(StackActions.replace(name, params));
};

const push = <RouteName extends KeyOf<RouteStack>>(
  ...args: undefined extends RouteStack[RouteName]
    ? [screen: RouteName] | [screen: RouteName, params: RouteStack[RouteName]]
    : [screen: RouteName, params: RouteStack[RouteName]]
) => {
  const [name, params] = args;
  navigationRef.dispatch(StackActions.push(name, params));
};

type ResetParam<RouteName extends KeyOf<RouteStack>> = {name: RouteName; params?: RouteStack[RouteName]};

const reset = <SecondRoute extends KeyOf<RouteStack>, FirstRoute extends KeyOf<RouteStack>>(
  second: ResetParam<SecondRoute>,
  first: ResetParam<FirstRoute> = {name: 'Main'} as ResetParam<FirstRoute>,
) => navigationRef.reset({routes: [first, second]});

const resetToMain = () => navigationRef.reset({routes: [{name: Route.MAIN}]});

export const NavigationRoot = {
  navigate,
  back,
  replace,
  push,
  reset,
  resetToMain,
};

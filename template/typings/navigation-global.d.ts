import {Route, RouteStackNavigation} from '@router/route-name';

type StackKey = {[K in keyof typeof Route]: typeof Route[K]};

declare global {
  type RouteStack = RouteStackNavigation;
  type StackScren<T extends KeyOf<StackKey>> = StackType.StackScreenProps<RouteStack, StackKey[T]>;

  type UseRoute<T extends KeyOf<StackKey>> = RouteProp<RouteStack, StackKey[T]>;

  namespace ReactNavigation {
    interface RootParamList extends RouteStack {}
  }
}

export {};

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DetailScreen} from '@screens/detail';

import {BottomTabScreen} from './bottom-navigation';
import {Route, RouteStackNavigation} from './route-name';

const Stack = createNativeStackNavigator<RouteStackNavigation>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Route.MAIN} component={BottomTabScreen} />
      <Stack.Screen name={Route.DETAIL} component={DetailScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

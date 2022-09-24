import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '@screens/home';
import {Screen_2} from '@screens/screen-2';
import {Screen_3} from '@screens/screen-3';

const Tab = createBottomTabNavigator<RouteStack>();

export const BottomTabScreen: React.VFC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Screen 1" component={HomeScreen} />
    <Tab.Screen name="Screen 2" component={Screen_2} />
    <Tab.Screen name="Screen 3" component={Screen_3} />
  </Tab.Navigator>
);

import React from 'react';

import {NavigationContainer, Theme} from '@react-navigation/native';

import {BottomTabScreen} from './bottom-navigation';
import {linking} from './linking';
import {navigationRef} from './navigation-helper';

const theme: Theme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    border: '#FFFFFF',
    card: '#FFFFFF',
    notification: '#FFFFFF',
    primary: '#FFFFFF',
    text: '#1f1f1f',
  },
};

export const MainNavigator = () => {
  const routeNameRef = React.useRef<string | undefined>('');

  const onReady = React.useCallback(async () => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  }, []);

  async function onStateChange() {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    console.log(previousRouteName, ' to ', currentRouteName);
    routeNameRef.current = currentRouteName;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}
      documentTitle={{enabled: true}}
      linking={linking}
      theme={theme}>
      <BottomTabScreen />
    </NavigationContainer>
  );
};

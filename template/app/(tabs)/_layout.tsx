import React from 'react';

import {Pressable} from 'react-native';

import {Link, Redirect, Tabs} from 'expo-router';

import {Icons} from '@/src/components/atoms/icons';
import {useColorScheme} from '@/src/components/useColorScheme';
import Colors from '@/src/constants/Colors';
import {useIslogin} from '@/src/hooks/redux';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/home',
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const session = useIslogin();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <Icons iconType="FontAwesome" name="home" color={color} />,
          headerRight: () => (
            <Link href="/(stack)/detail" asChild>
              <Pressable>
                {({pressed}) => (
                  <Icons
                    iconType="FontAwesome"
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => <Icons iconType="FontAwesome" name="user-circle" color={color} />,
        }}
      />
    </Tabs>
  );
}

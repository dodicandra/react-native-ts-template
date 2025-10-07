import {Redirect, Stack} from 'expo-router';

import {useIslogin} from '@/src/hooks/redux';

export default function AppLayout() {
  const session = useIslogin();
  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack screenOptions={{headerShown: false}} />;
}

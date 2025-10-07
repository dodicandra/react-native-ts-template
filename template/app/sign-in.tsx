import {Text, View} from 'react-native';

import {router} from 'expo-router';

import {useAppDispatch} from '@/src/hooks/redux';
import {authAction} from '@/src/lib/redux/slice/auth';

export default function SignIn() {
  const dispatch = useAppDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        onPress={() => {
          dispatch(authAction.setLogin(true));
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/(tabs)');
        }}>
        Sign In
      </Text>
    </View>
  );
}

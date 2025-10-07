import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {useAppDispatch} from '@/src/hooks/redux';
import {authAction} from '@/src/lib/redux/slice/auth';

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text onPress={() => dispatch(authAction.setLogin(false))} style={styles.text}>
        DETAIl
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: 'black', textAlign: 'center', marginVertical: 10, fontSize: 20},
});

export default DetailScreen;

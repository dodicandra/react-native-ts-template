import React from 'react';

import {Button, StyleSheet, Text, View} from 'react-native';

import {useAppDispatch, useAppSelector} from '@app/hooks/redux';
import {countAction} from '@redux-store/slice/count';

interface CountProps {}

const Count: React.FC<CountProps> = () => {
  const count = useAppSelector(state => state.countReducer.count);
  const dispatch = useAppDispatch();

  const increment = React.useCallback(() => {
    dispatch(countAction.increment());
  }, [dispatch]);

  const decrement = React.useCallback(() => {
    dispatch(countAction.decrement());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.wraper}>
        <Button title="increment" onPress={increment} />
        <Button title="decrement" onPress={decrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', alignItems: 'center', paddingVertical: 20},
  wraper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  count: {color: 'black'},
});

export {Count};

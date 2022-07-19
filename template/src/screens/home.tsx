import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import * as Application from 'expo-application';
import Constants from 'expo-constants';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Using expo sdk {Constants.manifest?.sdkVersion}</Text>
      <Text>App version {Application.nativeApplicationVersion}</Text>
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
});

export {HomeScreen};

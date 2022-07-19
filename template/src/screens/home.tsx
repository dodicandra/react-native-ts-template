import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Awesome</Text>
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
  text: {color: 'black'},
});

export {HomeScreen};

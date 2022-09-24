import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

interface Screen_3Props {}

const Screen_3: React.FC<Screen_3Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Screen_3</Text>
    </View>
  );
};

const styles = StyleSheet.create({container: {flex: 1, backgroundColor: 'white'}});

export {Screen_3};

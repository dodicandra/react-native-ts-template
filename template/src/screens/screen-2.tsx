import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

interface Screen_2Props {}

const Screen_2: React.FC<Screen_2Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Screen_2</Text>
    </View>
  );
};

const styles = StyleSheet.create({container: {flex: 1, backgroundColor: 'white'}});

export {Screen_2};

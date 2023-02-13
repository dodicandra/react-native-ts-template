import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {NavigationRoot} from '@router/navigation-helper';

interface DetailScreenProps extends StackScren<'DETAIL'> {}

const DetailScreen: React.FC<DetailScreenProps> = ({route: {params}}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={NavigationRoot.back}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>{params.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({container: {flex: 1, backgroundColor: 'white'}});

export {DetailScreen};

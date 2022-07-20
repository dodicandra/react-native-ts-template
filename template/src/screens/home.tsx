import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('tes')}</Text>
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

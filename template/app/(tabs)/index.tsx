import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';

import {Count} from '@/src/components/molecules/count';
import {PeopleList} from '@/src/components/molecules/people-list';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('tes')}</Text>
      <PeopleList />
      <Count />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {color: 'black', textAlign: 'center', marginVertical: 10},
});

export default HomeScreen;

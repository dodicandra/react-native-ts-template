import '@i18n';

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import {AppProvider} from '@components-organisms/provider';
import {ErrorBoundary} from '@components/atoms/error-boundary';
import {initPersistor} from '@react-query/query-client';
import {HomeScreen} from '@screens/home';

initPersistor();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});

function RootApp() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default RootApp;

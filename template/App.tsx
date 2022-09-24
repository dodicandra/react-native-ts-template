import '@i18n';

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import {AppProvider} from '@components-organisms/provider';
import {ErrorBoundary} from '@components/atoms/error-boundary';
import {HomeScreen} from '@screens/home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

function RootApp() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
});

export default RootApp;

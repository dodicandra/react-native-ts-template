import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';

import { ErrorBoundary } from '@components/atoms/error-boundary';
import { HomeScreen } from '@screens/home';

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
      <App />
    </ErrorBoundary>
  );
}

export default RootApp;

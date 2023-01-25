import React from 'react';

import {Button, DevSettings, StyleSheet, Text, View} from 'react-native';

type FallBackProps = {
  error: Error | null;
  onPress?(): void;
};

const FallBack = (props: FallBackProps) => {
  return (
    <View style={styles.fallbackContainer}>
      <Text style={styles.title} testID="display-error">
        Oops!
      </Text>
      <Text style={styles.subtitle}>Terjadi Kesalahan</Text>
      <Text style={styles.error}>{props.error?.toString()}</Text>
      <Button title="Coba Lagi" onPress={props.onPress} />
    </View>
  );
};

type State = {hasError: Error | null};

type Props = {
  onError?(error: Error, stack: string): void;
  children?: React.ReactElement;
  FallbackComponent?: React.ComponentType<FallBackProps>;
};

class ErrorBoundary extends React.PureComponent<Props, State> {
  state = {
    hasError: null,
  };

  static getDerivedStateFromError(error: Error): State {
    console.log('error detcted');
    return {hasError: error};
  }

  componentDidCatch(error: Error, info: {componentStack: string}) {
    console.log('error detcted');

    if (typeof this.props.onError === 'function') {
      this.props.onError.call(this, error, info.componentStack);
    }
  }

  resetError = () => {
    this.setState({hasError: null});
    DevSettings.reload();
  };

  render() {
    const state = this.state;
    const FallbackComponents = this.props.FallbackComponent || FallBack;
    return this.state.hasError ? (
      <FallbackComponents error={state.hasError} onPress={this.resetError} />
    ) : (
      this.props.children
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    fontWeight: '300',
    paddingBottom: 16,
    color: '#000',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#000',
  },
  error: {
    paddingVertical: 16,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export {ErrorBoundary};

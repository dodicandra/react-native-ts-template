import React from 'react';

import {Button, Text, TextInput, View} from 'react-native';

import {fireEvent, render, waitFor} from '@testing-library/react-native';

import {ErrorBoundary} from '../atoms/error-boundary';

const original = console.error;

beforeEach(() => {
  console.error = jest.fn();
  console.error('you cant see me');
});

afterEach(() => {
  console.error = original;
});

const ThrowError = () => {
  throw new Error("I'm a bad error");
};

function Example() {
  const [name, setUser] = React.useState('');
  const [show, setShow] = React.useState(false);

  return (
    <View>
      <TextInput value={name} onChangeText={setUser} testID="input" />
      <Button
        title="Print Username"
        onPress={() => {
          // let's pretend this is making a server request, so it's async
          // (you'd want to mock this imaginary request in your unit tests)...
          setTimeout(() => {
            setShow(!show);
          }, Math.floor(Math.random() * 200));
        }}
      />
      {show && <Text testID="printed-username">{name}</Text>}
    </View>
  );
}

describe('Testing ErrorBoundary Components', () => {
  test('should display an ErrorMessage with FallbackComponent if wrapped component throws', async () => {
    const {getByTestId, toJSON} = render(
      <ErrorBoundary FallbackComponent={({error}) => <Text testID="error-boundary">{error?.message}</Text>}>
        <ThrowError />
      </ErrorBoundary>,
    );

    await waitFor(() => expect(getByTestId('error-boundary')).toBeTruthy());
    expect(getByTestId('error-boundary').props.children).toBe("I'm a bad error");
    expect(toJSON()).toMatchSnapshot();
  });

  test('should display an ErrorMessage with no FallbackComponent if wrapped component throws', async () => {
    const {getByTestId, toJSON, findByText} = render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );

    await waitFor(() => expect(getByTestId('display-error')).toBeTruthy());
    expect(getByTestId('display-error').props.children).toBe('Oops!');
    expect((await findByText('Terjadi Kesalahan')).props.children).toEqual('Terjadi Kesalahan');
    expect(toJSON()).toMatchSnapshot();
  });
});

describe('Example component test', () => {
  test('examples of some things', async () => {
    const {getByTestId, getByText, queryByTestId, toJSON} = render(<Example />);
    const famousProgrammerInHistory = 'Ada Lovelace';

    const input = getByTestId('input');
    fireEvent.changeText(input, famousProgrammerInHistory);

    const button = getByText('Print Username');
    fireEvent.press(button);

    await waitFor(() => expect(queryByTestId('printed-username')).toBeTruthy());

    expect(getByTestId('printed-username').props.children).toBe(famousProgrammerInHistory);
    expect(toJSON()).toMatchSnapshot();
  });
});

import * as React from 'react';

import {render} from '@testing-library/react-native';

import {MonoText} from '@/src/components/StyledText';

it(`renders correctly`, () => {
  const tree = render(<MonoText>Some text</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});

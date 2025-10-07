import React from 'react';

import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import {QueryProvider} from '@/src/lib/react-query/query-provider';
import {persist, store} from '@/src/lib/redux/store';

const AppProvider: React.FC<{children?: React.ReactElement}> = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <QueryProvider>{children}</QueryProvider>
      </PersistGate>
    </Provider>
  );
};

export {AppProvider};

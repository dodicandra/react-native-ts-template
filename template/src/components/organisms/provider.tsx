import React from 'react';

import {Provider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import {QueryProvider} from '@react-query/query-provider';
import {persist, store} from '@redux-store/store';

const AppProvider: React.FC = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <QueryProvider>{children}</QueryProvider>
      </PersistGate>
    </Provider>
  );
};

export {AppProvider};

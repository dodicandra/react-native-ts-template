import {FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';

import {configureStore} from '@reduxjs/toolkit';

import {rootReducers} from './root-reducer';

function configure() {
  const store = configureStore({
    reducer: rootReducers,
    middleware: getDefault => {
      const defaultMiddleWare = getDefault({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });

      if (__DEV__) {
        const createDebugger = require('redux-flipper').default;
        defaultMiddleWare.push(createDebugger());
      }

      return defaultMiddleWare;
    },
  });

  const persist = persistStore(store);

  return {store, persist};
}

const {persist, store} = configure();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store, persist};

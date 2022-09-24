import React from 'react';

import {QueryClientProvider} from '@tanstack/react-query';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';

import {persister, queryClient} from './query-client';

const QueryProvider: React.FC = ({children}) =>
  __DEV__ ? (
    <QueryClientProvider client={queryClient} contextSharing>
      {children}
    </QueryClientProvider>
  ) : (
    <PersistQueryClientProvider client={queryClient} persistOptions={{persister}}>
      {children}
    </PersistQueryClientProvider>
  );

export {QueryProvider};

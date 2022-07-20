import React from 'react';

import {QueryClientProvider} from '@tanstack/react-query';

import {queryClient} from './query-client';

const QueryProvider: React.FC = ({children}) => {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      {children}
    </QueryClientProvider>
  );
};

export {QueryProvider};

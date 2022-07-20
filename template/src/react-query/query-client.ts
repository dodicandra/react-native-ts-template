import {queryStorage} from '@lib/storage/query-storage';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {QueryClient} from '@tanstack/react-query';
import {persistQueryClient} from '@tanstack/react-query-persist-client';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {cacheTime: 1000 * 60 * 60 * 24, networkMode: 'offlineFirst'},
  },
});

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

export const RQStorageKey = 'RQ_Cache_storage';

const persistor = createAsyncStoragePersister({
  storage: queryStorage,
  key: RQStorageKey,
});

/**
 * disable this line with if(__DEV__) return;
 * to desable `persistQueryClient` cache
 */
export const initPersistor = () => {
  if (__DEV__) return;
  persistQueryClient({
    queryClient,
    persister: persistor,
    buster: 'RQ-1',
  });
};

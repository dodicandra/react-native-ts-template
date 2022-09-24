import {queryStorage} from '@lib/storage/query-storage';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {QueryClient} from '@tanstack/react-query';

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

export const persister = createAsyncStoragePersister({
  storage: queryStorage,
  key: RQStorageKey,
});

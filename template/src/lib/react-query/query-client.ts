import {createSyncStoragePersister} from '@tanstack/query-sync-storage-persister';
import {QueryClient} from '@tanstack/react-query';

import {queryStorage} from '../storage/query-storage';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {cacheTime: 1000 * 60 * 60 * 24, networkMode: 'offlineFirst'},
  },
});

export const RQStorageKey = 'RQ_Cache_storage';

export const persister = createSyncStoragePersister({
  storage: queryStorage,
  key: RQStorageKey,
});

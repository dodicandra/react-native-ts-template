import {MMKV} from 'react-native-mmkv';

import {Action, Reducer} from 'redux';
import {PersistConfig as persistConfigType, persistReducer as persisFunc, Storage} from 'redux-persist';
import {PersistPartial} from 'redux-persist/es/persistReducer';

export const reduxStorage = new MMKV({id: 'redux-storage', encryptionKey: 'najsdha7dbuaysgefvaetwfg'});

export const persistStorage: Storage = {
  setItem: (key, value) => {
    reduxStorage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = reduxStorage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    reduxStorage.delete(key);
    return Promise.resolve();
  },
};

export type PersistConfig<T = any> = Omit<persistConfigType<T>, 'storage'> & {
  storage?: Storage;
  blacklist?: Array<keyof T>;
  whitelist?: Array<keyof T>;
};

export const persistReducer = <T, A extends Action = Action>(
  config: PersistConfig<T>,
  reducer: Reducer<T, A>,
): Reducer<T & PersistPartial, A> => {
  const iniConfig: Omit<typeof config, 'storage'> & {storage: Storage} = {
    storage: persistStorage,
    version: 1,
    ...config,
  };
  const init = persisFunc(iniConfig, reducer);
  return init;
};

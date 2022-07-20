import {MMKV} from 'react-native-mmkv';

export const querysecureStorage = new MMKV({id: 'query-secure-storage', encryptionKey: 'asdyugatawefhasdfe'});

interface AsyncStorage {
  getItem: (key: string) => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export const queryStorage: AsyncStorage = {
  setItem: (key, value) => {
    querysecureStorage.set(key, value);
    return Promise.resolve();
  },
  getItem: key => {
    const value = querysecureStorage.getString(key) ?? '';
    return Promise.resolve(value);
  },
  removeItem: key => {
    querysecureStorage.delete(key);
    return Promise.resolve();
  },
};

import {MMKV} from 'react-native-mmkv';

export const querysecureStorage = new MMKV({id: 'query-secure-storage', encryptionKey: 'asdyugatawefhasdfe'});

interface AsyncStorage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

export const queryStorage: AsyncStorage = {
  setItem: (key, value) => {
    querysecureStorage.set(key, value);
  },
  getItem: key => {
    return querysecureStorage.getString(key) ?? null;
  },
  removeItem: key => {
    querysecureStorage.delete(key);
  },
};

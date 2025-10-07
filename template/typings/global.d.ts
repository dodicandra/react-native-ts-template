import {ShadowStyleIOS} from 'react-native';

interface ResponseMessage {
  code: number;
  message: string;
}

interface ResponseData<T> {
  code: number;
  message: string;
  data: T;
  error: any[];
}

interface ResponseDataWithPaging<T> {
  code: number;
  message: string;
  data: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
    data: T;
  };
  error: any[];
}

type ObjectKeys<T> = T extends object
  ? (keyof T & string)[]
  : T extends number
  ? []
  : T extends Array<any> | string
  ? string[]
  : never;

type MapedKey<T> = {[K in keyof T]-?: [K, T[K]]}[keyof T];
type Entries<T> = T extends ArrayLike<infer U> ? [string, U][] : MapedKey<T>[];

declare global {
  type KeyOf<T> = Extract<keyof T, string>;
  type PickOnce<T, K extends keyof T> = Pick<T, K>[K];
  type IExtract<T, K extends T> = Extract<T, K>;
  type IExclude<T, K extends T> = Exclude<T, K>;
  type Remove<T, K extends keyof T> = Omit<T, K>;

  const isAndroid: boolean;
  const isIOS: boolean;
  const isIPhoneX: boolean;
  const isWeb: boolean;
  const shadow: ShadowStyleIOS;
  const appVersion: string;
  const buildNumber: string;
  const bundleId: string;

  namespace dimension {
    let width: number;
    let height: number;
  }

  type Remove<T, K> = Pick<T, Exclude<keyof T, K>>;
  type Merge<T, M> = Omit<T, keyof M> & M;
  type RequiredPick<T, Req extends keyof T> = Omit<T, Req> & Pick<Required<T>, Req>;
  type ArrayToObj<T extends readonly any[]> = T[number];
  type PartialOnce<T, O extends keyof T> = Omit<T, O> & Partial<Pick<T, O>>;

  type BaseResponse<T, P extends 'paging' | null = null> = T extends undefined
    ? ResponseMessage
    : P extends null
    ? ResponseData<T>
    : ResponseDataWithPaging<T>;

  interface ObjectConstructor {
    keys<T extends object>(o: T): ObjectKeys<T>;
    entries<T>(o: T): Entries<T>;
    assign<T, U>(target: T, source: U): T & U;
    values<T>(o: T): T[keyof T][];
  }

  interface BaseResponseMMS<T> {
    targetUrl: string;
    success: boolean;
    error: {
      code: number;
      message: string;
      details: any;
      validationErrors: any;
    };
    unAuthorizedRequest: boolean;
    __abp: boolean;
    result: T;
  }
}

export {};

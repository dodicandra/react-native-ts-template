import {HTTPError} from 'ky';

import {
  QueryFunction,
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';

type InfiniteQueryFunction<T = unknown, TQueryKey extends QueryKey = QueryKey, PageParam = any> = (
  context: QueryFunctionContext<TQueryKey, PageParam>,
) => T | Promise<T>;

export type UseInfiniteOptions<TData, TKey extends QueryKey = QueryKey, TError extends HTTPError = HTTPError> = Omit<
  UseInfiniteQueryOptions<TData, TError, TData, TData, TKey>,
  'queryKey' | 'queryFn'
>;

export type UseRQOptions<TData, TKey extends QueryKey = QueryKey, TError extends HTTPError = HTTPError> = Omit<
  UseQueryOptions<TData, TError, TData, TKey>,
  'queryKey' | 'queryFn' | 'initialData'
>;

export const useRQ = <TData = unknown, TKey extends QueryKey = QueryKey, TError extends HTTPError = HTTPError>(
  queryKey: TKey,
  queryFn: QueryFunction<TData, TKey>,
  options?: UseRQOptions<TData, TKey, TError>,
) => useQuery<TData, TError, TData, TKey>(queryKey, queryFn, options);

export const useInfiniteRQ = <TData = unknown, TKey extends QueryKey = QueryKey, TError extends HTTPError = HTTPError>(
  queryKey: TKey,
  queryFn: InfiniteQueryFunction<TData, TKey>,
  options?: UseInfiniteOptions<TData, TKey, TError>,
) => useInfiniteQuery<TData, TError, TData, TKey>(queryKey, queryFn, options);

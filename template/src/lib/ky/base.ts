import ky from 'ky';

import {authAfterResponseHooks, authBeforeResponseHooks} from './hooks';

const kyInstance = ky.create({
  headers: {
    'cache-control': 'no-cache',
  },
});

const base = kyInstance.extend({
  prefixUrl: process.env.EXPO_PUBLIC_API_HOST,
  timeout: 6e4 * 4,
  hooks: {
    afterResponse: [authAfterResponseHooks],
    beforeRequest: [authBeforeResponseHooks],
  },
  retry: {
    limit: 2,
    methods: ['get', 'post', 'put', 'delete'],
    statusCodes: [408, 500],
  },
});

const Swapi = base.extend({});

export {Swapi};

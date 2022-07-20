import ky, {AfterResponseHook, BeforeErrorHook, BeforeRequestHook, BeforeRetryHook} from 'ky';

import {API_HOST} from '@config';

const kyInstanceHook = ky.create({
  prefixUrl: API_HOST,
  headers: {
    'cache-control': 'no-cache',
  },
});

export const authBeforeResponseHooks: BeforeRequestHook = async ({headers}) => {
  // store.subscribe(store.getState);
  // const {
  //     token
  // } = store.getState();
  const token = '';
  headers.set('Authorization', 'Bearer ' + token);
};

export const authBeforeRetryeHooks: BeforeRetryHook = ({request}) => {
  const token = '';

  if (token) {
    request.headers.set('Authorization', 'Bearer ' + token);
  }
};

const transFormErrorCode: BeforeErrorHook = async error => {
  const status = error.response.status;
  const body = error.request.body;
  const responseBody = (await error.response.json()) as {message: string; code: number};
  if (status >= 400) {
    Object.assign(error.response, {status: 432});
  }
  console.log(
    'authAfterResponseHooks HOOKS=>',
    error.response.status,
    JSON.stringify({body, message: responseBody.message, errRes: error.message}, null, 2),
  );
  return error;
};

export const authAfterResponseHooks: AfterResponseHook = async (req, option, res) => {
  const statusCode = [401].includes(res.status);
  if (statusCode) {
    console.log('PROCCESS TO RELOGIN');

    const response = await kyInstanceHook
      .extend({
        hooks: {
          beforeRequest: [authBeforeResponseHooks],
          beforeError: [transFormErrorCode],
        },
      })
      .post('url-to-refresh-token')
      .json<{token: string}>();

    req.headers.set('Authorization', `Bearer ${response.token}`);
    return kyInstanceHook(req, option);
  }
};

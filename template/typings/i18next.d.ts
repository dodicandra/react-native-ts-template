import 'i18next';

import {TFunction as TF} from 'react-i18next';

declare module 'i18next' {
  interface i18n {
    trans: TF;
  }
  interface TFunction extends TF {}
}

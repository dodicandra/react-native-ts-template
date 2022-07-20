import {initReactI18next, TFunction} from 'react-i18next';

import i18n from 'i18next';

import en from './locales/en.json';
import id from './locales/id.json';

export const resources = {en: {translation: en}, id: {translation: id}} as const;

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    defaultVariables: {value: ''},
  },
  react: {
    useSuspense: false,
  },
});

export const translate = i18n.t as TFunction;

export default i18n;

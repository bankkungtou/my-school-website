import { th } from './th';
import { en } from './en';
import { zh } from './zh';

export const translations = {
  th,
  en,
  zh
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof th;
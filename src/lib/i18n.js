import en from '../../messages/en.json';
import ar from '../../messages/ar.json';

export function getTranslations(locale) {
  return locale === 'ar' ? ar : en;
}

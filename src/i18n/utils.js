import { ui, defaultLang } from './ui.jsx';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key] || key;
  };
}

export function getRouteFromUrl(url, lang) {
  const pathname = url.pathname;
  const currentLang = getLangFromUrl(url);
  
  // Replace the current language with the target language
  return pathname.replace(`/${currentLang}/`, `/${lang}/`);
}

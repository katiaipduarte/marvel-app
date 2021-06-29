declare module 'styled-modern-normalize';
declare module 'query-string';

declare namespace NodeJS {
  interface Process {
    browser: boolean | undefined;
  }
}

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any | undefined;

  google: {
    maps: google.maps.Map;
  };

  dataLayer: any[];

  sessionId?: string;

  IntersectionObserver: IntersectionObserver;
}

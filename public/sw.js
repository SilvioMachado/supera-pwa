var CACHE_NAME = 'supera-app-cache';

var urlsToCache = [
  '/',
  'static/css/main.a9f58ec5.chunk.css',
  'static/css/main.a9f58ec5.chunk.css.map',
  'static/js/2.8cfb44aa.chunk.js',
  'static/js/2.8cfb44aa.chunk.js.LICENSE.txt',
  'static/js/2.8cfb44aa.chunk.js.map',
  'static/js/main.db15fceb.chunk.js',
  'static/js/main.db15fceb.chunk.js.map',
  'static/js/runtime-main.fadbe591.js',
  'static/js/runtime-main.fadbe591.js.map',
  'index.html'
];

self.addEventListener('install', event => {
  // Install is done by caching everything.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {return response;}
        return fetch(event.request);
      })
  )
})
var CACHE_NAME = 'supera-app-cache';

var urlsToCache = [
  '/',
]

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
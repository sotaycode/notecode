var CACHE_NAME = '20201128182555';

self.addEventListener('install',event => {
  event.waitUntil(caches.open(CACHE_NAME)
  .then(cache => cache.addAll([
    '/404.html',
    '/about/',
    
    '/blog/',
    '/',
    
    
    
    
    
    
    
    '/blog/welcome-to-jekyll',
  ]))
);
});

self.addEventListener('fetch',event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) return response;

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(response => {
          if (!response || response.status != 200 || response.type !== 'basic')
            return response;

          var responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache =>
            cache.put(event.request, responseToCache)
          );
          return response;
        }).catch(() => caches.match('/'))
    }));
});

self.addEventListener('activate',event => {
  var chacheWhiteList=[CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList => {
        return Promise.all(keyList.map(key => {
          if (chacheWhiteList.indexOf(key) === -1)
            return caches.delete(key);
        }));
      })
  );
});

var cacheName = 'cache_fintech_pwa';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js ');

workbox.routing.registerRoute(
  new RegExp('index.html'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);



self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/main.css',

        './assets/css/noscript.css',

        './assets/js/breakpoints.min.js',

        './assets/js/browser.min.js',

        './assets/js/jquery.min.js',

        './assets/js/main.js',

        './assets/images/hands-on-desk-at-meeting.jpg',
        './assets/images/smiling-man-woman-pug.jpg',
        './assets/images/there-she-goes.jpg',

        './assets/images/icones/android-launchericon-48-48',
        './assets/images/icones/android-launchericon-72-72',
        './assets/images/icones/android-launchericon-96-96',
        './assets/images/icones/android-launchericon-144-144',
        './assets/images/icones/android-launchericon-192-192',
        './assets/images/icones/android-launchericon-512-512',

      ]))
  );
});

navigator.vibrate(200);

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open('pwa-cache')
			.then(function(cache) {
				return cache.addAll('index.html',
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
								);
			})
	);
});

self.addEventListener('fetch', function(event) {
	event.repondWith(
		caches
			.match(event.request)
			.then(function(response) {
				return response || fetch(event.request);
			})
	);
});



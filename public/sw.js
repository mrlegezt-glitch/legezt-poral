const CACHE_NAME = "liet-portal-cache-v1";
const urlsToCache = [
  "/",
  "/manifest.json",
  "/logo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  // Only cache GET requests
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Bypass service worker for API calls and internal Next.js build chunks
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/_next/")) {
    return;
  }

  // Network-First with Cache Fallback strategy
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If response is valid, dynamically cache a clone of it
        if (response && response.status === 200 && response.type === "basic") {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(async () => {
        // Fetch failed (network offline). Try matching request from cache
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // If no match, try fallback to cached root "/"
        const fallback = await caches.match("/");
        if (fallback) {
          return fallback;
        }

        // Return a clean fallback Response to prevent browser ERR_FAILED crash
        return new Response("Offline - Connection Failed", {
          status: 503,
          headers: { "Content-Type": "text/plain" }
        });
      })
  );
});

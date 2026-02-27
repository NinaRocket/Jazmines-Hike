/* Jazmine's Journey Service Worker */
const CACHE_VERSION = "jj-v1";
const PRECACHE = `${CACHE_VERSION}-precache`;
const RUNTIME = `${CACHE_VERSION}-runtime`;

const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/style.css",
  "/index.js",
  "/install.html",
  "/offline.html"
  // Optional: add your most-visited pages, e.g.
  // "/pages/upcomingEvents.html",
  // "/pages/support.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(PRECACHE).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => ![PRECACHE, RUNTIME].includes(k))
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

async function networkFirst(request) {
  const cache = await caches.open(RUNTIME);
  try {
    const fresh = await fetch(request);
    cache.put(request, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await cache.match(request);
    return cached || caches.match("/offline.html");
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((fresh) => {
      cache.put(request, fresh.clone());
      return fresh;
    })
    .catch(() => null);

  return cached || (await fetchPromise) || caches.match("/offline.html");
}

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Only handle GET
  if (req.method !== "GET") return;

  // HTML navigation: Network-first (best for keeping pages fresh)
  if (req.mode === "navigate") {
    event.respondWith(networkFirst(req));
    return;
  }

  // Static assets: Stale-while-revalidate (fast + updates in background)
  const dest = req.destination; // "script", "style", "image", "font", etc.
  if (["script", "style", "image", "font"].includes(dest)) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // Default: try cache, then network
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});

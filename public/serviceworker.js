self.addEventListener("install", function () {
  console.log("install");
});

self.addEventListener("activate", function () {
  console.log("activate");
});

self.addEventListener("fetch", function (event) {
  if (event.request.url.includes("bootstrap.min.css")) {
    console.log("Fetch request for: ", event.request.url);

    event.respondWith(
      new Response(
        ".hotel-slogan {background: green! important;} nav {dispaly: none}",
        { headers: { "Content-Type": "text/css" } }
      )
    );
  }
});

self.addEventListener("push", function (event) {
  event.waitUntil(
    fetch("/updates").then(function (response) {
      return self.registration.showNotification(response.text());
    })
  );
});

// const CACHE_NAME = "gih-cache";
// const CACHED_URLS = [
//   "/index-offline.html",
//   "https://maxcdn.bootstrapcnd.com/bootstrap/3.3.6/css/bootstrap.min.css",
//   "/css/gih-offline.css",
//   "/img/jumbo-background-sm.jpg",
//   "/img/logo-header.png",
// ];

// self.addEventListener("install", function (event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       return cache.addAll(CACHED_URLS);
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     fetch(event.request).catch(function (response) {
//       if (response) {
//         return response;
//       } else if (event.request.headers.get("accept").includes("text/html")) {
//         return caches.match("/index-offline.html");
//       }
//     })
//   );
// });

// self.addEventListener("install", function (event) {
//   event.waitUntil(
//     // service worker install 이벤트는 캐시에 저장이 끝난 후 발생.
//     // 캐시 저장이 실패하거나 어떤 오류가 난다면 service worker를 install하지 않음.
//     caches.open("gih-cache").then(function (cache) {
//       return cache.add("/index-offline.html");
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.match(event.request).catch(function () {
//       return caches.match("/index-offline.html");
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   if (event.request.url.includes("bootstrap.min.css")) {
//     event.respondWith(
//       new Response(
//         ".hotel-slogan {background: green !important;} nav {display: none}",
//         { headers: { "Content-Type": "text/css" } }
//       )
//     );
//   }
// });

// self.addEventListener("fetch", function (event) {
//   if (event.request.url.includes("/img/logo.png")) {
//     event.respondWith(fetch("/img/logo-flipped.png"));
//   }
// });

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     fetch(event.request).catch(function () {
//       return new Response(
//         "Welcome to the Gotham Imperial Hotel.\n" +
//           "There seems to be a problem with your connection. \n" +
//           "We look forward to telling you about our hotel as soon as you go online."
//       );
//     })
//   );
// });

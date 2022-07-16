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

self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return new Response(
        "Welcome to the Gotham Imperial Hotel.\n" +
          "There seems to be a problem with your connection. \n" +
          "We look forward to telling you about our hotel as soon as you go online."
      );
    })
  );
});

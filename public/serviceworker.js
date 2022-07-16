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

self.addEventListener("fetch", function (event) {
  if (event.request.url.includes("/img/logo.png")) {
    event.respondWith(fetch("/img/logo-flipped.png"));
  }
});

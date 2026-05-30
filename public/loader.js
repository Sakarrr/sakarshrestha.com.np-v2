var appReady = false;
var minElapsed = false;

var pct = document.getElementById("loader-pct");
var start = performance.now();
var duration = 1400;

function tick(now) {
  var progress = Math.min((now - start) / duration, 1);
  if (pct) pct.textContent = Math.round(progress * 100) + "%";
  if (progress < 1) requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

function dismiss() {
  if (!appReady || !minElapsed) return;
  var loader = document.getElementById("loader");
  if (!loader) return;
  document.body.classList.remove("loading");
  loader.classList.add("done");
  loader.addEventListener(
    "animationend",
    function () {
      loader.classList.add("gone");
    },
    { once: true },
  );
}

setTimeout(function () {
  minElapsed = true;
  dismiss();
}, 1400);

window.addEventListener("app:ready", function () {
  appReady = true;
  dismiss();
});

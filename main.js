import u from "./umbrella.esm.js";

// const normal = u('.normal');
const special = u(".special");
const normal = u(".normal");
const safetyLink = u("#top-link");
const specialNotes = u(".special-note");
const permissionLink = u("#permission-prompt");

window.addEventListener("beforeunload", () => {
  showNormalTop();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    showNormalTop();
  }
});

window.addEventListener("devicemotion", event => {
  let motion = `${event.acceleration.x} m/s2 on x-axis, ${event.acceleration.y} m/s2 on y-axis, ${event.acceleration.z} m/s on z-axis`;
  if (
    event.acceleration.x > 15 ||
    event.acceleration.y > 15 ||
    event.acceleration.z > 15
  ) {
    showNormal();
  }
});

permissionLink.on("click", event => {
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    DeviceMotionEvent.requestPermission();
  }
});

safetyLink.on("click", () => {
  showNormal();
});

function showNormal() {
  special.addClass("hidden");
  normal.removeClass("hidden");
}

function showNormalTop() {
  showNormal();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

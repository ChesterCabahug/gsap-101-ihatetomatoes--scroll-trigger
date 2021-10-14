gsap.registerPlugin(ScrollTrigger);

function init() {
  // 2>1 scrollTrigger basics
  // gsap.to("#intro img", {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: "#intro",
  //     start: "top top",
  //     end: "bottom center",
  //     scrub: true,
  //     markers: true,
  //   },
  // });
}

window.addEventListener("load", function () {
  init();
});

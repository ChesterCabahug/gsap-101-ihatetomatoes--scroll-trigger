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

  // 2>2 toggle css class
  gsap.set("#project02", {scrollTrigger: {
    trigger: "#project02",
    start: "top bottom-=150",
    end: "bottom center-=150",
    toggleClass: "active",
    markers: true,
  }})
}

window.addEventListener("load", function () {
  init();
});

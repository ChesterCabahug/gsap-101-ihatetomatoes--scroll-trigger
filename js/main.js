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

  // // 2>2 toggle css class
  // gsap.set("#project02", {scrollTrigger: {
  //   trigger: "#project02",
  //   start: "top bottom-=150",
  //   end: "bottom center-=150",
  //   toggleClass: "active",
  //   markers: true,
  // }})

  // // 2>3 simple parallax
  // const parallaxTl = gsap.timeline({
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".bcg-parallax",
  //     start: "top bottom",
  //     scrub: true,
  //     markers: true
  //   }
  // })
  // parallaxTl
  //   .from(".content-wrapper", {duration: 0.4, autoAlpha: 0}, 0.4)
  //   .from(".bcg", {duration: 2, y:"-30%"}, 0)

  // 2>4 simple pin example
  gsap.to(["#intro h1", "#intro p"], {
    duration: 1,
    autoAlpha: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#intro .content",
      pin: true,
      start: "top-=100 top",
      end: "bottom top+=250",
      scrub: true,
      markers: true,
    },
  });
}

window.addEventListener("load", function () {
  init();
});

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

  // // 2>4 simple pin example
  // gsap.to(["#intro h1", "#intro p"], {
  //   duration: 1,
  //   autoAlpha: 0,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: "#intro .content",
  //     pin: true,
  //     start: "top top+=5%",
  //     scrub: true,
  //     markers: true,
  //   },
  // });

  // 2>5 triggering multiple actions
  const projects = document.querySelectorAll(".project")

  projects.forEach(project => {
    gsap.from(project, {
      opacity: 0,
      y: "5%",
      scrollTrigger: {
        trigger: project.querySelector("img"),
        start: "top bottom-=300",
        end: "top center",
        toggleActions: "play none none reverse",
        markers: true
      }
    })
  })

}

window.addEventListener("load", function () {
  init();
});

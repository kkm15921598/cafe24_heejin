(function () {
  if (!window.gsap) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.from(".hero-copy > *", {
    y: 24,
    opacity: 0,
    duration: 0.85,
    stagger: 0.12,
    ease: "power3.out"
  });

  if (window.ScrollTrigger) {
    gsap.utils.toArray(".section-head, .promo, .promise, .footer-top").forEach(function (item) {
      gsap.from(item, {
        y: 36,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 84%",
          once: true
        }
      });
    });

    [
      [".benefit-grid article", ".benefits"],
      [".product-card", ".products-section"],
      [".concern-grid article", ".recommend-section"],
      [".review-grid article", ".review-section"],
      [".promise article", ".promise"]
    ].forEach(function (group) {
      gsap.from(group[0], {
        y: 34,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: group[1],
          start: "top 78%",
          once: true
        }
      });
    });
  }

  var hoverCards = document.querySelectorAll(".product-card, .concern-grid article, .review-grid article");
  hoverCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      gsap.to(card, {
        y: -6,
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    card.addEventListener("mouseleave", function () {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    });
  });

})();

let tl = gsap.timeline();

// Animate lines
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

// Animate right-side + h2
tl.from("#right-side, .line h2", {
  opacity: 0,
  duration: 0.5,
  onStart: function () {
    let h5count = document.querySelector("#right-side h5");
    let count = 0;
    let interval = setInterval(() => {
      if (count <= 100) {
        h5count.textContent = count++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  },
});

// Fade out loader
tl.to("#loader", {
  opacity: 0,
  duration: 0.6,
  delay: 2,
  onComplete: function () {
    document.querySelector("#loader").style.display = "none";
  },
});

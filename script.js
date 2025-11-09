document.addEventListener("DOMContentLoaded", () => {
  const marquees = document.querySelectorAll(".marquee-items");

  marquees.forEach((marquee) => {
    // Clone children once for seamless looping
    const clone = marquee.cloneNode(true);
    marquee.append(...clone.children);

    let x = 0;
    const speed = 0.5 + Math.random() * 0.3; // slight variation per marquee

    function move() {
      x -= speed;
      const width = marquee.scrollWidth / 2;

      if (Math.abs(x) >= width) {
        x = 0;
      }

      marquee.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(move);
    }

    move();
  });
});



const boxes = document.querySelectorAll('.box-to-observe');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); 
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  root: null,
  rootMargin: "0px 0px 20px 0px",
  threshold: 0
});

boxes.forEach(box => observer.observe(box));
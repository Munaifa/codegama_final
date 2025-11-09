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

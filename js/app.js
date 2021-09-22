const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
console.log(header);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add('nav__background');
    } else {
      nav.classList.remove('nav__background');
    }
  });
}, options);

observer.observe(header);

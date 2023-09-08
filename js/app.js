const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const body = document.querySelector('body');
// const loaderEl = document.querySelector('#loader');
// console.log(loaderEl);

// console.log(header);

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

particlesJS.load('particles-js', 'js/particles.json', function () {
  // console.log('particle is loaded....😎😎');
  // console.log('callback - particles.js config loaded');
});

// window.addEventListener("load", () => {
// 	setTimeout(() => {
// 		loaderEl.classList.add("hide");
// 		loaderEl.classList.remove("show");
// 	}, 1000);
// });

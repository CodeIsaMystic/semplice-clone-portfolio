import '../styles/styles.css';



import barba from '@barba/core';
import barbaRouter from '@barba/router';
/*import barbaPrefetch from '@barba/prefetch';*/
import gsap from 'gsap/gsap-core';

import {
  mobileMenu,
  animationEnter
} from './modules';


const myRoutes = [
  { name: 'home', path: '/index.html' },
  { name: 'about', path: '/about.html' }
]

mobileMenu();

barba.use(barbaRouter, {
  routes: myRoutes
});
//barba.use(barbaPrefetch);



const resetActiveLink = () => {
  gsap.set('.nav-item a.is-active', { xPercent: -100, transformOrigin: 'left' });
  gsap.set('.progress-bar-on-load span', { xPercent: -100, transformOrigin: 'left' });
}



barba.hooks.enter((data) => {
  console.log({ data });
  window.scrollTo(0, 0);
});


barba.init({
  view: [
    {
      namespace: 'about',
      beforeEnter(data) {
        console.log(data)
      }
    }
  ],
  transitions: [
    {
      name: 'general-transition',
      once({ next }) {
        resetActiveLink();
        gsap.from(['.nav-item a', '.progress-bar'], {
          duration: .6,
          yPercent: 100,
          stagger: .2,
          ease: 'power1.out',
          onComplete: () => animationEnter(next.container)
        })

      },
      enter({ next }) {
        animationEnter(next.container);
      }
    }
  ]
});


if (module.hot) {
  module.hot.accept();
}
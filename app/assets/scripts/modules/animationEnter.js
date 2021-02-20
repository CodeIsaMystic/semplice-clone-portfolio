import gsap from 'gsap';

const animationEnter = (container) => {


  const activeLink = container.querySelector('nav-item a.is-active');

  const progressBar = container.querySelector('.progress-bar-on-load span');


  const tl = gsap.timeline({
    defaults: {
      duration: 0.9, ease: 'power4.out'
    }
  });

  tl
    .fromTo(activeLink, { xPercent: -101 }, { xPercent: 0, transformOrigin: 'left' }, 0)
    .fromTo(progressBar, { xPercent: -101 }, { xPercent: 0, transformOrigin: 'left' }, 0)

  tl.timeScale(0.5);

  return tl;
};


export default animationEnter;
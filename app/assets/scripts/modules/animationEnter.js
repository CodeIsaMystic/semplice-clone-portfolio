import gsap from 'gsap';

const animationEnter = (container) => {

  const activeLink = container.querySelector('.nav-item .is-active');
  const progressBar = container.querySelector('.progress-bar-on-load span');

  const tl = gsap.timeline({
    defaults: {
      duration: 0.9, ease: 'power4.out'
    }
  });




  tl
    .fromTo(progressBar, { xPercent: -101, autoAlpha: 0 }, { xPercent: 0, transformOrigin: 'left', autoAlpha: 1 }, 0)
    .fromTo(activeLink, { xPercent: -101 }, { xPercent: 0, transformOrigin: 'left' }, 0)
    .to(progressBar, 3, { autoAlpha: 0 }, 0.5)

  tl.timeScale(0.5);



  return tl;
};


export default animationEnter;
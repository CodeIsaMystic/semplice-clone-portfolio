import gsap from 'gsap';

const animationEnter = (container) => {


  const activeLink = container.querySelector('.nav-item .is-active');

  const progressBar = container.querySelector('.progress-bar-on-load span');

  console.log(activeLink, progressBar, "animationEnter func");


  const tl = gsap.timeline({
    defaults: {
      duration: 0.9, ease: 'power4.out'
    }
  });

  tl
    .set(activeLink, { autoAlpha: 0, ease: 'none' }, 0)
    .fromTo(progressBar, { xPercent: -101 }, { xPercent: 0, transformOrigin: 'left' }, 0)

  tl.timeScale(0.5);

  console.log(activeLink, progressBar, "after animationEnter func");

  return tl;

};


export default animationEnter;
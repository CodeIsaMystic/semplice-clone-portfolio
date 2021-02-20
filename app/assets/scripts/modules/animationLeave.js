import gsap from 'gsap';


const animationLeave = (container) => {

  const activeLink = container.querySelector('nav-item .is-active');
  const progressBar = container.querySelector('.progress-bar-on-load span');

  const tl = gsap.timeline({
    defaults: {
      duration: 0.6, ease: 'power1.in'
    }
  });



  tl
    .to(activeLink, { xPercent: 101 }, 0)
    .to(progressBar, { xPercent: -101, autoAlpha: 0 }, 0)

  tl.timeScale(0.5);



  return tl;
};

export default animationLeave;

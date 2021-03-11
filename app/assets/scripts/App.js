import '../styles/styles.css';

import barba from '@barba/core';
import barbaCss from '@barba/css';

import mobileMenu from './modules/mobileMenu';

const body = document.querySelector('body');


mobileMenu();

barba.use(barbaCss);



/**  GLOBAL HOOK TO HANDLE THE BODY BCG COLOR  **/
barba.hooks.before((data) => {

  const background = data.current.container.dataset.background;
  /**  SET NEW VALUES FORM THE DATA-BCG  TO THE CSS CLASS **/
  body.style.setProperty('--page-background', background);
});


barba.init({
  /*  IN AN ARRAY  */
  transitions: [
    {
      name: 'home',
      to: {
        namespace: ['home']
      },
      once: () => { },
      leave: () => { },
      enter: () => { },
    }, {
      name: 'slide',
      leave: () => { },
      enter: () => { },
      from: {
        namespace: ['home2']
      },
      to: {
        namespace: ['home']
      }
    }
  ]

});





if (module.hot) {
  module.hot.accept();
}
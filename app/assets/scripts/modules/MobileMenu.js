
function mobileMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const navBar = document.querySelector(".navbar");
  const topBar = document.querySelector(".top-bar");
  const siteHeader = document.querySelector(".site-header");



  /// ***********************************
  function toggleTheMenu() {

    /// ************************************
    navBar.classList.toggle("navbar--is-visible");
    topBar.classList.toggle("top-bar--is-visible");
    siteHeader.classList.toggle("site-header--is-expanded");
    menuBtn.classList.toggle("menu-btn--closeX");
  }

  /// ************************************
  menuBtn.addEventListener("click", () => toggleTheMenu());

}



export default mobileMenu;
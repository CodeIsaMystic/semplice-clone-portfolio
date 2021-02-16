class MobileMenu {
  constructor() {
    this.menuBtn = document.querySelector(".menu-btn");
    this.navBar = document.querySelector(".navbar");
    this.siteHeader = document.querySelector(".site-header");
    this.border = document.querySelector(".u-border");
    this.events();
  }

  events() {
    this.menuBtn.addEventListener("click", () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.navBar.classList.toggle("navbar--is-visible");
    this.siteHeader.classList.toggle("site-header--is-expanded");
    this.border.classList.add("u-border--is-displayed");
    this.menuBtn.classList.toggle("menu-btn--closeX");


    /*
    function displayingAll() {
    }

    displayingAll();
    */
  }
}

export default MobileMenu;
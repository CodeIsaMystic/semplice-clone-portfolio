class MobileMenu {
  constructor() {
    this.menuBtn = document.querySelector(".menu-btn");
    this.navBar = document.querySelector(".navbar");
    this.siteHeader = document.querySelector(".site-header");
    this.events();
  }

  events() {
    this.menuBtn.addEventListener("click", () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.navBar.classList.toggle("navbar--is-visible");
    this.siteHeader.classList.toggle("site-header--is-expanded");
    this.menuBtn.classList.toggle("menu-btn--closeX");
  }
}

export default MobileMenu;
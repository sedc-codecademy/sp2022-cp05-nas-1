class Navbar extends HTMLElement {
   constructor() {
      super();
      this.displayCategories = false;
      this.showSearchbar = false;
      this.showUserOptions = false;
      this.attachShadow({ mode: 'open' });
   }

   toggleDisplayCategories() {
      this.displayCategories = !this.displayCategories;
      const hamburger = this.shadowRoot.querySelector('.hamburger');
      if (this.displayCategories) {
         hamburger.classList.add('hamburger-active');
         document.querySelector('c-l-sidebar').shadowRoot.querySelector('.navigation').classList.add('active');
      } else {
         hamburger.classList.remove('hamburger-active');
         document.querySelector('c-l-sidebar').shadowRoot.querySelector('.navigation').classList.remove('active');
      }
   }

   toggleSearchBar() {
      this.showSearchbar = !this.showSearchbar;
      const searchbar = this.shadowRoot.querySelector('#searchbar');
      if (this.showSearchbar) {
         searchbar.style.display = 'flex';
         this.shadowRoot.querySelector('#search-input').focus();
      } else {
         searchbar.style.display = 'none';
      }
   }

   toggleUserOprions() {
      this.showUserOptions = !this.showUserOptions;
      const userOptions = this.shadowRoot.querySelector('#user-options');
      const toggleBtn = this.shadowRoot.querySelector('#toggle-user-options i ');
      if (this.showUserOptions) {
         toggleBtn.style.backgroundColor = '#f7473e';
         userOptions.style.transform = 'translateX(0)';
      } else {
         toggleBtn.style.backgroundColor = '#fff';
         userOptions.style.transform = 'translateX(100%)';
      }
   }

   async connectedCallback() {
      const navbarTemplate = document.createElement('template');
      const html = await fetch('../../components/navbar/navbar.html').then((stream) => stream.text());
      navbarTemplate.innerHTML = html;
      this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
      this.shadowRoot.querySelector('.hamburger').addEventListener('click', () => this.toggleDisplayCategories());
      this.shadowRoot.querySelector('#open-searchbar').addEventListener('click', () => this.toggleSearchBar());
      this.shadowRoot.querySelector('#close-searchbar').addEventListener('click', () => this.toggleSearchBar());
      this.shadowRoot.querySelector('#toggle-user-options').addEventListener('click', () => this.toggleUserOprions());
   }

   disconnectedCallback() {
      this.shadowRoot.querySelector('.hamburger').removeEventListener('click', () => this.toggleDisplayCategories());
      this.shadowRoot.querySelector('#open-searchbar').removeEventListener('click', () => this.toggleSearchBar());
      this.shadowRoot.querySelector('#close-searchbar').removeEventListener('click', () => this.toggleSearchBar());
      this.shadowRoot
         .querySelector('#toggle-user-options')
         .removeEventListener('click', () => this.toggleUserOprions());
   }
}

window.customElements.define('c-navbar', Navbar);

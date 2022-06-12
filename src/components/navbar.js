const navbarTemplate = document.createElement('template');

navbarTemplate.innerHTML = `
    <style>
        *, 
        *::before, 
        *::after{
            margin : 0;
            padding : 0;
        }
        header { 
            background-color:${getComputedStyle(document.querySelector(':root')).getPropertyValue('--primary-color')};
        }
        
    </style>

    <header id="navbar">
        <h1>hello</h1>
    </header>
`;

class Navbar extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
   }
}

window.customElements.define('c-navbar', Navbar);

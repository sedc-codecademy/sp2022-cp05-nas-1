const navbarTemplate = document.createElement('template');

navbarTemplate.innerHTML = `
    <style>
        *, 
        *::before, 
        *::after{
            margin : 0;
            padding : 0;
        }
        #navbar{
            position:relative;
            height:80px;
            width:100%;
            padding:0 30px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            background-color: var(--primary-color);
        }

        .hamburger{
            height:40px;
            left:20px;
            vertical-align: middle;
            display:flex;
            flex-direction:column;
            justify-content:space-around;

            cursor:pointer;
        }

        #navbar img {
            width:160px;
        }

        .hamburger .line{
            height:3px;
            width:35px;
            background-color:white;
            transition : transform 300ms linear , opacity 300ms linear;
        }

        .hamburger-active .line-top{
            transform : rotate(-45deg) translate(-9px,10px);
        }
        .hamburger-active .line-middle{
            opacity:0;
        }
        .hamburger-active .line-bottom{
            transform : rotate(45deg) translate(-9px,-10px);
        }

        #search-icon{
            height:30px;
            width:30px;
            cursor:pointer;
        }
        
        

    </style>

    <header>
        <nav id="navbar">
            <div class="hamburger">
                <div class="line line-top"></div>
                <div class="line line-middle"></div>
                <div class="line line-bottom"></div>
            </div>
            
            <a href="#"><img src="../../assets/images/global/logo.png" alt="logo"></a>



            <img id="search-icon" src="../../assets/icons/search-icon.svg">
        </nav>
    </header>
`;

class Navbar extends HTMLElement {
   constructor() {
      super();
      this.displayCategories = false;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
   }

   toggleDisplayCategories() {
      this.displayCategories = !this.displayCategories;
      const hamburger = this.shadowRoot.querySelector('.hamburger');
      if (this.displayCategories) {
         hamburger.classList.add('hamburger-active');
      } else {
         hamburger.classList.remove('hamburger-active');
      }
   }

   connectedCallback() {
      this.shadowRoot.querySelector('.hamburger').addEventListener('click', () => this.toggleDisplayCategories());
   }
}

window.customElements.define('c-navbar', Navbar);

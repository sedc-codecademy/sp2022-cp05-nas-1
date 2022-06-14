const navbarTemplate = document.createElement('template');

navbarTemplate.innerHTML = `
    <style>
        *, 
        *::before, 
        *::after{
            margin : 0;
            padding : 0;
        }
        button {
            cursor: pointer;
        }
        a{
            text-decoration : none;
            color: #000;
        }
         
        header {
            width: 100vw;
            height: 70px;
            position: sticky;
            top: 0;
            left: 0;
        }
         
        nav {
            padding: 15px 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            background-color: var(--primary-color);
        }
         
        .hamburger {
            height: 40px;
            left: 20px;
            vertical-align: middle;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            cursor: pointer;
        }
         
        #navbar img {
            width: 160px;
        }
         
        .hamburger .line {
            height: 3px;
            width: 35px;
            background-color: white;
            transition: transform 300ms linear, opacity 300ms linear;
        }
         
        .hamburger-active .line-top {
            transform: rotate(-45deg) translate(-9px, 10px);
        }
         .hamburger-active .line-middle {
            opacity: 0;
        }
        .hamburger-active .line-bottom {
            transform: rotate(45deg) translate(-9px, -10px);
        }
         
        #searchbar {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: none;
            z-index: 5;
        }
         
        #searchbar .icon-close {
            width: 70px;
        }
         
        #searchbar form {
            width: 100%;
            display: flex;
        }
         
        #searchbar input {
            height: 100%;
            flex-grow: 1;
            text-indent: 30px;
            font-size: 24px;
        }
        #searchbar form button {
            width: 70px;
        }
         
         /* SEARCH BAR */
         /* #search-input {
            background-color: transparent;
            background-image: url('./search-icon.svg');
            background-position: 5px center;
            background-repeat: no-repeat;
            background-size: 24px 24px;
            border: none;
            cursor: pointer;
            height: 37px;
            margin: 3px 0;
            padding: 0 0 0 34px;
            position: absolute;
            right: 4px;
            top: 11px;
            -webkit-transition: width 400ms ease, 400ms ease;
            transition: width 400ms ease, 400ms ease;
            width: 0;
         } */
         
         /* #search-input:focus {
            background-color: #fff;
            border: 1px solid black;
            cursor: text;
            height: 6%;
            width: 99%;
         } */
         
         /* .search-btn {
            display: none;
         } */
         
         .btn-transparent {
            background-color: transparent;
            border: none;
         }
        
         
        input[type="search"] {
            -webkit-appearance: textfield;
        }

        #user-options {
            position: absolute;
            padding-top: 50px;
            right: 0;
            top: 70px;
            background-color: var(--primary-color);
            width: 100%;
            height: calc(100vh - 70px);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            border-top: 2px solid var(--secondary-color);
            gap: 20px;
            transform: translateX(100%);
            transition : transform 300ms ease; 
        }
         
        .btn {
            width: 70%;
            text-align: center;
            padding: 20px 0;
            border-radius: 10px;
            font-size: 24px;
            letter-spacing: 2px;
            cursor: pointer;
            font-weight:300;
            display:flex;
            align-items:center;
            justify-content:center;
            text-align:center;
            gap:10px;
        }

        .btn i {
            margin: 0;
            padding : 0;
        }
      
         
        .btn-primary {
            background-color: white;
            color: var(--primary-color);
        }
         
        .btn-secondary {
            background-color: #f7473e;
            color : #fff;
        }
        #togglers button{
            margin:0 10px;
        }
         
        @media screen and (min-width : 992px){
            header{
                margin-bottom:70px;
            }
            nav{
                justify-content:space-around;
            }
            #togglers{
                display : none;
            }
            .hamburger {
                display : none;
            }
           
            #searchbar{
                display : block;
                position : static;
                width : 40%;
            }
            #searchbar input{ 
                border-radius : 50px;
                border:none;
                height: 50px;
            }

        
            #searchbar input:focus{
                outline: 2px solid var(--secondary-color);
            }

            #searchbar form {
                position : relative;
            }
            #searchbar form button {
                position:absolute;
                background-color:transparent;
                border:none;
                right:20px;
                top:10px;
            }
            #searchbar #close-searchbar{
                display:none;
            }

            #user-options{
                position : static;
                transform:none;
                height : fit-content;
                width:fit-content;
                padding-top: 0;
                border : none;
                display : flex;
                flex-direction : row;
            }

            .btn {
                width : 130px;
                padding : 10px 20px;
                display:flex;
                position:relative;
            }

            .btn::before{
                position:absolute;
                content:'';
                top:0;
                left:0;
                width:100%;
                height:100%;
                border-radius:inherit;
                background-color:rgba(0,0,0,0.2);
                transform: scaleX(0);
                transition : transform 200ms ease-in;
                transform-origin : right;
            }
            .btn:hover::before{
                transform : scaleX(100%);
                transform-origin : left;
            }
        }

        .icon {
            display:block;
            mask-size: contain;
            mask-repeat: no-repeat;
            -webkit-mask-size: contain;
            -webkit-mask-repeat: no-repeat;
            width: 30px;
            height: 30px;
            margin: 0 25%;
        }
         
        .icon-close {
            mask-image: url("../../assets/icons/x-lg.svg");
            -webkit-mask-image: url("../../assets/icons/x-lg.svg");
        }
        .icon-search {
            mask-image: url("../../assets/icons/search-icon.svg");
            -webkit-mask-image: url("../../assets/icons/search-icon.svg");
        }
        .icon-user{
            mask-image: url("../../assets/icons/people-fill.svg");
            -webkit-mask-image: url("../../assets/icons/people-fill.svg");
        }
        .icon-login{
            mask-image: url("../../assets/icons/person-fill.svg");
            -webkit-mask-image: url("../../assets/icons/person-fill.svg");
        }
        .icon-signup{
            mask-image: url("../../assets/icons/person-plus-fill.svg");
            -webkit-mask-image: url("../../assets/icons/person-plus-fill.svg");
        }
        .icon-black {
            background-color: #000;
        }
        .icon-white {
            background-color: #fff;
        }
        .icon-blue{
            background-color : var(--primary-color);
        }
        
    </style>
    <header>
        <nav id="navbar">
            <div class="hamburger">
                <div class="line line-top"></div>
                <div class="line line-middle"></div>
                <div class="line line-bottom"></div>
            </div>
            <div>
                <a href="#"><img src="../../assets/images/global/logo.png" alt="logo"></a>
            </div>
            <div id="searchbar">
                <button id="close-searchbar" class="btn-icon"><i class="icon icon-close icon-black"></i></button>
                <form method="get" action="" role="search" id="express-form" novalidate="">
                    <input type="search" name="search" placeholder="Search..." id="search-input">
                    <button class="search-btn btn-icon" type="submit">
                        <i class="icon icon-search icon-black"></i>
                    </button>
                </form>
            </div>
            <div id="togglers">
                <button id="toggle-user-options" class="btn-transparent btn-icon"><i class="icon icon-user icon-white"></i></button>
                <button id="open-searchbar" class="btn-transparent btn-icon"> <i class="icon icon-search icon-white"></i></button>
            </div>
            <div id="user-options">
                <a href="#" class="btn btn-primary">Login <i class="icon icon-login icon-blue"></i></a>
                <a href="#" class="btn btn-secondary">Signup <i class="icon icon-signup icon-white"></i></a>
            </div>
        </nav>
    </header>
`;

class Navbar extends HTMLElement {
   constructor() {
      super();
      this.displayCategories = false;
      this.showSearchbar = false;
      this.showUserOptions = false;
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
   connectedCallback() {
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

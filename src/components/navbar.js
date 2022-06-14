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
			padding: 15px 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;
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
        
        
        /* SEARCH BAR */
        #search-input {
			background-color: transparent;
			background-image: url('../../assets/icons/search-icon.svg');
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
		}

		#search-input:focus {
			background-color: #fff;
			border: 1px solid black;
			cursor: text;
			height: 6%;
			width: 99%;
		}

		.search-btn {
			display: none;
		}

		input[type="search"] {
			-webkit-appearance: textfield;
		}
    </style>

    <header>
    <nav id="navbar">
        <div class="hamburger">
            <div class="line line-top"></div>
            <div class="line line-middle"></div>
            <div class="line line-bottom"></div>
        </div>
    </nav>
    <div>
        <a href="#"><img src="../../assets/images/global/logo.png" alt="logo"></a>
    </div>
    <div id="searchbar">
        <form method="get" action="" role="search" id="express-form" novalidate="">
            <input type="search" name="search" placeholder="Search..." id="search-input">
            <button class="search-btn" type="submit"></button>
        </form>
    </div>
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

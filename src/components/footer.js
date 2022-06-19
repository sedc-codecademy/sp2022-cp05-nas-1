const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
        footer{
            padding: 20px 0px;
            width:100vw;
            margin-bottom:auto;
            background-color:var(--secondary-color);
            display:flex;
            flex-direction:row;
            align-items: center;
            justify-content: space-around;
        }

        .nav-list{
            list-style:none;
        }

        .nav-list li{
            display: inline;
            padding-right: 10px;
        }

        .nav-list li a{
            text-decoration:none;
            font-size: 14px;
        }

        .copyright p{
            font-size:14px;
        }
        
        @media screen and (max-width: 600px){
            footer{
                padding: 10px 0px;
                flex-direction: column;
            }

            .copyright{
                order:2;
            }

            .copyright p{
                font-size:12px;
            }

            .footer-nav-links{
                order:1;
            }

            .nav-list{
                list-style:none;
            }

            ul{
                padding-inline-start: 0px;
            }

            .nav-list li{
                display: inline;
                padding-right: 10px;

            }

            .nav-list li a{
                text-decoration:none;
                font-size:12px;
            }
        }
    </style>

    <footer>
        <div class="copyright"><p>&copy;2022 NEWSTOPIA. All rights reserved.</p></div>
        <div class="footer-nav-links">
            <ul class="nav-list">
                 <li class="list-item"><a href="#">Privacy Policy</a></li>
                 <li class="list-item"><a href="#">Cookies</a></li>
                 <li class="list-item"><a href="#">About</a></li>
            </ul>
        </div>
    </footer>
`;

class Footer extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
   }
}

window.customElements.define('c-footer', Footer);

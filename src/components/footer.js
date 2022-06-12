const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <style>
        footer{
            width:100%;
            height:61px;
            background-color:${getComputedStyle(document.querySelector(':root')).getPropertyValue('--secondary-color')};
            display: flex;
            align-items: center;
            justify-content: center;
        }

        small{
            font-size:12px;
        }

        @media screen and (min-width:760px){
            footer{
                height:88px;
            }
            small{
                font-size:15px;
            }
        }
    </style>

    <footer>
       <small>&copy;2022 NEWSTOPIA. ALL RIGHTS RESERVED.</small>
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

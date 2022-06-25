class LeftSidebar extends HTMLElement {
    constructor() {
       super();
       this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {
       const leftSidebarTemplate = document.createElement('template');
       const html = await fetch('../../components/left-sidebar/left-sidebar.html').then((stream) => stream.text());
       leftSidebarTemplate.innerHTML = html;
       this.shadowRoot.appendChild(leftSidebarTemplate.content.cloneNode(true));
    }
 };
 
 window.customElements.define('c-l-sidebar', LeftSidebar);
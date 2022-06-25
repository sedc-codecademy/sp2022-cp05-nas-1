class AdsSidebar extends HTMLElement {
    constructor() {
       super();
       this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {
       const adsSidebarTemplate = document.createElement('template');
       const html = await fetch('../../components/ads-sidebar/ads-sidebar.html').then((stream) => stream.text());
       adsSidebarTemplate.innerHTML = html;
       this.shadowRoot.appendChild(adsSidebarTemplate.content.cloneNode(true));
    }
 };
 
 window.customElements.define('c-ads-sidebar', AdsSidebar);
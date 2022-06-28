class AdsSidebar extends HTMLElement {
   constructor() {
      super();
      this.attachShadow({ mode: 'open' });
   }
   async connectedCallback() {
      const adsSidebarTemplate = document.createElement('template');
      const { ads } = await (await fetch('../../data/ads.json')).json();
      const html = await fetch('../../components/ads-sidebar/ads-sidebar.html').then((stream) => stream.text());
      adsSidebarTemplate.innerHTML = html;
      this.shadowRoot.appendChild(adsSidebarTemplate.content.cloneNode(true));
      const adsLinks = this.shadowRoot.querySelectorAll('[data-ad-details]');

      [ ...adsLinks ].forEach((el) => {
         const ad = ads[Math.floor(Math.random() * ads.length)];
         el.setAttribute('href', ad.redirect_url);
         el.children[0].setAttribute('src', ad.image_url);
         el.children[0].setAttribute('alt', ad.alt_text);
      });
   }
}

window.customElements.define('c-ads-sidebar', AdsSidebar);

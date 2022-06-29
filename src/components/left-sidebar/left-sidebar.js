class LeftSidebar extends HTMLElement {
    constructor() {
       super();
       this.attachShadow({ mode: 'open' });
    }

    listCategories(conainer){
      const Categories = [
         {
            name: "Politics",
            id: "politics"
         },
         {
            name: "Business",
            id: "business"
         },
         {
            name: "Science",
            id: "science"
         },
         {
            name: "Tech",
            id: "tech"
         },
         {
            name: "Gaming",
            id: "gaming"
         },
         {
            name: "Showbiz",
            id: "showbiz"
         },
         {
            name: "Sport",
            id: "sport"
         },
      ];

       Categories.forEach((el) => {
        conainer.innerHTML += `
            <li><a href="../../pages/home/home.html?category=${el.id}/" id="${el.id}">${el.name}</a></li>
        `;
      });
    };

    async connectedCallback() {
       const leftSidebarTemplate = document.createElement('template');
       const html = await fetch('../../components/left-sidebar/left-sidebar.html').then((stream) => stream.text());
       leftSidebarTemplate.innerHTML = html;
       this.shadowRoot.appendChild(leftSidebarTemplate.content.cloneNode(true));
       this.listCategories(this.shadowRoot.querySelector('.categories'));
    };
 };
 
 window.customElements.define('c-l-sidebar', LeftSidebar);
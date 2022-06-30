const pagNums = document.querySelectorAll('.pagination-numbers');
const stories = '../../data/news.json';
const pageSize = 4;

function populateHomepage(data, page, pageSize, target){
   pagNums.forEach((el) => {
      if (parseInt(el.innerText) > Math.ceil(data.length / pageSize)) {
         el.classList.add('hide');
      }
   });

   target.innerHTML = '';
   const storiesArr = data.reverse();

   for (let results of storiesArr.slice(page * pageSize, (page + 1) * pageSize)) {
      target.innerHTML += `
            <section class="news">
                    <img src="${results.image}" alt="random-image2">
                    <div class="content">
                        <h3 class="article-title">${results.title}</h3>
                        <p>${results.description}</p>
                        <a href="../article/article.html?id=${results.id}/" class="btn-link">Read more</a>
                    </div>
            </section>
        `;
   }
}

function getCurrentPage(){
   const hash = window.location.hash;

   if (!hash) {
      return 0;
   }

   const parts = hash.split('/');
   return parseInt(parts[parts.findIndex((p) => p === 'page') + 1]);
}

function showCurrentPage(data, container){
   const curPage = getCurrentPage();
   populateHomepage(data, curPage, pageSize, container);
}

function changePage(targetPage, value, filteredData){
   let maxPages = 0;

   fetch(stories).then((response) => response.json()).then((data) => {
      value
         ? (maxPages = Math.ceil(data.stories.length / pageSize))
         : (maxPages = Math.ceil(filteredData.length / pageSize));

      if (targetPage < 0) {
         targetPage = maxPages - 1;
      } else if (targetPage >= maxPages) {
         targetPage = 0;
      }

      document.location = document.location.search + `#/page/${targetPage}`;
      pagNums.forEach((el) => {
         if (parseInt(el.innerText) === getCurrentPage() + 1) {
            el.classList.add('active');
         } else {
            el.classList.remove('active');
         }
      });
   });
}

export { showCurrentPage, getCurrentPage, changePage };

import { showCurrentPage, getCurrentPage, changePage } from '../../../src/pages/home/script/pagination.js';
import { navigateCategories } from '../../../src/pages/home/script/navigateCategories.js';

const articles = document.querySelector('#articles');
const mainArticle = document.querySelector('#main-article');
const prev = document.querySelector('#btn-previous');
const next = document.querySelector('#btn-next');
const pagNums = document.querySelectorAll('.pagination-numbers');
const hideForSearch = document.querySelectorAll('.hide-for-search');
const stories = '../../data/news.json';
const title = document.querySelector('#title');
let dataLength = 0;

function getData(stories){
   let promise = fetch(stories);
   const queryString = window.location.search;
   const [ key, value ] = queryString.replace('?', '').replace('/', '').split('=');
   promise
      .then(function(response){
         return response.json();
      })
      .then(function({ stories }){
         let allStories = [ ...stories ];
         let data = allStories.slice(allStories.length - 50);
         if (key === 'category') {
            title.innerText = `Showing results for "${value}" category`;
            data = [ ...stories.filter((x) => x.category.includes(value)) ];
         } else if (key === 'search' && value !== '') {
            title.innerText = `Your search for: "${value}" returned following results`;
            data = [
               ...(stories.filter((x) => x.title.toLowerCase().includes(value.toLowerCase())) ||
                  x.description.toLowerCase().includes(value.toLowerCase()))
            ];
            if (data.length === 0) {
               title.innerText = `Your search for: "${value}" returned no results`;
            }
         } else if (value === '') {
            title.innerText = `Please enter a valid search value`;
            hideForSearch.forEach((el) => (el.style.display = 'none'));
         }
         showCurrentPage(data, articles, key === 'category' || key === 'search' ? null : mainArticle);
         dataLength = data.length;
      })
      .catch(function(error){
         console.log(error);
      });
}

next.addEventListener('click', () => {
   changePage(getCurrentPage() + 1, dataLength);
});

prev.addEventListener('click', () => {
   changePage(getCurrentPage() - 1, dataLength);
});

pagNums.forEach((el) => {
   el.addEventListener('click', () => {
      changePage(el.innerText - 1, dataLength);
   });
});

getData(stories);

window.addEventListener('hashchange', () => {
   getData(stories);
});

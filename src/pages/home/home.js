import { showCurrentPage, getCurrentPage, changePage } from '../../../src/pages/home/script/pagination.js';
import { navigateCategories } from '../../../src/pages/home/script/navigateCategories.js';

const articles = document.querySelector('#articles');
const mainArticle = document.querySelector('#main-article');
const prev = document.querySelector('#btn-previous');
const next = document.querySelector('#btn-next');
const pagNums = document.querySelectorAll('.pagination-numbers');
const stories = '../../data/news.json';
const title = document.querySelector('#title');

function getData(stories){
   let promise = fetch(stories);
   const queryString = window.location.search;
   const [ key, value ] = queryString.replace('?', '').replace('/', '').split('=');
   promise
      .then(function(response){
         return response.json();
      })
      .then(function({ stories }){
         let data = [ ...stories ];
         if (key === 'category') {
            data = [ ...stories.filter((x) => x.category.filter((c) => c.toLowerCase() == value.toLowerCase())) ];
         } else if (key === 'search') {
            title.innerText = `Your search for: ${value} returned following results`;
            data = [
               ...(stories.filter((x) => x.title.toLowerCase().includes(value.toLowerCase())) ||
                  x.description.toLowerCase().includes(value.toLowerCase()))
            ];
         }
         showCurrentPage(data, articles, mainArticle);
         navigateCategories(data);
      })
      .catch(function(error){
         console.log(error);
      });
}

next.addEventListener('click', () => {
   changePage(getCurrentPage() + 1, true, null);
});

prev.addEventListener('click', () => {
   changePage(getCurrentPage() - 1, true, null);
});

pagNums.forEach((el) => {
   el.addEventListener('click', () => {
      changePage(el.innerText - 1, true, null);
   });
});

getData(stories);

window.addEventListener('hashchange', () => {
   getData(stories);
});

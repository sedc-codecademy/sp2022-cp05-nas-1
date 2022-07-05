import { showCurrentPage, getCurrentPage, changePage } from '../../../../src/pages/home/script/pagination.js';

const articles = document.querySelector('#articles');
const mainArticle = document.querySelector('#main-article');
const prev = document.querySelector('#btn-previous');
const next = document.querySelector('#btn-next');
const stories = '../../data/news.json';
let dataLength = 0;

function getData(stories){
    let promise = fetch(stories);
    promise
       .then(function(response){
          return response.json();
       })
       .then(function({ stories }){
          let allStories = [ ...stories ];
          let data = allStories.slice(0, allStories.length-50);
          showCurrentPage(data, articles, null);
          dataLength = data.length;
       })
       .catch(function(error){
          console.log(error);
       });
};
 
next.addEventListener('click', () => {
    changePage(getCurrentPage() + 1, dataLength);
});
  
prev.addEventListener('click', () => {
    changePage(getCurrentPage() - 1, dataLength);
});

getData(stories);

window.addEventListener('hashchange', () => {
   getData(stories);
});
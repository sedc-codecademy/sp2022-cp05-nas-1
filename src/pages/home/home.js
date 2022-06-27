import {showCurrentPage, getCurrentPage, changePage} from '../../../src/pages/home/script/pagination.js';
import { navigateCategories } from '../../../src/pages/home/script/navigateCategories.js';

const articles = document.querySelector('#articles');
const prev = document.querySelector('#btn-previous');
const next = document.querySelector('#btn-next');
const pagNums = document.querySelectorAll('.pagination-numbers');
const stories = '../../data/news.json';

function getData(stories) {

    let promise = fetch(stories);
    
    promise.then(function(response){
        return response.json();
    })
        .then(function(result){
            showCurrentPage(result.stories, articles);
            navigateCategories(result.stories);
        })
        .catch(function (error) {
            console.log(error);
        });
};

next.addEventListener('click', () => {
    changePage(getCurrentPage() + 1, true, null);
});

prev.addEventListener('click', () => {
    changePage(getCurrentPage() - 1, true, null);
});

pagNums.forEach((el) => {
    el.addEventListener('click', () => {
        changePage(el.innerText-1, true, null);
    });
});

getData(stories);

window.addEventListener( 'hashchange', () => {
    getData(stories);
});
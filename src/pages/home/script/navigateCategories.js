import { showCurrentPage, changePage, getCurrentPage } from '../../../../src/pages/home/script/pagination.js';

const categoreis = ['politics', 'business', 'science', 'tech', 'gaming', 'showbiz', 'sport'];
const articles = document.querySelector('#articles');
const mainArticle = document.querySelector('#main-article');
const title = document.querySelector('#title');
const prev = document.querySelector('#btn-previous');
const next = document.querySelector('#btn-next');
const prevCategories = document.querySelector('#btn-previous-categories');
const nextCategories = document.querySelector('#btn-next-categories');

function navigateCategories(data){

    let categoryName = (title) => {return `${title.substring(0,1).toUpperCase()}${title.substring(1, title.length)}`};
    const filteredCategories = [];

    categoreis.forEach((el) => {
        let name = categoryName(el);

        if(window.location.search === `?category=${el}/`){
            [prev, next].forEach(el => el.classList.add('hide'));
            [prevCategories, nextCategories].forEach(el => el.classList.remove('hide'));

            data.filter(obj => obj.category.filter(el => el === name).forEach(cat => filteredCategories.push(obj)))
            title.innerText = name;
            showCurrentPage(filteredCategories.reverse(), articles, mainArticle);

            nextCategories.addEventListener('click', () => {
                changePage(getCurrentPage() + 1, false, filteredCategories);
            });
            prevCategories.addEventListener('click', () => {
                changePage(getCurrentPage() - 1, false, filteredCategories);
            });
        };
    });
};

export {navigateCategories};
import {showCurrentPage, changePage, nextPage, previous} from "../../../src/pages/home/script/pagination.js";

const articles = document.querySelector("#articles");
const prev = document.querySelector("#btn-previous");
const next = document.querySelector("#btn-next");
const pagNums = document.querySelectorAll(".pagination-numbers");
const stories = "../../data/news.json";
const pageSize = 4;


function getData(stories) {

    let promise = fetch(stories);
    
    promise.then(function(response){
        return response.json();
    })
        .then(function(result){
            showCurrentPage(result, articles);
        })
        .catch(function (error) {
            console.log(error);
        });
};
  
next.addEventListener( 'click', nextPage );
prev.addEventListener( 'click', previous );
pagNums.forEach((el) => {
    el.addEventListener("click", () => {
        changePage(el.innerText-1);
    });
});

getData(stories);

window.addEventListener( 'hashchange', () => {
    getData(stories);
});




import { showCurrentPage } from "../../pages/home/script/pagination.js";

const title = document.querySelector('#title');
const articles = document.querySelector('#articles');

function searchFunc(data){
    let url = new URL(window.location);
    let value = '';
    let key = '';

    url.searchParams.forEach((val,k) => {
        value = val;
        key = k;
    });  

    const filteredResults = [];
    
    data.forEach(el => el.title.split(' ').filter(val => val.toLowerCase() === value.toLowerCase()).forEach(article => {
        if(!filteredResults.includes(el)){
            filteredResults.push(el);
        };
    }));

    data.forEach(el=> console.log(el.content))

    data.forEach(el => el.description.split(' ').filter(val => val.toLowerCase() === value.toLowerCase()).forEach(article => {
        if(!filteredResults.includes(el)){
            filteredResults.push(el);
        };
    }));

    data.filter(obj => obj.category.filter(el => el === value).forEach(cat => filteredResults.push(obj)));
    console.log(filteredResults)
    if(value !== '' && key === 'search'){
        title.innerText = `Your search for: ${value} returned following results`;
        showCurrentPage(filteredResults, articles, null);
    }
};

export {searchFunc};
const articleImg = document.querySelector('#article-img');
const articleTitle = document.querySelector('#article-title');
const articleDate = document.querySelector('#article-date');
const articleSource = document.querySelector('#article-src');
const articleText = document.querySelector('#article-txt');
const headTitle = document.querySelector('title');

function populateArticlePage(data){
    data.stories.forEach((el) => {

        if(window.location.search === `?id=${el.id}/`){
            headTitle.innerText = el.title;
            articleImg.setAttribute('src', el.image);
            articleTitle.innerText = el.title;
            articleDate.innerText = el.published_at;
            articleSource.innerText = el.source;
            articleSource.setAttribute('href', el.url);
            articleText.innerText = el.content;
        };
    });
};

export {populateArticlePage};
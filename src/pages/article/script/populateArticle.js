const articleImg = document.querySelector('#article-img');
const articleTitle = document.querySelector('#article-title');
const articleDate = document.querySelector('#article-date');
const articleSource = document.querySelector('#article-src');
const articleText = document.querySelector('#article-txt');

function populateArticlePage(data){
   articleImg.setAttribute('src', data.image);
   articleTitle.innerText = data.title;
   articleDate.innerText = data.published_at;
   articleSource.innerText = data.source;
   articleSource.setAttribute('href', data.url);
   articleText.innerHTML = data.content;
}

export { populateArticlePage };

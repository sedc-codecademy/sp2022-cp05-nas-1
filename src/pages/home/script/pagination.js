const pagNums = document.querySelectorAll(".pagination-numbers");
const stories = "../../data/news.json";
const pageSize = 4;

function populateHomepage(data, page, pageSize, target){

    pagNums.forEach((el) => {
        if(parseInt(el.innerText) > Math.ceil( data.stories.length / pageSize )){
            el.classList.add("hide");
        }
    });

    target.innerHTML = "";
    const storiesArr = data.stories.reverse(); 
    console.log(storiesArr)
    for(let results of storiesArr.slice(page * pageSize, (page+1) * pageSize)){
        target.innerHTML += `
            <section>
                <img src="${results.image}" alt="Article image">
                <div>
                    <h3>${results.title}</h3>
                    <p>${results.description}</p>
                    <button><a href="">READ MORE</a></button>
                </div>
            </section>
        `
    };
};

function getCurrentPage() {
    const hash = window.location.hash;
    
    if(!hash){return 0};
    
    const parts = hash.split('/');
    return parseInt( parts[parts.findIndex( p => p === 'page')+1]);
};

function showCurrentPage(data, container) {
    const curPage = getCurrentPage();
    populateHomepage(data, curPage, pageSize, container);
};

function changePage(targetPage) {

    fetch(stories)
    .then(response => response.json()) 
    .then(data => {

    const maxPages = Math.ceil(data.stories.length / pageSize);
    if(targetPage < 0){
      targetPage = maxPages - 1;
    }else if (targetPage >= maxPages){
      targetPage = 0;
    };
    document.location = document.location.pathname + `#/page/${targetPage}`;

    pagNums.forEach((el) => {
        console.log(getCurrentPage())
        if(parseInt(el.innerText)===getCurrentPage()+1){
            el.classList.add("active");
        } else {el.classList.remove("active")};
        });
    });
};

function nextPage() {
    changePage(getCurrentPage() + 1);
};
  
function previous() {
    changePage(getCurrentPage() - 1);
};

export {showCurrentPage, changePage, nextPage, previous};
import { addComents } from './script/addComents.js';
import { changeThumbsStyle, upvoteFunc, downvoteFunc } from './script/feedbackTracker.js';
import { populateArticlePage } from './script/populateArticle.js';
import { searchFunc } from '../../components/search/searchFunc.js';

const commentsErrorMsg = document.getElementById('comment-error');
const thumbsUp = document.querySelector('.fa-thumbs-up');
const thumbsDown = document.querySelector('.fa-thumbs-down');
const thumbsUpCount = document.getElementById('up-votes');
const thumbsDownCount = document.getElementById('down-votes');
const inputs = document.querySelectorAll('.input');
const submitBtn = document.getElementById('submit-comment');
const stories = '../../data/news.json';


function getData(stories) {

   let promise = fetch(stories);
   
   promise.then(function(response){
       return response.json();
   })
       .then(function(result){
        populateArticlePage(result);   
        searchFunc();
        
       })
       .catch(function (error) {
           console.log(error);
       });
};

getData(stories);

thumbsUp.addEventListener('click', upvoteFunc, { once: true, capture: true });

thumbsDown.addEventListener('click', downvoteFunc, { once: true, capture: true });

// let counterUp = 0;
// thumbsUp.addEventListener(("click"), () => {
//     counterUp++;
//     changeThumbsStyle(thumbsUp, true);
//     thumbsUpCount.innerText = counterUp;
// });
//THIS COMMENTED CODE BLOCKS ALLOW MULTIPLE LIKES AND DISLIKES, WHILE THE CURRENT ALLOWS ONLY ONE,
//ADDITIONAL LOGIC WILL BE APPLIED FOR STORING LIKES AND DISLIKES AND STORING THE COMMENTS ON THE PAGE
// let counterDown = 0;
// thumbsDown.addEventListener(("click"), () => {
//     counterDown++;
//     changeThumbsStyle(thumbsDown, false);
//     thumbsDownCount.innerText = counterDown;
// });

submitBtn.addEventListener('click', () => {
   addComents(inputs, commentsErrorMsg);
});


import { addComents } from "./script/addComents.js";
import { changeThumbsStyle, upvoteFunc, downvoteFunc } from "./script/feedbackTracker.js";

const commentsErrorMsg = document.getElementById("comment-error");
const thumbsUp = document.querySelector(".fa-thumbs-up");
const thumbsDown = document.querySelector(".fa-thumbs-down");
const thumbsUpCount = document.getElementById("up");
const thumbsDownCount = document.getElementById("down");
const formContents = document.querySelectorAll(".form-contents");
const submitBtn = document.getElementById("submit-btn");

thumbsUp.addEventListener("click", 
    upvoteFunc,
    {once : true, capture : true}
);

thumbsDown.addEventListener("click",
    downvoteFunc,
    {once : true, capture : true}
); 

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

submitBtn.addEventListener("click", () => {
    addComents(formContents, commentsErrorMsg);
});


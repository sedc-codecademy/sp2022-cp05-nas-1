const thumbsUpCount = document.getElementById("up");
const thumbsDownCount = document.getElementById("down");
const thumbsUp = document.querySelector(".fa-thumbs-up");
const thumbsDown = document.querySelector(".fa-thumbs-down");
let counterUp = 0;
let counterDown = 0;

function changeThumbsStyle(el, value){

    el.style.color = value?"green" : "red";

    el.style.fontSize = "65px";
    el.style.cursor = "default";

    el.addEventListener("mouseover", () => {
        el.style.opacity = "1";
    });
};

let upvoteFunc = () => {

    counterUp++;
    changeThumbsStyle(thumbsUp, true);
    thumbsDown.addEventListener("mouseover", () => {
        thumbsDown.style.opacity = "1"
        thumbsDown.removeEventListener("click",
        downvoteFunc,
        {once : true, capture : true}
); 
    });
    thumbsDown.style.cursor = "default";
    thumbsUpCount.innerText = counterUp;
};

let downvoteFunc = () => {
    counterDown++;
    changeThumbsStyle(thumbsDown, false);
    thumbsUp.addEventListener("mouseover", () => {
        thumbsUp.style.opacity = "1"
        thumbsUp.removeEventListener("click", 
        upvoteFunc,
        {once : true, capture : true}
);
    });
    thumbsUp.style.cursor = "default";
    thumbsDownCount.innerText = counterDown;
};

export {changeThumbsStyle, upvoteFunc, downvoteFunc};
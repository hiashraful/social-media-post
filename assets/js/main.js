// Like Section
var likeButton = document.getElementById('btn-like');
var likeIcon = document.getElementById('like-icon');
var likeCount = document.getElementById('like-count');
var count = parseInt(likeCount.innerHTML);
var clicked = false;
likeButton.addEventListener('click', likeButtonAction);
function likeButtonAction() {
    if (clicked == false) {
        increaseCount();
    }
    else {
        decreaseCount();
    }
}
function increaseCount() {
    count++;
    clicked = true;
    likeIcon.style.color = 'red';
    likeCount.innerHTML = count;
}
function decreaseCount() {
    count--;
    clicked = false;
    likeIcon.style.color = 'white';
    likeCount.innerHTML = count;
}

//Comment Section
var commentButton = document.getElementById('btn-comment');
var commentCount = document.getElementById('comment-count');
var commentCounter = parseInt(commentCount.innerHTML);
var commentBtnClicked = false;

commentButton.addEventListener('click', commentButtonAction);

function commentButtonAction() {
    if (commentBtnClicked == false) {
        showComment();
    }
    else {
        hideComment();
    }
}

function showComment() {
    commentBtnClicked = true;
    commentCounter++;
    var commentBox = document.getElementById('comment-input');
    commentBox.style.visibility = 'visible';
    document.getElementById('comment-input-button').addEventListener('click',function(){
        var commentData = document.getElementById('input-comment-text').value;
        commentBox.style.visibility = 'hidden';
        document.getElementById('comment-text').innerHTML = commentData;
        document.getElementById('comment-section').style.visibility = "visible";
        commentCount.innerHTML = commentCounter;
    });
}
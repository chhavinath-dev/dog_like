let check = 0;
let imgele = document.getElementById("puppyImage");
let thum = document.getElementById("likeIcon");
let lik = document.getElementById("likeButton");

function onClickLikeButton() {
    if (check == 0) {
        imgele.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        thum.style.color = "#0967d2";
        lik.style.color = "white";
        lik.style.backgroundColor = "#0967d2";
        check = 1;
    } else {
        imgele.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        thum.style.color = "#cbd2d9";
        lik.style.color = "#9aa5b1";
        lik.style.backgroundColor = "#cbd2d9";
        check = 0;
    }

}

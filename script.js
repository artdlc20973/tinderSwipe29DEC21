var girls = [
  {picture: "https://assets.codepen.io/6060109/tinder-girl-1.png"},
  {picture: "https://assets.codepen.io/6060109/tinder-girl-2.png"},
  {picture: "https://assets.codepen.io/6060109/tinder-girl-3.png"},
];

var feed = document.querySelector('.feed');

for (let girl of girls) {
  feed.innerHTML += `
    <img src=${girl.picture}>
  `
}

// [1] querySelect green heart button
var greenHeart = document.querySelector('.green-heart');

// [2] addEventListener to click
greenHeart.addEventListener("click", function() {
  var gotMatch = document.querySelector(".got-match");
  gotMatch.style.display = 'flex';
});


// [1] querySelect green heart button
var keepSwiping = document.querySelector('.keep-swiping');

// [2] addEventListener to click
keepSwiping.addEventListener("click", function() {
  var gotMatch = document.querySelector(".got-match");
  gotMatch.style.display = 'none';
});

let cardImage = document.querySelector(".card__movie-image");
let cardTitle = document.querySelector(".card__movie-title");
let cardGenre = document.querySelector(".card__movie-genre");
let cardRating = document.querySelector(".card__movie-rating");

let movieRecomendation = document.querySelector(".card__recomended-status");

let inputImageSrc = prompt("Image link : ");
let inputTitle = prompt("Movie title : ");
let inputGenre = prompt("Movie genre : ");
let inputRating = Number(prompt("Movie rating : "));

let movieStatuses = new Map([
    [1, "Disliked"], [2, "Catchy"], [3, "Good"], [4, "Popular"], [5, "Loved"]
]);

const /*void*/ Status = (rating, output) => {
    if (rating > 5) {
        rating = 5;
    }
    for(let[key, value] of movieStatuses) {
        if(key === rating) {
            output.innerText = value;
        }
    }
}

const /*void*/ SetCard = (image, title, genre, rating) => {
    if (rating > 5) {
        rating = 5;
    }
    cardImage.src = image;
    cardTitle.innerText = title;
    cardGenre.innerText = "Gendre " + genre;
    cardRating.innerText = "Rating " + rating + ".0";
    Status(Math.round(rating), movieRecomendation);
}

window.onload = () => {
    SetCard(inputImageSrc, inputTitle, inputGenre, inputRating);
}
const ratingCardGroupButtons = document.querySelector('.rating-card__group-buttons');

const ratingCardButtonCircles =  ratingCardGroupButtons.querySelectorAll(".rating-card__button--circle");

ratingCardButtonCircles.forEach(ratingCardButtonCircle => {
    ratingCardButtonCircle.addEventListener("click", event => {
        ratingCardButtonCircle.classList.toggle("active");
    });
});
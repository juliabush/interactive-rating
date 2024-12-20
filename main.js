const ratingCardButtonCircles =  document.querySelectorAll(".rating-card__button--circle");

ratingCardButtonCircles.forEach(ratingCardButtonCircle => {
    ratingCardButtonCircle.addEventListener("click", event => {
        ratingCardButtonCircle.classList.toggle("active");
    });
});
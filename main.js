const ratingCardButtonCircles = document.querySelectorAll(".rating-card__button--circle");

ratingCardButtonCircles.forEach(ratingCardButtonCircle => {
    ratingCardButtonCircle.addEventListener("click", () => {
        ratingCardButtonCircles.forEach(circle => circle.classList.remove("active"));
        ratingCardButtonCircle.classList.toggle("active");
        checkActiveState();
    });
});

const ratingCardSubmitButtons = document.querySelectorAll(".rating-card__submit-button");
ratingCardSubmitButtons.forEach(ratingCardSubmitButton => {
    ratingCardSubmitButton.addEventListener("click", () => {
        ratingCardSubmitButton.classList.toggle("active");
        checkActiveState();
    });
});

const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thankyou-card");

function checkActiveState() {
    const isCircleActive = Array.from(ratingCardButtonCircles).some(circle => circle.classList.contains("active"));
    const isSubmitActive = Array.from(ratingCardSubmitButtons).some(button => button.classList.contains("active"));

    if (isCircleActive && isSubmitActive) {
        ratingCard.style.display = "none"; // Hide the rating card
        thankYouCard.style.display = "block"; // Show the thank-you card
    }
}

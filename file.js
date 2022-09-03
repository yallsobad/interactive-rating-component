const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitBtn = document.getElementById("submit-btn");
const rates = document.querySelectorAll(".number");
const rating = document.getElementById("span");

submitBtn.addEventListener("click", () => {
  thanksContainer.style.display = "flex";
  mainContainer.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

// Getting Elements from Dom

const panel = document.querySelector("#panel");
const ratingsContainer = document.querySelector(".container");
const ratings = document.querySelectorAll(".rating");
const Btn = document.querySelector("#send");

let Selectedfeedback = "Satisfied";
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    ratings.forEach((rating) => rating.classList.remove("active"));
    e.target.parentNode.classList.add("active");

    Selectedfeedback = e.target.nextElementSibling.innerHTML;

    // console.log(Selectedfeedback);
  }
});

Btn.addEventListener("click", () => {
  panel.innerHTML = `

  <strong>Thank You 💖 </strong>

  <small>Feedback:  ${Selectedfeedback}</small>

  `;
});

const firstNameEl = document.querySelector("input#fNameIn");
const pEl = document.querySelector("p#greet");
const allDivEl = document.querySelector("form");
const formEL = document.forms.donation;
const { firstName, lastName, email, amount, select, proceed } = formEL.elements;

// greeting Donar
formEL.addEventListener("submit", (event) => {
  event.preventDefault();
  allDivEl.classList.add("hidden");
  pEl.innerText = `✅Thanks for your donation ${firstNameEl.value}.`;
});

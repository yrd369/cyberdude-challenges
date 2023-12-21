const pEl = document.querySelector("p#greet");
const mainEl = document.querySelector("form");
const formEL = document.forms.donation;
const { firstName, lastName, email, amount, } = formEL.elements;
const formELData = new FormData(formEL);

// greeting Donar
const handleSubmit = (event) => {
  event.preventDefault();
  mainEl.classList.add("hidden");
  let greetStatement = "";
  if (amount[0].checked) {
    greetStatement = `You have donated ₹${amount[0].value} ✅`;
  } else if (amount[1].checked) {
    greetStatement = `You have donated ₹${amount[1].value} ✅`;
  } else if (amount[2].checked) {
    greetStatement = `You have donated ₹${amount[2].value} ✅`;
  } else if (amount[3].checked) {
    greetStatement = `You have donated ₹${amount[3].value} ✅`;
  }
  pEl.innerText = `${greetStatement}
  ✨Thanks for your donation ${firstName.value}.`;

  // sending data to backend
  
  console.log([...formELData.entries(formEL)]); 
};

formEL.addEventListener("submit", handleSubmit);

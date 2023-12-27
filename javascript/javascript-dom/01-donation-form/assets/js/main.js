// getting elements
const pEl = document.querySelector("p#greet");
const formEL = document.forms.donation;
const { firstName, lastName, email, amount } = formEL.elements;
console.log(amount);
// greeting Donar
const handleSubmit = (event) => {
  event.preventDefault();
  formEL.classList.add("hidden");
  let greetStatement = "✅ You have donated ₹";

  // printing value by array method
  const inputVal = Array.from(amount).find((val) => {
    return val.checked;
  });
  greetStatement += ` ${inputVal.value}`;

  // printing value by if-else
  // if (amount[0].checked) {
  //   greetStatement = `✅ You have donated ₹${amount[0].value}`;
  // } else if (amount[1].checked) {
  //   greetStatement = `✅ You have donated ₹${amount[1].value}`;
  // } else if (amount[2].checked) {
  //   greetStatement = `✅ You have donated ₹${amount[2].value}`;
  // } else if (amount[3].checked) {
  //   greetStatement = `✅ You have donated ₹${amount[3].value}`;
  // }
  pEl.innerText = `${greetStatement}
  ✨Thanks for your donation ${firstName.value}.`;

  // getting input value
  const formELData = [...new FormData(formEL)];
  const objFormData = Object.fromEntries(formELData);
  const valueGet = JSON.stringify(objFormData);
  localStorage.setItem("formValue", valueGet);
  console.log(localStorage.getItem("formValue"));
};

formEL.addEventListener("submit", handleSubmit);

import JustValidate from "just-validate";

// getting elements
const pEl = document.querySelector("p#greet");
const formEL = document.getElementById("donation-form");
const validation = new JustValidate("#donation-form");
const { firstName, lastName, email, amount } = formEL.elements;

// validation
validation.addField(
  "#fNameIn",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
  ],
  { errorLabelCssClass: ["ml-2", "mt-2", "text-sm"] }
);
validation.addField(
  "#lNameIn",
  [
    {
      rule: "required",
    },
  ],
  { errorLabelCssClass: ["ml-6", "mt-2", "text-sm"] }
);
validation.addField(
  "#emailIn",
  [
    {
      rule: "required",
    },
    {
      rule: "email",
    },
  ],
  {
    errorLabelCssClass: ["ml-2", "mt-2", "text-sm"],
  }
);
validation.addField(
  "#text",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ],
  { errorLabelCssClass: ["ml-2", "mt-2", "text-sm"] }
);
validation.addField(
  "#checkbox",
  [
    {
      rule: "required",
    },
  ],
  { errorLabelCssClass: ["mt-2", "text-sm"] }
);

// greeting Donar
validation.onSuccess((event) => {
  event.preventDefault();
  formEL.classList.add("hidden");
  let greetStatement = "✅ You have donated ₹";

  // printing value by array method
  const inputVal = [...amount].find((val) => {
    return val.checked;
  });
  greetStatement += ` ${inputVal.value}`;
  pEl.innerText = `${greetStatement}
  ✨Thanks for your donation ${firstName.value}.`;

  // getting input value
  const formElData = new FormData(formEL).entries();
  const formDataObj = Object.fromEntries(formElData);
  const existingData = localStorage.getItem("donorInfo");
  const existingDataArr = JSON.parse(existingData);
  const data = [];

  if (existingDataArr) {
    existingDataArr.push(formDataObj);
    localStorage.setItem("donorInfo", JSON.stringify(existingDataArr));
  } else {
    data.push(formDataObj);
    localStorage.setItem("donorInfo", JSON.stringify(data));
  }
});

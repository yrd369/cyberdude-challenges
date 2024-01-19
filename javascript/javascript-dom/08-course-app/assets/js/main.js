import JustValidate from "just-validate";
const formEl = document.getElementById("form");
const validate = new JustValidate("#form");
const addBtnEl = document.getElementById("addBtn");
const contentEl = document.getElementById("content");
const gridEl = document.getElementById("grid");
const localStorageKey = "data";
// -----------------------------------------------------------------------------------------------------------------
// form validation[#]
// getting input values from dom[#]
// store it in array[]
// store the array in local storage[]
addBtnEl.addEventListener("click", () => {
  contentEl.classList.remove("hidden");
});
validate.addField("#title", [
  {
    rule: "required",
    errorMessage: "Enter a title for the content",
  },
]);
validate.addField("#type", [
  {
    rule: "required",
    errorMessage: "Choose content type",
  },
]);
validate.addField("#author", [
  {
    rule: "required",
    errorMessage: "Select author",
  },
]);
validate.addField("#time", [
  {
    rule: "required",
    errorMessage: "Select time",
  },
]);

validate.onSuccess((e) => {
  e.preventDefault();
  const formData = new FormData(formEl).entries();
  const userDataObj = Object.fromEntries(formData);
  const existingData = localStorage.getItem(localStorageKey);
  const parsedData = JSON.parse(existingData);
  const newData = [];
  if (parsedData) {
    parsedData.push(userDataObj);
    localStorage.setItem(localStorageKey, JSON.stringify(parsedData));
  } else {
    newData.push(userDataObj);
    localStorage.setItem(localStorageKey, JSON.stringify(newData));
  }

  parsedData.map((val) => {
    const cardEl = document.createElement("div");
    cardEl.classList = "bg-white rounded items-center shadow-lg p-1";
    const template = `
    <div class="p-3">
      <p class="2xl font-semibold ">Title <span class="bg-gray-300 px-2 ml-5">${val.title}</span></p>
      <p class="2xl font-semibold">Type <span class="bg-gray-300 px-2 ml-4">${val.contentType}</span></p>
      <p class="2xl font-semibold">Length <span class="bg-gray-300 px-2">10.00</span></p>
      <p class="2xl font-semibold">Author <span class="bg-gray-300 px-2 ml-0.5">${val.author}</span></p>
    </div>
  </div>`;
    cardEl.innerHTML = template;
    gridEl.append(cardEl);
    contentEl.classList.add("hidden");
    console.log(val);
  });
});

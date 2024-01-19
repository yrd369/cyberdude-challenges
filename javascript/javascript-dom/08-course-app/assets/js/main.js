import JustValidate from "just-validate";
const formEl = document.getElementById("form");
const validate = new JustValidate("#form");
const addBtnEl = document.getElementById("addBtn");
const contentEl = document.getElementById("content");
const gridEl = document.getElementById("grid");
const localStorageKey = "data";
const closeIconEl = document.getElementById("closeIcon");
const { link } = formEl.elements;

// form close button
addBtnEl.addEventListener("click", () => {
  contentEl.classList.remove("hidden");
});
closeIconEl.addEventListener("click", () => {
  contentEl.classList.add("hidden");
});

// validations
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
validate.addField("#link", [
  {
    rule: "required",
    errorMessage: "paste your link",
  },
]);

// stored in local storage
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
  location.reload();
});

// displaying in UI
const allDatas = localStorage.getItem(localStorageKey);
const allDatasParsed = JSON.parse(allDatas);
allDatasParsed.map((val) => {
  const url = val.url;
  const videoId = url.split("v=")[1];
  const cardEl = document.createElement("div");
  cardEl.classList = "bg-white rounded items-center shadow-lg p-1";
  const template = `
   <a href="https://www.youtube.com/watch?v=${videoId}"><img src="https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg" class="w-full rounded">
   <div class="p-3 space-y-1">
     <p class="text-xl font-semibold">${val.title}</p>
     <p class="font-semibold">Author <span class="px-2 ml-0.5">${val.author}</span></p>
     <p class="font-semibold bg-red-700 text-white rounded w-full text-center px-3 py-1">${val.contentType}</p>
   </div>
 </div></a>`;
  cardEl.innerHTML = template;
  gridEl.append(cardEl);
  contentEl.classList.add("hidden");
});

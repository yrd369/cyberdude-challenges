import JustValidate from "just-validate";
const formEl = document.getElementById("form");
const validate = new JustValidate("#form");
const addBtnEl = document.getElementById("addBtn");
const contentEl = document.getElementById("content");
const gridEl = document.getElementById("grid");
const localStorageKey = "data";
const closeIconEl = document.getElementById("closeIcon");

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
  getData();
  alert("Video updated")
});

// displaying in UI
function getData() {
  const allDatas = localStorage.getItem(localStorageKey);
  const allDatasParsed = JSON.parse(allDatas);
  gridEl.innerHTML = "";
  allDatasParsed.map((val) => {
    const url = val.url;
    const videoId = url.split("v=")[1];
    const cardEl = document.createElement("div");
    cardEl.classList = "bg-white rounded items-center shadow-lg p-1";
    const template = `
   <a href="https://www.youtube.com/watch?v=${videoId}"><img src="https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg" class="w-full rounded">
   <div class="px-2 py-1 space-y-2">
     <p class="font-semibold">Title:<span class="px-2 ml-0.5">${val.title}</span></p>
     <p class="font-semibold">Author: <span class="px-2 ml-0.5">${val.author}</span></p>
     <p class="font-semibold bg-red-700 text-white rounded w-full text-center px-3 py-1 mt-5">${val.contentType}</p>
   </div>
 </div></a>`;
    cardEl.innerHTML = template;
    gridEl.append(cardEl);
    contentEl.classList.add("hidden");
  });
}

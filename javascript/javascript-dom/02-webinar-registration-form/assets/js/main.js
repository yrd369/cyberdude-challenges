import JustValidate from "just-validate";
import { v4 as uuidv4 } from "uuid";

// getting elements
const formEl = document.getElementById("userData");
const validations = new JustValidate(formEl);
const { userName, email, mobileNo, select } = formEl.elements;
const resultDivEl = document.querySelector("#result-Div");
const tableEl = document.querySelector("#table");
const localStorageKey = "data";
// validations
validations.addField("#userName", [
  {
    rule: "required",
    errorMessage: "Please enter a valid name",
  },
  {
    rule: "minLength",
    value: 2,
  },
]);
validations.addField("#email", [
  {
    rule: "required",
    errorMessage: "Please enter a valid email address",
  },
]);
validations.addField("#mobileNo", [
  {
    rule: "required",
    errorMessage: "Enter a valid mobile number",
  },
  // {
  //   rule: "minLength",
  //   value: 10,
  // },
  // {
  //   rule: "maxLength",
  //   value: 10,
  // },
]);
validations.addField("#reference", [
  {
    rule: "required",
    errorMessage: "Select an option to continue",
  },
]);
validations.addField("#checkBox", [
  {
    rule: "required",
  },
]);

validations.onSuccess((event) => {
  const inputData = new FormData(formEl);
  inputData.append("id", uuidv4());
  inputData.append("createdAt", Date.now());
  const dataObj = Object.fromEntries(inputData);
  const value = localStorage.getItem("data");
  const valueArr = JSON.parse(value);
  const newData = [];

  //generating id

  // getting values from local storage
  if (valueArr) {
    valueArr.push(dataObj);
    localStorage.setItem(localStorageKey, JSON.stringify(valueArr));
  } else {
    newData.push(dataObj);
    localStorage.setItem(localStorageKey, JSON.stringify(newData));
  }
  gettingValue();
  formEl.reset();
});

function gettingValue() {
  const inputVal = localStorage.getItem(localStorageKey);
  const inputValArr = JSON.parse(inputVal);
  if (inputValArr && inputVal.length > 0) {
    resultDivEl.classList.remove("hidden");
    tableEl.innerHTML = "";
    const arr = [];
    const finalData = inputValArr.map((val) => {
      const trEl = document.createElement("tr");
      const tdEl = document.createElement("td");
      const tdEl2 = document.createElement("td");
      const tdEl3 = document.createElement("td");
      const btnEl = document.createElement("button");
      tdEl.classList.add("px-2", "py-1", "border", "w-45%");
      tdEl.textContent = val.userName;
      tdEl2.classList.add("px-2", "py-1", "border", "w-45%");
      tdEl2.textContent = val.mobileNo;
      btnEl.className = "bg-red-500 text-white px-2 py-1 rounded text-sm";
      btnEl.textContent = "Delete";
      btnEl.addEventListener("click", (e) => {
        delFunc(val);
      });
      tdEl3.classList.add("px-2", "py-1", "border", "w-10");
      tdEl3.append(btnEl);
      trEl.append(tdEl, tdEl2, tdEl3);
      arr.push(trEl);
    });
    arr.forEach((val) => {
      tableEl.append(val);
    });
  } else {
    console.log("no storage");
  }
}

function delFunc(obj) {
  const confirmation = confirm(`Do you want to delete ${obj["userName"]}`);
  if (confirmation) {
    const data = localStorage.getItem(localStorageKey);
    const dataObj = JSON.parse(data);
    const otherRecords = dataObj.filter((val) => {
      return val.id != obj.id ;
    });
    localStorage.setItem(localStorageKey,JSON.stringify(otherRecords));
    gettingValue();
  }
}

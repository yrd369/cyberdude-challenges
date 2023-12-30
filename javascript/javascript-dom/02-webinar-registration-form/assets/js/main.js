import JustValidate from "just-validate";
const formEl = document.getElementById("userData");
const validations = new JustValidate(formEl);
const { userName, email, mobileNo, select } = formEl.elements;
const dataTable = document.querySelector("#output");
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
  const inputData = new FormData(formEl).entries();
  const dataObj = Object.fromEntries(inputData);
  const value = localStorage.getItem("data");
  const valueArr = JSON.parse(value);
  const newData = [];

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
      btnEl.className = "bg-red-600 text-white px-2 py-1 rounded";
      btnEl.textContent = "Delete";
      tdEl3.classList.add("px-2", "py-1", "border", "w-10");
      tdEl3.append(btnEl);
      trEl.append(tdEl, tdEl2, tdEl3);
      arr.push(trEl);
    });
    arr.forEach((val) => {
      tableEl.append(val);
    });
  }else{
    console.log("no storage");
  }
}

// const finalData = inputValArr
//   .map((data) => {
//     return `   <tr class="text-center">
//   <td class="">${data.userName}</td>
//   <td class="px-2 py-1 border w-45% ">${data.mobileNo}</td>
//   <td class="px-2 py-1 border w-10%">
//     <button class=id="delBtn">Delete</button>
//   </td>
// </tr>`;
//   })
//   .join(" ");
// tableEl.innerHTML += finalData;

//   // delete function
//   const delBtnEl = document.querySelectorAll("#delBtn");
//   delBtnEl.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       e.target.parentNode.parentNode.remove();
//     });
//   });

import data from "../../data/data.json";
const productListEl = document.getElementById("productList");
data.forEach((val) => {
  // container
  const div = document.createElement("div");
  div.classList = "grid place-items-center place-content-center space-y-1";
  // imageEl creation
  const img = document.createElement("img");
  img.classList = "w-48 rounded-md object-cover";
  img.setAttribute("src", val.image);
  // product name
  let productName = document.createElement("p");
  productName.classList = "text-xl font-semibold "
  productName.append(val.productName);
  // product price
  let productPrice = document.createElement("p");
  productPrice.append(val.price);
// add button
const addBtn = document.createElement("button")
addBtn.textContent = "Add"
addBtn.classList = "px-3 py-1 rounded-md bg-[#29B7FF] text-white" 
  div.append(img, productName, productPrice,addBtn);
  productListEl.append(div);
});

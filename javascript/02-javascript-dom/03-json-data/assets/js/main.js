import data from "../../data/data.json";
const productListEl = document.getElementById("productList");
data.forEach((val) => {
  // container
  const div = document.createElement("div");
  div.classList = "grid bg-[#F2EFE5] p-5 space-y-3 font-poppins rounded";
  // imageEl creation
  const img = document.createElement("img");
  img.classList = "w-96 rounded-md object-cover";
  img.setAttribute("src", val.image);
  // product name
  let productName = document.createElement("p");
  productName.classList = "text-lg font-semibold";
  productName.append("Name:", val.productName);
  // product price
  let productPrice = document.createElement("p");
  productPrice.append(val.price);
  // add button
  const addBtn = document.createElement("button");
  addBtn.textContent = "Add";
  addBtn.classList = "px-3 py-1 rounded-md bg-[#29B7FF] text-white hover:bg-[#29B7F2]";
  div.append(img, productName, productPrice, addBtn);
  productListEl.append(div);
});

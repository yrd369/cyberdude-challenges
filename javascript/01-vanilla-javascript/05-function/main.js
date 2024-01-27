// database
const sweets = [
  {
    id: 1,
    sweetName: "Almond Joy Bars",
    type: "Nut based",
    price: 10,
  },
  {
    id: 2,
    sweetName: "Cheesecake",
    type: "Dairy based",
    price: 30,
  },
  {
    id: 3,
    sweetName: "Coconut Barfi",
    type: "coconut based",
    price: 40,
  },
  {
    id: 4,
    sweetName: "Plumcake",
    type: "Dairy based",
    price: 50,
  },
];

// constructor
function AddSweet(sweetName, type, price) {
  this.id = sweets.length + 1;
  this.sweetName = sweetName;
  this.type = type;
  this.price = price;
}
const newSweet = new AddSweet("Coconut kheer", "coconut based", 100);
sweets.push(newSweet);

// function declation
const userNeed = prompt("What Type of Sweet do you want ?");
function getSweet() {
  const sweet = sweets.filter((val) => {
    return val.type === userNeed;
  });
  return sweet;
}
const sweetType = getSweet();
// console.log(sweetType);
if (sweetType.length > 0) {
  console.log(`We have the following ${userNeed} sweets...😊`);
  sweetType.forEach((val1) => {
    console.log(
      `ID: ${val1.id}, SweetName: ${val1.sweetName} SweetType: ${val1.type}`
    );
  });
} else {
  console.log(`We don't have the sweet type you entered...🥲`);
}

// function Expression
const userSweet = prompt("Enter the Sweet name you want...!");
const sweetName = function () {
  const selectedSweet = sweetType.find((val2) => {
    return val2.sweetName === userSweet;
  });
  return selectedSweet;
};
const finalSelection = sweetName();
if (finalSelection) {
  console.log(
    `SweetName: ${finalSelection.sweetName}, price: ${finalSelection.price}`
  );
} else {
  console.log(`sorry we don't have the following sweet...`);
}

// IIFE
const quantity = prompt("Enter quantity you need ?");
(function totalPrice() {
  console.log(
    `You have to pay ${quantity * finalSelection.price} to get your ${
      finalSelection.sweetName
    }...😊`
  );
})();
// console.log(sweets);

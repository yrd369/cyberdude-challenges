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

const cart = [];

// function declation
const userNeed = prompt("What Type of Sweet do you want ?");
function getSweet() {
  const sweet = sweets.filter((val) => {
    console.log(val === userNeed);
  });
  return sweet;
}
const sweetType = getSweet();
console.log(sweetType);

// function Expression
const cost = prompt(`Choose One want...!
${sweetType}`);
const sweetPrice = function (sweetType) {
  userSweetChoice = sweets.find((val1) => {
    return sweetType === val.sweet;
  });
};
sweetPrice();

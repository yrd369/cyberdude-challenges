//  Primitive Array
const input = prompt(`What do you want ?`);
const inputFirstLetter = input.slice(0, 1).toUpperCase();
const remainingLetters = input.slice(1).toLowerCase();
const finalInput = inputFirstLetter.concat(remainingLetters);
const fruits = ["Apple", "Orange", "Banana", "Grapes"];

//  creating instance in fruits
fruits.push("Mango");
// fruits.unshift("Jack fruit");

function newFruits(fruitName) {
  return fruitName;
}
const stocks = newFruits("Pomegranate");
fruits.push(stocks);

// reading an instance in fruits
const fr = fruits.find((val) => {
  return val === finalInput;
});

if (fr) {
  console.log(`we have ${finalInput}...!`);
} else {
  console.log(`we dont have ${finalInput}...`);
}

// updating
fruits.splice(4, 0, "pineapple");

// deleting

fruits.shift();

console.log(fruits);
// Reference array CRUD
const people = [
  {
    id: 1,
    personName: "Yogha Raj Dhayal",
    lastName: "Namburajan",
    hobbies: ["Travelling", "Practising Yoga"],
    age: 21,
  },
  {
    id: 2,
    personName: "Anbu Selvan",
    lastName: "Arunachalam",
    hobbies: ["Coding", "Swimming"],
    age: 27,
  },
  {
    id: 3,
    personName: "Shajid",
    lastName: "Shafee",
    hobbies: ["Reading Books", "Listening Songs"],
    age: 27,
  },
  {
    id: 4,
    personName: "Jack",
    lastName: "Sparrow",
    hobbies: ["Reading Books", "Listening Songs"],
    age: 25,
  },
  {
    id: 3,
    personName: "Muthu",
    lastName: "Kumari",
    hobbies: ["Reading Books", "Listening Songs"],
    age: 23,
  },
];

// creating an object in array

function createPerson(id, personName, lastName) {
  return { id, personName, lastName };
}

const val = createPerson(4, "abi", "rami");
const val2 = createPerson(5, "muthu", "akalya");
people.push(val, val2);

// reading an object in array
const userInput = prompt("Type your name");
const personfinded = people.find((val) => {
  return val.personName === userInput;
});
if (personfinded) {
  alert(`Name : ${userInput}
age : ${personfinded.age}
Hobbies : He has interest in ${personfinded.hobbies}`);
} else {
  alert(`You are not registered User`);
}

// deleting
let findedPersons = people.filter((result) => {
  return result.age <= 21;
});
console.log(findedPersons);
console.log(people);
// // Primitive Array
//  const input = prompt(`What do you want ?`);
//  const inputFirstLetter = input.slice(0,1).toUpperCase();
//  const remainingLetters = input.slice(1).toLowerCase();
//  const finalInput = inputFirstLetter.concat(remainingLetters);
// const fruits = ["Apple", "Orange", "Banana", "Grapes"];
// // creating instance in fruits
// fruits.push("Mango");
// fruits.unshift("Jack fruit");

// function newFruits(fruitName) {
//   return fruitName;
// }
// const stocks = newFruits("Pomegranate")
// fruits.push(stocks);

// // reading an instance in fruits
// const fr = fruits.find((val)=>{
//     return val === finalInput
// })

// if(fr){
//     console.log(`we have ${finalInput}...!`);
// }else{
//     console.log(`we dont have ${finalInput}...`);
// }

// // updating
// fruits.splice(4, 0, "pineapple");

// // deleting

// fruits.shift()

// console.log(fruits);

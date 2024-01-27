# Arrays (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #4: Create a primitive Array and manipulate it with CRUD(Create, Read, Update, Delete)

## Code

```js
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
```

### Live link ->

Deploy it and put the link here.

## Acknowledgement

[AnbuSelvan](https://github.com/anburocky3) guided me to learn JavaScript Arrays. [Shajid Shafee](https://github.com/mshajid) Clarified my doubts about JavaScript Array Methods.

## References:

[JavaScript Arrays](https://www.youtube.com/watch?v=Amu-MKgfkpk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=50)

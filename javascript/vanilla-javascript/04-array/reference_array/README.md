# Arrays (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #4: Create a reference Array and manipulate it with CRUD(Create, Read, Update, Delete)

## Code

```js
// Reference Array CRUD
let people = [
  {
    id: 1,
    personName: "Yogha Raj Dhayal",
    lastName: "Namburajan",
    hobbies: ["Travelling", "Practising Yoga"],
    age: 22,
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
    id: 5,
    personName: "Muthu",
    lastName: "Kumari",
    hobbies: ["Creating Novels", "Riding bike"],
    age: 21,
  },
];

// Creating an object in array
function createPerson(id, personName, lastName) {
  return { id, personName, lastName };
}
const Sweety = createPerson(4, "Bearcin", "Sweety");
const Muthu = createPerson(5, "Muthu", "Akalya");
people.push(Sweety, Muthu);

// Reading an object in array
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

// Updating
function updateAge(nameOfPerson, newAge) {
  const personToUpdate = people.find((val) => {
    return val.personName === nameOfPerson;
  });
  if (personToUpdate) {
    personToUpdate.age = newAge;
    console.log(`${personToUpdate.personName} age has been updated`);
  } else {
    console.log(`Username not found`);
  }
}
updateAge("Yogha Raj Dhayal", 30);

// Deleting
people = []

// console.log(people);
```

### Live link ->

Deploy it and put the link here.

## Acknowledgement

[AnbuSelvan](https://github.com/anburocky3) guided me to learn JavaScript Arrays. [Shajid Shafee](https://github.com/mshajid) Clarified my doubts about JavaScript Array Methods.

## References:

[JavaScript Arrays](https://www.youtube.com/watch?v=Amu-MKgfkpk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=50)
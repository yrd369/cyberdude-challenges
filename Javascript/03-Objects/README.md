# Object (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #3: Create a Object about yourself and manipulate it with CRUD(Create, Read, Update, Delete)

## Code

```js
// object
const person = {
  personName: "Yogha Raj Dhayal",
  qualification: "Bsc Computer Technology",
  technicalSkills: ["HTML", "CSS", "Javascript"],
  dob: new Date(2010, 10, 17),
  age: null,
  voteEligibilty: null,
};

// creating new Properties
function CreateProperties(currentRole, currentEmployer) {
  this.currentRole = currentRole;
  this.currentEmployer = currentEmployer;
}
let additionalInfo = new CreateProperties(
  "Junior Full Stack Engineer",
  "CyberDude Netwroks Pvt Ltd"
);
Object.assign(person, additionalInfo);

// updating
function ageCalculator() {
  const currentDate = new Date();
  const age = currentDate.getFullYear() - person.dob.getFullYear();
  return age;
}
person.age = ageCalculator();

// deleting
if (person.age < 18) {
  delete person.voteEligibilty;
} else {
  person.voteEligibilty = `He is eligible for voting`;
}

// reading
for (let keys in person) {
   console.log(`${keys}: ${person[keys]}`);
}
console.log(person);
```

### Live link ->

Deploy it and put the link here.

## Acknowledgement

[AnbuSelvan](https://github.com/anburocky3)

## References:

[JavaScript Objects](https://www.youtube.com/watch?v=iKD8RZoXrLQ&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=36)
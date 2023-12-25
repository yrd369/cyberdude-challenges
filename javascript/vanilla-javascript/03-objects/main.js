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
// console.log(person);

// database
const gym = [
  {
    id: 1,
    personName: "Hari shankar Dhayal",
    weight: 68,
    height: 1.7,
    age: 24,
    caloriesBurned: [10, 20, 30],
  },
  {
    id: 2,
    personName: "Yogha Raj Dhayal",
    weight: 68,
    height: 1.75,
    age: 22,
    caloriesBurned: [40, 50, 60],
  },
  {
    id: 3,
    personName: "Shajid",
    weight: 55,
    height: 1.69,
    age: 27,
    caloriesBurned: [20, 35, 60],
  },
  {
    id: 4,
    personName: "Jack",
    weight: 72,
    height: 1.69,
    age: 27,
    caloriesBurned: [10, 20, 15],
  },
];

// filter method
const userInput = +prompt("Enter age to filter people...");
const filteredPersons = gym.filter((val) => {
  return val.age > userInput;
});

// forEach
if (filteredPersons) {
  filteredPersons.forEach((val7) => {
    console.log(val7.personName);
  });
} else {
  console.log(`We dont have peoples with `);
}

// find method
const userName = prompt("Type the name you need to check...");
const finalPerson = filteredPersons.find((val1) => {
  return val1.personName === userName;
});

// reduce method
if (finalPerson) {
  function calCount() {
    const totalcal = finalPerson.caloriesBurned.reduce(
      (previousvalue, currentvalue) => {
        return previousvalue + currentvalue;
      },
      0
    );
    return totalcal;
  }
  const totalCalories = calCount();
  console.log(
    `${finalPerson.personName} has burned ${totalCalories} calories...👌`
  );
} else {
  console.log(`Username not found`);
}

// map
const bmiPerson = filteredPersons.map((val1) => {
  return {
    personName: val1.personName,
    bmi: Math.round(val1.weight / val1.height ** 2),
  };
});
bmiPerson.forEach((val0) => {
  console.log(`${val0.personName}'s BMI is ${val0.bmi}`);
});

// console.log(bmiPerson);
// console.log(gym);
// console.log("BMI of filtered Persons");

// // adding new members
// function addMember(
//   personName,
//   weight,
//   height,
//   age,
//   dateOfJoining,
//   fit,
//   category
// ) {
//   return {
//     id: gym.length + 1,
//     personName,
//     weight,
//     height,
//     age,
//     dateOfJoining,
//     fit,
//     category,
//   };
// }
// const anbu = addMember("Anbu", 75, 1.75, 28, Date(2023, 11, 30), "", null);
// gym.push(anbu);
//
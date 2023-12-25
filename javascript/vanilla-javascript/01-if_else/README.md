# If-Else (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #1: Create a if-else condition with all possible conditions

## Code

```js
// database
const headAdmins = [
  {
    adminName: "Abirami",
    userName: "abi",
    password: 123,
  },
  {
    adminName: "Yogha",
    userName: "yrd",
    password: 456,
  },
  {
    adminName: "Akalya",
    userName: "gpm",
    password: 789,
  },
  {
    adminName: "Vijay",
    userName: "vj",
    password: 246,
  },
  {
    adminName: "Sweety",
    userName: "bs",
    password: 963,
  },
];

// input from user
const input = prompt("Enter Your Name");
const firstLetter = input.slice(0, 1).toUpperCase();
const remainingLetter = input.slice(1).toLowerCase();
const userInput = firstLetter.concat(remainingLetter);
const userPassword = +prompt("Enter Password");

// checking user
const findingUser = headAdmins.find((value) => {
  return value.adminName === userInput && value.password === userPassword;
});

// priting statement
if (findingUser) {
  alert(`Welcome back ${userInput}...!`);
} else {
  alert(`Sorry ${userInput} you're are not a registered user.`);
}
```

### Live link ->

Deploy it and put the link here.

## Acknowledgement

[AnbuSelvan](https://github.com/anburocky3)

## References:

[JavaScript If_else](https://www.youtube.com/watch?v=WebG_D9-U80&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=2) 

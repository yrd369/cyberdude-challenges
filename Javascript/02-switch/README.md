# Switch-case (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #2: Create a switch condition with all possible conditions

## Code

```js
// checking variable as Expression
const num = 6;
let output = "output: ";
switch (num) {
  case 0:
    output += "So ";
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}

// checking conditional statements
const numbers = 20;
switch (true) {
  case numbers === 10:
    {
      console.log("Hai I am number 10");
    }
    break;
  case numbers > 10:
    {
      console.log("Hai I am greater than number 10");
    }
    break;
  default: {
    console.log("Type the Correct Number");
  }
}

// checking variable as Expression
let number = 10;
switch (number) {
  case (number = 10):
    {
      console.log("Hai I am number 10");
    }
    break;
  case 20:
    {
      console.log("Hai I am greater than number 10");
    }
    break;
  default: {
    console.log("Type the Correct Number");
  }
}
```

### Live link ->

Deploy it and put the link here.

[AnbuSelvan](https://github.com/anburocky3)

## References:

[JavaScript Switch case](https://www.youtube.com/watch?v=xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29)

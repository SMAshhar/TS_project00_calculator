#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

async function welcome() {
  let x = chalkAnimation.glitch("A simple calculator at your disposal");
  x.start();
  await setTimeout(() => {
    console.log("");
  }, 2000);
  x.stop();
}
welcome();

console.log(
  `
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
`
);

async function ask() {
  await inquirer
    .prompt([
      {
        name: "Number1",
        type: "number",
        message: "Enter the first number : ",
      },
      {
        name: "Number2",
        type: "number",
        message: "Enter the second number : ",
      },
      {
        name: "Action",
        type: "list",
        message: "Select Operation : ",
        choices: ["Add", "Sub", "Mul", "Div"],
      },
    ])
    .then((answer) => {
      answer.Action == "Add"
        ? console.log(chalk.greenBright
            (`${answer.Number1} + ${answer.Number2} = ${
              answer.Number1 + answer.Number2
            }`)
          )
        : answer.Action == "Sub"
        ? console.log(chalk.greenBright
            (`${answer.Number1} - ${answer.Number2} = ${
              answer.Number1 - answer.Number2
            }`)
          )
        : answer.Action == "Mul"
        ? console.log(chalk.greenBright
            (`${answer.Number1} * ${answer.Number2} = ${
              answer.Number1 * answer.Number2
            }`)
          )
        : console.log(chalk.greenBright
            (`${answer.Number1} / ${answer.Number2} = ${
              answer.Number1 / answer.Number2
            }`)
          );
    });
}
var n = 1;
async function startOver() {
  do {
    await ask();
    var tryAgain = await inquirer.prompt({
      name: "Again",
      type: "input",
      message: "Wanna try again? y/n",
    });
  } while (tryAgain.Again.toLowerCase() == "y");
  setTimeout(()=> {
    console.log("Have a Nice Day and Goodbye...")
  },1000)
  
}
startOver();


// function calculator():number | undefined {

//     var num1:number = Number(prompt("Enter the first number : "));
//     var num2:number = Number(prompt("Enter the second number : "));

//     var operation:string|null = prompt("Choose operation from : + - / * : ")

//     if (operation == "+" ) {
//         return num1 + num2;
//     } else if (operation == "-") {
//         return num1 - num2;
//     } else if (operation == "*") {
//         return num1 * num2;
//     } else if (operation == "/") {
//         return num1 / num2;
//     } else {
//         console.log("Stop joking around. ");
//         return undefined
//     }
// }

// console.log(calculator());

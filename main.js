import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user the input fo guessing  number
// 3)compare user input with computer generated number and show it.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "?Please Guess a number between 1-10:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations you guess a right number.");
}
else {
    console.log("Sorry you guess a wrong number\n Try Again ");
}

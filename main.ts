// number guessing game
"use strict";
import inquirer, { QuestionCollection } from "inquirer";

console.log("Welcome to Code with Jalal - CLI Number Guessing Game");

const randomNumber = Math.floor(Math.random() * 5 + 1);

async function main() {
    const questions: QuestionCollection = [
        {
            type: "number",
            name: "guess",
            message: "Guess a number between 1 and 5:",
        },
    ];

    const answer = await inquirer.prompt(questions);

    if (answer.guess === randomNumber) {
        console.log("Congratulations! You guessed the correct number.");
    } else {
        console.log(`Sorry, the correct number was ${randomNumber}. Better luck next time!`);
    }
}

main();
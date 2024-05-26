//ECMAScript_Modules
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.green("Enter your name Please!")
});
console.log(chalk.bold.italic.blue `Hello ,${answer.name}`);

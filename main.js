#! /usr/bin/env node
import inquirer from 'inquirer';
const questions = [{
        name: "num1",
        type: "number",
        message: "Enter number1"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter number2"
    },
    {
        name: "operations",
        type: "list",
        message: "What you want to do",
        choices: ["+", "-", "*", "/"]
    }];
var answers = await inquirer.prompt(questions);
if (answers.operations === "+") {
    console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
}
else if (answers.operations === "-") {
    console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
}
else if (answers.operations === "*") {
    console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
}
else if (answers.operations === "/") {
    console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
}
console.log(answers);
// .catch((err)=>{
//     console.log(err)
// })
//  import inquirer from "inquirer";
// let answer = await inquirer.prompt({
//     name:"age",
//     type:"number",
//     message:"Enter your age"
//  });
//  console.log("In Sha Allah in" + (60-answer.age)+ "yeras you will be 60 years old");
// import inquirer from "inquirer";
// async function grade() {
//     let result = await inquirer.prompt({
//         type: "number",
//         name: "num1",
//         message: "Enter number 1"
//     })
//     console.log(`your score is ${result}`)
//     if (result.num1 >= 80 && result.num1 <= 100) {
//         console.log("Your grade is A+")
//     }
//     else if (result.num1 >= 70 && result.num1 < 80) {
//         console.log("Your grade is A")
//     }
//     else if (result.num1 >= 60 && result.num1 < 70) {
//         console.log("Your grade is B")
//     }
//     else if (result.num1 >= 50 && result.num1 < 60) {
//         console.log("Your grade is C")
//     }
//     else{
//         console.log("You are failed")
//     }
// }

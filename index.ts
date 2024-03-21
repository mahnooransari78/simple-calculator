#! /usr/bin/env node
//               SHANBAG :

import inquirer from "inquirer";

const answer = await inquirer.prompt([
   {massege: "Enter your first number" , type: "number" , name : "firstNumber"},
   {massege: "Enter your second number" , type: "number", name : "secondNumber"},
   {
     massege :" Select one of the operator to perform operation", 
     type :"list" , 
     name : "operator",
     choices:["Addition","Subtraction","Multiplication","Divisoin"],
   },
]) ;

// CONTIDIONAL STATEMENT:

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if ( answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if ( answer.operator === "Multiplication") {
    console.log( answer.firstNumber *  answer.secondNumber);
} else if ( answer.operator === "Division") {
    console.log( answer.firstNumber / answer.secondNumber);
} else {
    console.log(" Please select valid number")
 }

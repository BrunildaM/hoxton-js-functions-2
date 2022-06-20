// Prompt the user for a letter

let choosenLetter = String(prompt("Please choose a letter of your name that you want to appear!"));
console.log(choosenLetter)

// Find all the users who's name contains the letter 
let foundUser = users.filter(user => user.name.indexOf(choosenLetter) > -1)
console.log(foundUser);

// Say hi to those users in the console - but only 1 greeting every 2 seconds.


function greet(){

    let count = 2000;

    for(let user of foundUser){
        setTimeout(function (){console.log(`Hi, ${user.name}`)}, count);
        count += 2000;
    }
}
greet();

// - Prompt the user for a user ID. Using the value, find all the todos that are Incomplete and console.log them.

let userIdChoosen = Number(prompt("Write the user Id you want to Enter!"))



let inComplete = todos.filter(todo => todo.userId === userIdChoosen && todo.completed === false)
console.log(inComplete);
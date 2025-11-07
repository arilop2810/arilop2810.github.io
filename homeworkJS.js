//1 String variable
 ///Write a variable that is a string and output to console

 let message = "Hello, Im Arianna from class AME 220, I think Im getting the hang of coding ever so slowly!";
 console.log(message);

 //2 Number Variable
 //Write a variable that is  a number and output to console 

 let age = 23
 console.log("I am", age, "years old.");

 //3 Addition
 ///Write a variable that takes any two numbers and adds them

 var num1 = 100
 var num2 = 70
 console.log("The sum of", num1, "and", num2, "is", num1 + num2);

 //4 Subtraction
 ///Write a variable that takes any two numbers and subtracts them and output to console

 var num3 = 200
 var num4 = 75
console.log(`The difference of ${num3}, and ${num4} is ${num3 - num4}`);
//^ i tried a different syntax here compared to the addition one

 ///5 Modulo
 ///Write a variable that takes any two numbers and performs a modulo that has the value of 1 and output to console

 let num5 = 10;
 let num6 = 3;
 console.log(`The modulo of ${num5} divided by ${num6} is ${num5 % num6}`);

 //6 Exponential
 //Write a variable that takes any two numbers and perform an exponential value and output to console

 let wholeNum = 2;
 let exponent = 4;
 console.log(`The result of ${wholeNum} raised to the power of ${exponent} is ${wholeNum ** exponent}`)



 ///7 Conditional Statement
 //Write a statement that is false using a conditional statement and output to console

 let Jay = false

if (Jay) {
    console.log("The boy is hungry");
} else {
    console.log("Nope, Jay is not hungry, he ate today.");
}



// I have created an object below, output to console the value of "breed" (hint: the structure is ObjectName.value you want to call)
// the keyword "this" is self referencing the object 

///proffessor example:
let siggy = {
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {

        return `Siggy is a ${this.breed} that is a ${this.fluffy} ${this.baby}`

    }
}

console.log(siggy.output()); 
// copy + paste the siggy object below and rename the variable from Siggy to an animal or name of your choice 
// then, I want you to change the object to the value of your choosing  

///8 My Attempt at Objects
let JayDoggo = {
    type : "doggo", 
    sun: "sunshine boy", 
    color: "golden", 
    output: function() {

        return `Jay is a ${this.type}, he is my ${this.color} ${this.sun}`

    }
}
//i output all the values in one line here (i think it was optional?)
console.log(JayDoggo.output());

//9 console.log the values of that object one by one. 

console.log(JayDoggo.type);
console.log(JayDoggo.sun);
console.log(JayDoggo.color);

//10 create an array 

let flowersArray = ["Hyacinth", "Rose", "Lily", "Peony"]
//console.log(flowersArray[2]); 
// // I called the value of the 3rd position for the array I made here, and output it
/* for (let i = 0; i < flowersArray.length; i ++) {
    console.log(flowersArray[i]);
}
 */
//I also called all the values of my flowerArray through a similar loop method


//11 call the value in the 3 position of this array and output to console 

let someArray = ["Ishrat", "Is", "Really", "Proud", "Of", "You"]

console.log(someArray[2]);

// call all values in the array using a loop 


for (let i = 0; i < someArray.length; i ++) {
    console.log(someArray[i]);
}

// what is the value of the variable ifStatement, leave your answer in the console. 

let ifStatement; 
let value = 5; 

if(value < 5)
{
    ifStatement = true;
}

else{
    ifStatement = false; 
}

//The condition is false, here is the output in the console
console.log(ifStatement); 


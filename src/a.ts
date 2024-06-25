// import { number } from "zod";

// import { string } from "zod";

// function greetUser(fname:string){
// console.log("Hello "+fname);
// }

// greetUser("nitin");

// // sum of 2 number in function 

// function sum(num1:number,num2:number):number{
//     // let ans:number= num1+num2;
//     // console.log("Sum of "+num1 +"and "+ num2 +"is "+ ans )

//     return num1+num2;

// }

// console.log(sum(44,3)); 


// function isLegal(age:number){

//     if(age>19){
//         return true;
//     }

//     else{
//         return false;
//     }
// }

// console.log(isLegal(32))



// function toCall(toBecalled:()=>void){
//     setTimeout(toBecalled,7000)
// }

// function toBecalled(){
//     console.log("I am to be called ")
// }

// toCall(toBecalled)

//INTERFACES

// interface User{
//         firstName:string,
//         lastName:string,
//         age:number ,
//         email?:string
// }

// function isLegal(user:User){

//     if(user.age<18){
//         return false;
//     }

//     else{
//         return true;
//     }

// }

// isLegal({
//     firstName:"Nitin",
//     lastName:"Kumar",
//     age:15
// })

//TYPES IN TYPESCRIPT 


//unions 


// type Greetagrs= number | string;

// function greet(id:Greetagrs){
// console.log(id)
// }

// greet(1);
// greet("1")


//INTERSECTIONS 

// type User={
//     name:string;
//     dob:Date
// }

// interface Admin{
// name:string;
// age:number; 
// }

// type TeamLead= User & Admin; 

// const TeamLead = {
//     name: "harkirat",
//     startDate: new Date(),
//     department: "Software developer"

// }

// console.log(TeamLead)


//ARRAYS
// type NumberArr= number[]


// function maxValue(values:number[]){

//     let max= 0 ;

//     for (let i=0 ;i<values.length;i++){
//         if(values[i]>max){
//             max=values[i]
//         }
//     }
//     return max;

// }

// console.log(maxValue([1,2,3]))


// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// function isLegal(users:User[]){
//    return users.filter(x=>x.age >=18)


// }


// ENUMERATIONS
// enum operations {
// 	up="up",
// 	down= "down",
// 	left= "left",
// 	right= "right"
// }

// function doSOmething(keyPressed: operations){
// 	if(keyPressed==operations.up){
// 		console.log("up is pressed")
// 	}

// 	if(keyPressed== operations.down){
// 		console.log("down is pressed")
// 	}

// 	if(keyPressed== operations.left){
// 		console.log("left is pressed")

// 	}

// 	if(keyPressed==operations.right){
// 		console.log("right is pressed")

// 	}
// }


// doSOmething(operations.up)
// doSOmething(operations.down)
// doSOmething(operations.left)
// doSOmething(operations.right)



// Enums are also used in express as a to define a enum in which all the status codes are defined and then when ever we need to define a status code we use Response.notfound or Response.whatever your status code is 

// GENERICS 
// let us define a function which takes an array as input and that array has either string or number 

type Input = number |string;

function firstEl( arr :(string|number)[]){
	return arr[0];
}

console.log(firstEl(["nitin","kumar"])
)
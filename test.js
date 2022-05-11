/*print hello world*/

// console.log('hello world');

/* print your name through variabe*/

// var myName = 'my name is mubashir';
// console.log(myName);

/*in javascript we can or cannot put semicolom;in the end it will not effect*/


// var mylastName = 'Ali'
// var _myAge = '26'
// var $mobNo = '+923...'
// console.log(mylastName)
// console.log(_myAge)
// console.log($mobNo)


/* Data Types in Javascript */
/*expressions and operator*/


// console.log(3+5)
// console.log(5-3)
// console.log(3*5)
// console.log(6/3)
// console.log("reminder operator" +27%4)
// console.log(typeof()); this syntax is for to find the data type.

/* practices of Datatypes*/
// var Name= "mubashir"
// console.log(Name);
// console.log(typeof(Name));
// console.log(5 + "10");              // it concatinate no with string, out[ut will be 510]
// console.log(10 - "5");              // the uot[ut will be a bug]
// console.log("Mubashir" + "Ali");
// console.log("Mubashir" - "Ali");    //it gives NaN(not a number output)

/*null vs undefined*/
// var myName=null;                      // asigned null value to var
// console.log(myName);
// console.log(typeof(myName));        // give "object" datatype as output this is also a bug

// var noname;                          //variable is un assigned it is called undefined
// console.log(noname);

// var iamMubi= true;
// console.log(typeof(iamMubi));

/*Expressions and operators*/

// var x = 5;         // here "x" and "5" are are operands and "=" is operator, x = 5 whole as expression.
// var y = 5;


/* postfix increment and decrement operator*/

// var num = 15
// var newnum = num++
// console.log(num)
// console.log(newnum)

// var num = 15
// var newnum = num++ +5
// console.log(num)
// console.log(newnum)

/* postfix deccrement and decrement operator*/

// var num = 15
// var newnum = num--
// console.log(num)
// console.log(newnum)

// var num =15
// var newnum = num-- +5
// console.log(num)
// console.log(newnum)

/* prefix increment and decrement operator*/

// var num = 15
// var newnum = ++num
// console.log(num)
// console.log(newnum)

// var num = 15
// var newnum = ++num +5
// console.log(num)
// console.log(newnum)

/* prefix decrement and decrement operator*/

// var num = 15
// var newnum = --num 
// console.log(num)
// console.log(newnum)

// var num = 15
// var newnum = --num +5
// console.log(num)
// console.log(newnum)

/* Comparison operator */

// var a = 15
// var b = 20
// console.log(a == b)
// console.log(a > b)
// console.log(a < b)

/* logical operator*/ //these are for bollean values
// logiacal AND(&&) operator or logical conjunction
// var a = 30
// var b = 10
// console.log(a > b);
// console.log(a > b && b > 0); // AND operator output will be true if all conditions will be true

// logiacal OR(||) operator or logical disjunction
// console.log(a < b);
// console.log(a > b || b < 0); // OR operator output will be true if one conditions will be true

// logiacal NOT(!) operator or logical complement or negation

// console.log(!a < b);
// console.log((a > b) || !(b < 0)); // OR operator output will be true if one conditions will be true

/* Strings operator or Concatiantion operator (+)*/

// console.log("hello"+"world");

/*Ecponentail operator*/
// console.log(2**3);

//write a program to swap two numbers
// var a = 2;
// var b = 8;
// c = b; //c=8
// b = a;  //b=2
// a = c; //a=8

// console.log("value of a is "  + a);
// console.log("value of b is "  + b);

/*swap  two numbers without using third variable*/
// var a = 2;
// var b = 8;

// a = a + b; //a=10
// b = a - b; //b= 2
// a = a - b; //a=8

// console.log("value of a is "  + a);
// console.log("value of b is "  + b);

// var a = 2;
// var b = "8";

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(a == b);

/*Statements And LOOPs */
// if-else statement
// var  a = 2;
// if(a == 3){
//     console.log(a);
// }else{
//     console.log("false");
// }

// peractise, write program given year is leap year or not

// var year = 2200;
// if (year % 4 == 0){
//     if(year % 100 == 0){
//         if(year % 400 == 0){
//             console.log("the year" + year + "is leap year");
//         }else{
//             console.log("the year" + year + "is not leap year");
//         }
//     }else{
//         console.log("the year" + year + "is leap year");
//     }
// }else{
//     console.log("the year" + year + "is not leap year");
// }

/* Conditional trrnanry Operator */ // it takes three operands
// variable name = (condition)?value1:value2
//  var age =18
//  if(age >= 18){
//      console.log("eligible to vote")
//  }else{
//     console.log("not eligible to vote") 
//  }
 // now by ternanry operator
//  var age =18;
//  console.log((age >= 18)? "eligible to vote" : "you cannot vote");

 /* Switch Statment */
 // let we have to finf area of circle rectanglr and triangle
 
//  var area = 'circle';
//  var PI=3.142, l=5, b=4, r=3;

//  switch(area){
//      case 'circle':
//          console.log("the area of circle " + PI*r**2);

//      case 'triangle':
//          console.log("the area of triangle " + (l*b)/2);

//      case 'rectangle':
//          console.log("the area of rectangle " + (l*b));

//      default:
//          console.log("please enter valid data");
//  }
 // the output will be all areas
 // now we want only one area from them then we use break statement

//  var area = 'circle';
//  var PI=3.142, l=5, b=4, r=3;

//  switch(area){
//      case 'circle':
//          console.log("the area of circle " + PI*r**2);
//          break;

//      case 'triangle':
//          console.log("the area of triangle " + (l*b)/2);
//          break;

//      case 'rectangle':
//          console.log("the area of rectangle " + (l*b));
//          break;

//      default:
//          console.log("please enter valid data");
//  }

 /* loops while, do-while */
 // While loop
// print number up to 10

// var num = 0;
// while(num <= 10){  //
//     console.log(num);
//     num++;
//}
// var num = 10;
// while(num >= 0){  //
//     console.log(num);
//     num--;
// }

// Do-while loop

// var num = 0;
// do{
//     console.log(num);
//     num++;
// }
// while(num <= 10);

/* For-lopp */
//print numbers up to ten
// for(var num=0; num<=10; num++){
//     console.log(num);
// }

// write table of some numbers

// for(var num=1; num<=10; num++){
//     var tableof = 8;
//     console.log(tableof + " * " + num + " = " + num*tableof);
// }
// print stars in triangle



/* Functions */
// funtion keyword function name(){statement}

// function sum(){
//     var a= 10, b=20;
//     var total = a + b;
//     console.log(total);
// }
// sum(); // function call, it is must

// function parameters              vs         function arguments
// are the names listed into function name.   // real value pass to function

// function sum(a,b){      // pass parameter in function name
//     var total = a + b;
//     console.log(total);
// }
// sum(20,30); // 20,30 are arguments
// sum(50,60);  /// ==

/*function expressions */ // create function and put into variable
// function sum(a,b){
//     var total = a + b;
//     console.log(total);
// }
// var funExp = sum(20,30);
// funExp; // function call

// return

// function sum(a,b){
//     return total = a+b;
// }
// var funExp = sum(20,30);
// console.log(funExp);

// anonymous function

// var funExp = function(a,b){
//     return total = a+b;
// }
// console.log(funExp(12,15));


/* Modren Java  Script/ ECMAScript*/
// ES6 Feature
// let and const


/* difference between var, let, and const */


// let myName = "mubashir"
// console.log(myName);

// myName = "Ali";
// console.log(myName);

// const myName = "mubashir"
// console.log(myName);

// myName = "Ali";
// console.log(myName);

// function biodata(){
//     var name= "Mubashir"
//     console.log(name);
//     if(true){
//         var myname = "mubi";
//         console.log('inner ' + myname);
//         console.log('inner ' + name);
//     }  
//     console.log('innerouter ' + myname);
// }
// biodata();

// function biodata(){
//     var name= "Mubashir"
//     console.log(name);
//     if(true){
//         let myname = "mubi";
//         console.log('inner' + myname);
//         console.log('inner' + name);
//     }  
//     console.log('innerouter' + myname); // this is out side of let block it will not print this 
// }
// biodata();


// function biodata(){
//     const name= "Mubashir"
//     console.log(name);
//     if(true){
//         var myname = "mubi";
//         console.log('inner ' + myname);
//         console.log('inner ' + name);
//     }  
//     console.log('innerouter ' + myname);
//  }
// biodata();

/* templete literals */

// for(n=1;n<=10;n++){
//     let tableof = 12;
//     console.log(`${tableof} * ${n} = ${tableof *n}`);
// }
/* Default parameters */

// function mult(a,b){
//     return a*b;
// }
// console.log(mult(2,3));

// // or //

// function mult(a,b=3){
//     return a*b;
// }
// console.log(mult(2));



// * fat arrow function **//

// const sum = () => {
//     let a =5, b=6;
//     let sum = a+b;
//     return `the sum of two number is ${sum}`;
//     // or//
//     // return `the sum of two number is ${a+b}`;
// }
// console.log(sum());



//* Arrays *//


// var friends = ['mubi','azhr','sohl','kami'];
// console.log(friends[1]);
// console.log(friends.length) this will give you array lenght.
//console.log(friends.length-1) to print last number

// Traversal of an array// 

// use for loop//
// var friends = ['mubi','azhr','sohl','kami'];

// for(var i=0; i<friends.length; i++){
//     console.log(friends[i]);
// }


// use for in loop and for of loop//
// for in loop will give you index no ofg your array
// var friends = ['mubi','azhr','sohl','kami'];
// for(let elements in friends){
//     console.log(elements);
// }

// for of loop will give you the actual data in your array
// var friends = ['mubi','azhr','sohl','kami'];
// for(let elements of friends){
//     console.log(elements);
// }

// for each loop

// var friends = ['mubi','azhr','sohl','kami'];

// friends.forEach(function(element, index, array){
//     console.log(element);
//     // index tell the element index no and array give the in which array u r wrrking
// });

/* searching and filter in an array */
// methods //
// 1) indexOf//// forward searching

// var friends = ['mubi','azhr','sohl','kami', 'mubi'];

// console.log(friends.indexOf("mubi"));
// //console.log(friends.indexOf("mubi",3));
// //console.log(friends.indexOf("Mubi"));

// 2) lastIndexOf // // check backward search
// var friends = ['mubi','azhr','sohl','kami', 'mubi'];

// console.log(friends.lastIndexOf("mubi"));
// //console.log(friends.lastIndexOf("mubi",2));
// //console.log(friends.lastIndexOf("Mubi"));

// 3) includes // // give the boolean value true/false, that value is present in array or not
// var friends = ['mubi','azhr','sohl','kami', 'mubi'];

// console.log(friends.includes("mubi"));
//// console.log(friends.lastIndexOf("mubi",2));

// filtration methods //
// 4) find // 

//const prices = [400,500,550,600,800,1000];

// prices < 500 //

// const findElem = prices.find((currVal) => {
//     return currVal <  500;
// })
// console.log(findElem);

// or

// const prices = [400,500,550,600,800,1000];

// console.log(prices.find((currVal) => currVal < 500));

//// findIndex ////

// const prices = [400,500,550,600,800,1000];

// console.log(prices.find((currVal) => currVal < 500));
// console.log(prices.findIndex((currVal) => currVal < 500));

// 5) filter method //


// const prices = [400,500,550,600,800,1000];

// // price > 500

//  const newPrice = prices.filter((elem, indes) =>{
//      return elem > 500;
//  })
//  console.log(newPrice);
 

/// or 
// const newPrice = prices.filter((elem, indes) =>{
//     return elem > 1500;
// })
// console.log(newPrice);



/** how to sort array, ascending to dscending */

//6) sort //
// this will sort alphabeticaly

// const months = ['jan','april','july','dec','sept'];
// console.log(months.sort());


//// for numbers

const num = [1, 4, 500, 1000, 67];
console.log(num.sort());  // this will provide incorrect value, because it first convert number into string



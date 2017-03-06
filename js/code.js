// // javaScript code
// //alert ("wwwow");
// 5;
// 7;
// 5.3;
// 432;
// 34, 43, 324.525;

// "this is a strimng";
// "this is a second string";
// "this is a \"spetial\" string";

// var myValue = 5;
// var mySecondValue = 7 + 9;
// var myThirdValue = myValue + mySecondValue;
// //alert(myThirdValue);

// var myName = "Jessy";
// var myLastName = "Liberty";
// var myFullName = myName + " " + myLastName;
// //alert(myFullName);

// var val = 5 + 9;

// //var ageAsString = prompt("what is your age?", "45");
// var age = Number(prompt("what is your age?", "45"));
// // if ( age < 40)
// // {
// //     alert("oh, you`re so young...");
// // }
// // else if( age == 40){
// //     alert("you are exactly 40");
// //     } else{
// //     alert("nothing bad, it\`s just a beginning");
// //     }
// // alert("Thank you");
// var string = "";
// for (var counter = 1; counter < age; counter += 1)
// {
//     string += "Happy Birthday \n";
//     if (counter % 7 == 0)
//     break;
// }
// //alert(string);
// var animal = "dog";

// switch(animal)
// {
//     case "cat":
//         alert ("meow");
//         break;
//     case "dog":
//         alert ("woof");
//         break;
//     case "horse":
//         alert ("whinny");
//         break;
//     default:
//         alert ("Unknown");
//         break;
// }

// var isFemale = false;
// var isOld = true;
// var isOldOrFemale = isFemale && isOld;
// alert(isOldOrFemale);
// var isMale = !isFemale;
// alert (isMale);
// alert (0 === false);
// var x = 15;
// var y = 6;
// var z = x + y;
// alert (z);
// var y = x < 10 ? x : 10;
// alert(y);
// function add (x, y)
// {
//     var z = x + y;
//     return;
// }

// var sum = add (5, 6);
// alert (sum);
// var add = function (x, y)
// {
//     var z = x + y;
//     return z;
// }

// sum = add (5,6);
// sum2 = add (6,6);
// //alert (sum);
// output.innerHTML = sum + ", " + sum2;
//  var constant = 32;

//  function celsiusToFarenheit( temperature)
//  {
//     var multiplier = 9;
//     var divisor = 5;
    
//     var farenheitTemp = temperature * multiplier / divisor + constant;
//     return farenheitTemp;
//  }

// output.innerHTML = celsiusToFarenheit(100);
// var x = 15;
// if (x < 20)
// {
//     var y = x;
// }

// var z = y;

// output.innerHTML = z;

// nested functions

// function hypotenuse()
// {
//     var side1 = 3;
//     var side2 = 4;

//     function squareside1()
//     {
//         return side1 * side1;
//     }
//     function squareside2()
//     {
//         return side2 * side2;
//     }

//     return Math.sqrt(squareside1() + squareside2());
// }
// 
// var scope = "global";

// function testScope (){
//     var scope = "local";
//     function innerFunc(){return scope;}
//     return innerFunc();
// }

// var answer = testScope ();
// output.innerHTML = answer;
// var scope = "global";

// function testScope (){
//     var scope = "local";
//     function innerFunc(){return scope;}
//     return innerFunc;
// }

// var innerFunc = testScope(); 
// var answer = innerFunc ();
// output.innerHTML = answer;

// var scope = "global";

// function testScope (){
//     var scope = "local";
//     function innerFunc(){return scope;}
//     return innerFunc;
// }

// var answer = testScope()(); 
// output.innerHTML = answer;

// var x = 50;
// function someFunction(){
//     var y = 100;
//     return x + y;
// }

// var answer = someFunction ();
// output.innerHTML = answer;

// function func1(num, exp){
//     if (exp === 0)
//     {
//         return 1;
//     }
//     return num * func2(num, exp - 1);
// }

// function func2(num, exp){
//     if (exp === 0) return 1;
//     return num * func3(num, exp - 1);
// }

// function func3(num, exp){
//     if (exp === 0) return 1;
//     return num * func4(num, exp - 1);
// }

// function func4(num, exp){
//     if (exp === 0) return 1;
//     alert ("exponent too big!");
// }

// var answer = func1(4, 3);
// output.innerHTML = answer;

// function func1(num, exp){
//     if (exp === 0)
//     {
//         return 1;
//     }
//     return num * func1(num, exp - 1);
// }

// var answer = func1(4, 3);
// output.innerHTML = answer;
// var dog = {
//     name: "Charlie",
//     breed: "Mix",
//     weight: 12,
//     color: "Brown"
// };

// var dogWeight = dog.weight;
// //alert (dogWeight);

// dog.disposition = "wonderful";
// disp = dog.disposition;
// // alert (disp);

// var height = dog.height;
// // alert (height);

// dog.weight = 15;
// var dogweight2 = dog.weight;
// alert (dogweight2);

// var empty = [];
// empty[0] = 1;
// empty[1] = 2;

// // alert (empty);

// var primes = [1, 2, 3, 5, 7, 11];
// var thirdPrime = primes[2];
// // alert (thirdPrime);

// var myArray = [1, "hello", false];
// var truth = myArray [2];
// // alert (truth);

// var myArrayLength = myArray.length;
// // alert(myArrayLength);

// function range(max){
//     var retVal = [];
//     for ( var i = 0; i < max; i++)
//     {
//         retVal[i] = i * 2;
//     }
//     return retVal;
// }
// alert (range(5));
// function range(max){
//     var retVal = [];
//     for ( var i = 0; i < max; i++)
//     {
//         retVal.push(i * 2);
//     }
//     var last = retVal.pop();
//     alert (last);
//     return retVal;
// }
// alert (range(5));

// function range(max){
//     var retVal = [];
//     for ( var i = 0; i < max; i++)
//     {
//         retVal.push(i * 2);
//     }
//         return retVal;
// }

// var myArray = range(5);

// for (var i = 0; i < myArray.length; i++)
// {
//     alert (myArray[i]);
// }

// var string1 = "Thr quick brown fox jumps over the lazy dog";
// var string2 = 'The quick brown fox jumps over the "lazy" dog'
// alert (string2);

var string1 = "The quick brown fox jumps over the \"lazy\" dog";
var string2 = ' and lived happily ever after.';
var newString = string1 + string2;
// alert (newString);

var myArray = newString.split (" ");
// alert (myArray);

var indexOfBrown = newString.indexOf("brown");
// alert(indexOfBrown);
var indexOfJumps = newString.indexOf("jumps");
var myFox = newString.slice(indexOfBrown, indexOfJumps);
alert(myFox);


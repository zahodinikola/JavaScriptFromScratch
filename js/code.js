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
 var constant = 32;

 function celsiusToFarenheit( temperature)
 {
    var farenheitTemp = temperature * 9 / 5 + constant;
    return farenheitTemp;
 }

 output.innerHTML = celsiusToFarenheit(100);
 
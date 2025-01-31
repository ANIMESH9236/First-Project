// let num =1;                // gives datatype.       abc = var abc   both are same 
// console.log(typeof num);    //number

// let str ="string1";
// console.log(typeof str);  //. "a" is also a string.    and " " is also a (empty) string.

// let bool=true;
// console.log(typeof bool);    //boolean.       //null is a primitive value not a primitive datatype.

// let abc;
// console.log(typeof abc);     //undefined. if the value is not assigned it is undefined whereas null is a value of a variable .

// let nill=null;
// console.log(typeof nill);   // in case of null it is object

// let num1=30;
// let num2=50;                //you can declare the value without assigning value only in var and let but in const you have to declare and assign the value at the same time.
// let num3=40;
// let num4=20;                //49.5 ---> ceil value= 50 ; floor value= 49; in case of round off it is same as basics.
// let num5=70;
// let num6=80
// console.log((num1+num2+num3-num4)*num5 / num6)  // javascript follows bodmass rule but brackets can be used for better understanding

// let num7=90;
// console.log(num %7);

// console.log(Math.ceil(49.1111));
// console.log(Math.floor(49.111));
// console.log(Math.round(49.1), Math.round(49.5))

// console.log(parseInt(5/2.446));    //it is same as floor devision and also used to convert in integer ; it also same as (Math.floor)

// console.log("Animesh"+ "Rai")

// const stri="abc";
// console.log(stri.length);

// const strin="def"      //if we search index greater than the difined ,it gives undefined as output.
// console.log(strin[2]);

// console.log(strin.charAt(2));


//TEMPLATE STRINGS

// let rollNumber = "one"
// let batchNumber ="E";

// console.log("my roll number is"+ rollNumber+" and my batch is"+ batchNumber);
// console.log("my roll number is"+ rollNumber+
// " and my batch is"+ batchNumber);
// console.log(`my roll number is ${rollNumber} and my batch number is ${batchNumber}`) // ---> is template String
// console.log(`my roll number is ${rollNumber}
//  and my batch number is ${batchNumber}`)


// const str ='A';                     //Unicode character code  (or ASCII) value of the character 'A' is 65.
// console.log(str.charCodeAt(0));

// console.log('abc'.includes('ac'))    //it includes subset of the defined variable and return true or false according to it in a sequence.
// console.log('abc'.indexOf('b'))    //    

// if (condition) {
//   //  block of code to be executed if the condition is true
// }
let a
console.log(typeof a)
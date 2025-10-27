// ------------------------------------Conversions--------------------------------------------------
let score="33abs"
// console.log("for string to number : ",typeof score);
let valueInNumber=Number(score)
// console.log(typeof (valueInNumber));
// console.log(valueInNumber); 
//since 33abs cannot be converted into number, 
//but also there is lack of strict checking in javascript- it returns NaN- not a number

/* for conversion to Number
"33" => 33
"33abs" =>NaN
true => 1; false=> 0
 */

let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log("for isLoggedIn: ",booleanIsLoggedIn);

/* 
1 => true; 0=> falase
"" => false
"anything* => true
*/

let num=33
let stringNum = String(num)
// console.log("for num to string :",stringNum);
// console.log(typeof stringNum);

// ------------------------------------Operations-----------------------------------------------
let value=3
let negVal = -value
console.log(negVal);

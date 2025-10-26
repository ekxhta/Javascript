const accountId = 144553
let accountEmail= "ekxhta@gmail.com"
var accountPassword="12345"
accountCity="Jaipur" //not ideal practice
let accountState; //if you declare a variable and don't initialise it, it is assigned "undefined" by default.

// some words in javascript are constant keywords. These keywords already have some syntax defined in the compiler
// For eg. the var and const keywords here, assign memory to your variables. Const here defines a constant variable- the value of which cannot be changed 
// accountId=2 TypeError: Assignment to constant variable.

console.log(accountId);
accountEmail="changed@gmail.com"
accountPassword="changed"
accountCity="Bengaluru"

console.table([accountId,accountPassword,accountEmail,accountCity,accountState]) 

/*let is used always for variables with non-constant values.
var is not used due to issue in block scope and functional scope*/
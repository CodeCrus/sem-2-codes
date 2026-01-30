//Ques 1
var x = 10;  // Global scope

function outer() {
  var x = 20;  // outer() scope
  
  function inner() {
    console.log(x);  // Accesses x from outer() scope due to closure
  }
  
  inner();  // Call inner() which prints 20
}

outer();  // Output: 20

//Ques 2
function multiply(a, b) {
  return a * b;
}

var result = multiply(4, 5);
console.log(result);  

//Ques 3(alternative)
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));  
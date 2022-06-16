//JS Scoping exercises What’s the result of executing this code and why.
function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test(); //  *! undefined and 2

// **What is result?
var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// *! [Function: otherFunction] 5
// *? NUMBER AND INPUT ARE NOT USED ON THE RUNTIME  CODE

//** What is the result of the following code? Explain your answer.
var a = 1;
function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }

  return bar;
}
var baz = foo();
baz(); // *! 2  only takes the functions scope of foo | a = 2

//** What will you see in the console for the following example?
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
//* No outputs returned

let counter = 20;
// This is to practice creating setTimeout() functions

// First I will create the simplest timeout function that will output a value after 2000 milliseconds

//setTimeout(console.log("Simplest timeout function"), 5000)

// This output the value immediately so isn't quite working so I'll look up the function and try again
// Looking up the answer shows that I have to pass a function into it to work, so it accept a function as the first parameter
//setTimeout is a callback function as after 2000ms it calls back to itself and output the value. It works asynchronously
setTimeout(function() {console.log("Simplest Timeout function");}, 2000);

/* The above worked. I passed in an anonymous function, one with no name, passed it no arguments
so nothing is returned to the caller. The {} signifies the block scoping for the function and the code that it will activate.
*/

//Next I want to create a a self-invoking function variation

//(setTimeout(function() {console.log("Self-invoking timeout function");}, 2000))();


//Sort of worked but had error setTimeout is not a function
//Now i want to try a self-invoking anonymous functions. This is a function statment which will be excuted immediately
(function()  {
  console.log("a simple self invoking function")
})();

// The above worked
// Therefore, this should work. I use let which scope variable to the {} block. In this case it is declared the global namespace so its scope is global. Then I assign a function to it
let activity1 = function() {
  setTimeout(function() {console.log("setTimeout assigned to a variable as a function expression within a function object");}, 3000);
}
//Calling the function
activity1();

//Now I want to rewrite this function so it is self-invoking

let activity2 = (function() {
  setTimeout(function() {console.log("Same as activity1 function but this time self-invoking");}, 4000);
})();

/* Now i want to trigger one setTimeout( function from another). I can do this with a self invoking activity 3
When activity3 is executed, it then triggers activity1, and uses the callback to executre the function after 5 seconds and display its value */
let activity3 = (function() {
  setTimeout(function() {activity1();}, 5000);
})();
//The above works and () is needed after activity to show its calling a function
//Now I have added a global let variable of counter to the top of the file, so a return parameter can be included
//The parameter is passed in as 10. The counter is private within this function due to (function, so the the counter doesnt clash with the global
let activity4 = (function(internalcounter) {
  setTimeout(function() {console.log("counter value is " + internalcounter)}, 2000);
})(10);

let activity5 = function(internalcounter) {
  setTimeout(function() {console.log("counter value is " + internalcounter)}, 2000);
};
activity5(60);

console.log(counter);



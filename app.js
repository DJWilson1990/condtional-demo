console.log("hello Dan");

let headerVar = document.getElementById("header1");

console.log(headerVar);

// key words: let, const, funtion, if, else, else if, for, while, do.....

let myFavNumber = 10;

if (myFavNumber == 10) {
  console.log("My fav number is 10!");
} else {
  console.log("Thats not my number!");
}

// myFavNumber set to 10. if the 'if' number isnt equal to 10, the console will show 'thats not my number. If number is equal to 10. console will show 'my fav number is 10.

function sum(a, b) {
  console.log(a + b);
}

sum(10, 5);

// create variable
let weather = "rain";

// statement
if (weather == "gloomy") {
  console.log("Wheres the sun?");
} else if (weather == "rain") {
  console.log("Still no sun");
} else {
  console.log("so much rain");
}

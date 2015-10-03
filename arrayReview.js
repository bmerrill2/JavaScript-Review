var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(arr){
  alert(arr.length - 1);
}

last(threeItems);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function evenOnly(arr){
  for (var i = arr.length; i > 0; i--){
    if (arr[i] % 2 !== 0){
      arr.splice(i, 1);
    }
  }
}
evenOnly(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function checkArray(arr, rand){
  for (i = 0; i < arr.length; i++){
    if (arr[i] === rand){
      var exist = true;
    }else{
      exist = false;
    }
  }
  alert(exist);
}

checkArray(randomArray, getRandomArbitrary);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice();
second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longestWord(string){
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  
  for(i = 0; i < str.length; i++){
    if (str[i].length > longest) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

longestWord(sentence);
  

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalizeEachWord(str) {
  var arr = str.split(" ");
  var newArray = [];
  
  for (var i = 0; i < arr.length; i++){
    newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].substring(1));
  }
  return newArray.join(" ");
}


capitalizeEachWord(myPoem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(str){
  var arr = str.split("");
  var vowels = 0;
  
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u"){
      vowels++;
    }
  }
  return vowels;
}

vowelCounter(theOdyssey);



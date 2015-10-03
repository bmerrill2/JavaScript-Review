//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
  band: 'Journey',
  food: 'Tacos',
  person: 'Natalie',
  book: 'Myron Bolitar Series',
  movie: 'Orange County',
  holiday: 'Christmas',
}



//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'BMW';
favoriteThings.brand = 'Nike';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = 'Lettuce';
favoriteThings.book = 'Fifty Shades of Gray';


//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

for(var key in user){
  if (!user[key]){
    delete(user[key])
  }
}
  
  
//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = "Brad";
user.username = 'bmerrill';
user.pwHash = 'password';

//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function{alert('hello')};
methodCollection.logHello = function{console.log('hello')};

                                       
//Now call your alertHello and logHello methods. 

methodCollection.alertHello();
methodCollection.logHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var test = "This is a test"

function voweler(str){
  var aCount = 0;
  var eCount = 0;
  var iCount = 0;
  var oCount = 0;
  var uCount = 0;
  var arr = str.split("");
  var vowels = {};
  
  for(i = 0; i < arr.length; i ++){
    if (arr[i] === "a"){
      aCount++;
      vowels.a = aCount;
    }
    if (arr[i] === "e"){
      eCount++;
      vowels.e = eCount;
    }
    if (arr[i] === "i"){
      iCount++;
      vowels.i = iCount;
    }
    if (arr[i] === "o"){
      oCount++;
      vowels.o = oCount;
    }
    if (arr[i] === "u"){
      uCount++;
      vowels.u = uCount;
    }
  }
  return vowels;
}


voweler(test);























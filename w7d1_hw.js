//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
//     //Your code goes here
// }

//Call method here with parameters

let dog_names = ["Max","HAS","PuRple","dog"]
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"

function lookUpProfile() {

  for (let i = 0; i < dog_names.length; i++) {

    if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
        console.log(`Matched ${dog_names[i]}`);
    } else {
        console.log("No match");
    }
}};


// console.log(lookUpProfile(dog_string));

//==================End Exercise #1 ==========//

//============Exercise #2 =============================================//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let bucket = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){

    for (let i = 0; i < arr.length; i++) {
  
      if (i % 2 == 0) {
        arr.splice(i,i++,"even index");
        //console.log(arr)
      } else {
          console.log("No match");
      }
        
  }
        return arr
};


  console.log(replaceEvens(bucket));
    //code goes here


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//============End Exercise #2 =============================================//
//============Codewars #1 =============================================//

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if (number % 2 == 0) {
      return ('Even')
    }
    else {
      return ('Odd')
    }
    
  }



//============Exercise #2 =============================================//

//Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
    return number * -1
  }
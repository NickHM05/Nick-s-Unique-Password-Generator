// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
   if (!max) 
   max = min
   min = 0

   var rand = Math.random()
   return Math.floor(min*(1 - rand) + rand*max)
   //return Math.floor(Math.random()*(max-min)+min)
 }
 
 function getRandomItem(list){
   return list[randomInt(list.length)]
 }

function generatePassword() {

 /*NaN stands for is not a number. 
 Also whats happening is if its not a valid input then alert the user. 
 However, if it is a valid input, if the input is LESS than 8 and GREATER than 128, send the window alert explaining what to do to the user. 
 Then the loop is broken using the break command in code once the true conditions of between 8 to 128 characters and is a number to the password length is met. 
 */ 
 
while(true) {
  
   var userInput = window.prompt("How long will your password be?")

   if (userInput === null) {
      return
   } 
   //the code above is used so that user is not stuck in an infinite prompt loop. 
   //That way it returns out of the prompt by hitting cancel otherwise the user would have to close out the tab and we dont want that.

   var passwordLength = parseInt(userInput)

   if (isNaN(passwordLength)) {
   window.alert("That's not a number!")
   // || means that either condition has to be true. So the length has to be greater than 8 and less than 128 in order to be true.
  }  else if (passwordLength < 8 || passwordLength > 128) {
   window.alert("Invalid password length. The length should be between 8 and 128 characters.")
  } else {
   break
  }

   
}
//these are all the prompt text used for each set of prompts. 
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercaseletters = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercaseletters = window.confirm("Would you like to include uppercase letters in your password?")  

//These are the characters to be defined and use for each prompt. 

  var numberList = ["0","1","2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@","#","$","%","^","&","*"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var UppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

/*optionsCart is what confirms each prompt of their conditional text used above and pushes it into the randomlist varaible.
For example asking the user if they want numbers the variable will push from numbers list into the list for generating the password. 
Each option chosen will be added or not by the user using their input.*/

  var optionsCart = []

 if (userWantsNumbers === true){
    optionsCart.push(numberList)
 }

 if (userWantsSymbols === true){
    optionsCart.push(symbolList)
 }

 if (userWantsLowercaseletters === true){
    optionsCart.push(lowercaseList)
 }

 if (userWantsUppercaseletters === true){
    optionsCart.push(UppercaseList)
 }
/*makes it so that the list will generate to lowercase by default if nothing is chosen in above lists*/
 if (optionsCart.length === 0) {
   optionsCart.push(lowercaseList)
 }

 var generatePassword = ""

 // this is the for loop  //
 for (var i = 0; i < passwordLength;i++){
   var randomList = getRandomItem(optionsCart)
   var RandomChar = getRandomItem(randomList)
   generatePassword += RandomChar
 }
//this code below generates the password in the console from the for loop. This is also where the function ends. Then the generate password is returned and is called later.
 
 return generatePassword
}
//return is to get some value back from the functions to be used more often//

// Write password to the #password input//
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   //if its not a password return the user back to starting the application again.
   if (!password)return

   if(password) {
   passwordText.value = password;
   }

   
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

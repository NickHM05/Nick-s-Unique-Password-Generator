// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  
   var userInput = window.prompt("How long will your password be?")

   var passwordLength = parseInt(userInput)

 /*NaN stands for is not a number. */ 
  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
 }


}


// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

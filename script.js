// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var userInput = window.prompt("How long will your password be?")

  var passwordsLength = parseInt(userInput)

/*NaN stands for is not a number, so if the input from the user is not a number that is between 8 and 128 */ 
  if (isNaN(passwordsLength)) {
    window.alert("That's not a number!")
    return
  }

if (passwordsLength < 8 || passwordsLength > 128) {
  window.alert("Password character length must be between 8 and 128 characters in order to continue")
  return
}

// Add event listener to generate button. 
// 53;34
/*var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
*/
generateBtn.addEventListener("click", writePassword);

if (passwordsLength < 8 || passwordsLength > 128) {
  window.alert("Password character length must be between 8 and 128 characters in order to continue")
  return
}
}
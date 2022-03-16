// Assignment Code
var generateBtn = document.querySelector("#generate");
// var aNumber =[ Range(8,120) ];

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// window.alert("You must complete the following prompts for a new password")
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
function generatePassword(){
  var aNumber = Number(window.prompt("Please choose at least 8 characters and no more than 128 characters", ""));
  console.log(aNumber)
  if(isNaN(aNumber)){
    window.alert("This is not a number, try again.")
    return "Please try again"
  }
  if( aNumber<8){
    window.alert("The number is below 8 characters")
    return "Please try again"
  }
  if(aNumber>128){
    window.alert("This number is above 128 characters")
  return "Please try again"
  }
var lowerChoice = window.confirm("Do you want lowercase in your password")
console.log(lowerChoice)


// if (lowerChoice=false) {
//   [ABCDEFGHIJKLMNOPQRSTUVWXYZ]
// }else {[abcdefghijklmnopqrstuvwxyz]

// }

// var specialChar
// if(specialChar = true){
 
// ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?"]
// }else{

// }




}
  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

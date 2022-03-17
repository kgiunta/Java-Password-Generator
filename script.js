// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var totalChoices = [];

function generatePassword() {
  var aNumber = Number(
    window.prompt(
      "Please choose a password length of at least 8 characters and no more than 128 characters",
      ""
    )
  );
  console.log(aNumber);
  if (isNaN(aNumber)) {
    window.alert("This is not a number, try again.");
    return "Please try again";
  }
  if (aNumber < 8) {
    window.alert("The number is below 8 characters");
    return "Please try again";
  }
  if (aNumber > 128) {
    window.alert("This number is above 128 characters");
    return "Please try again";
  }
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var password = "";
  var lowerChoice = window.confirm("Do you want lowercase in your password");
  console.log(lowerChoice);
  // get one lowercase letter
  // add all lower case letters to the possible combos
  if (lowerChoice == true) {
    var lowerIndex = Math.floor(Math.random() * lowerCase.length);
    var lowerLetter = lowerCase[lowerIndex];
    password += lowerLetter;
    totalChoices = totalChoices.concat(lowerCase);
  }

  var upperChoice = window.confirm("Do you want uppercase in your password");
  console.log(upperChoice);
  if (upperChoice == true) {
    var upperIndex = Math.floor(Math.random() * upperCase.length);
    var upperLetter = upperCase[upperIndex];
    password += upperLetter;
    totalChoices = totalChoices.concat(upperCase);
  }

  var specialCharChoice = window.confirm(
    "Do you want special characters in your password"
  );
  console.log(specialCharChoice);
  if (specialCharChoice == true) {
    var charIndex = Math.floor(Math.random() * specialChar.length);
    console.log(specialChar.length);
    var charLetter = specialChar[charIndex];
    password += charLetter;
    console.log(charIndex);
    totalChoices = totalChoices.concat(specialChar);
  }
  var num = window.confirm("Do you want numbers in your password");
  console.log(num);
  if (num == true) {
    var numbIndex = Math.floor(Math.random() * numbers.length);
    var numLetter = numbers[numbIndex];
    password += numLetter;
    totalChoices = totalChoices.concat(numbers);
  }
  if (!num && !specialCharChoice && !upperChoice && !lowerChoice) {
    window.alert("PLEASE SELECT AT LEAST ONE CRITERIA");
    return "";
  }
  for (let index = password.length; index < aNumber; index++) {
    var indexPull = Math.floor(Math.random() * totalChoices.length);
    var generator = totalChoices[indexPull];
    password += generator;
  }
  // scrambles password in true random fashion
  password = [...password].sort(() => Math.random() - 0.5).join("");
  totalChoices = [];
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var upperCase = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', '<', '>', '?', '/', '[', ']'];
var Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var random = [];
var generateBtn = document.querySelector("#generate");



function writePassword() {
  random = [];
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function randomNumberSpecial(){
  var responseSymbols = confirm("Do you want Symbols?");
  var responseLowercase = confirm("Do you want Lower Case letters?");
  var responseUppercase = confirm("Do you want Upper Case letters?");
  var responseNum = confirm("Do you want Numbers in it? Y/N");
  do {
    var passwordLength = parseInt(prompt("Password Length No less then 8 Chars"));
    console.log(passwordLength);
  } while (passwordLength < 8);
  

  if(responseSymbols){
    random.push.apply(random,specialCharacters);
  }
  if(responseLowercase){
    random.push.apply(random,lowerCase);
  }
  if(responseUppercase){
    random.push.apply(random,upperCase);
  }
  if(responseNum){
    random.push.apply(random,Numbers);
  }
  return passwordLength;
}
function generatePassword(){
  var y = randomNumberSpecial();
  var passGen="";
  console.log(random);
  for(var x = 0; x < y; x++){
    passGen += (random[parseInt(Math.floor(Math.random() * (random.length)))])
  }
  return passGen;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

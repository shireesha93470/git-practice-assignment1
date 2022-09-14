function checkPalindrome(str) {    
    const reversedString = str.split('').reverse().join('');
    if(str === reversedString)
          return true;
    else
          return false;
  }
  result = checkPalindrome("summi")
  if(result == true){
  console.log("The given string is Palindrome");
  }
  else{
    console.log("The given string is NOT Palindrome");
  }
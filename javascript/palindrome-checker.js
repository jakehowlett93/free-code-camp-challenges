function palindrome(str) {

    let reverseStr = '';
  
    //removes all non-alphanumeric characters
    str = str.replace(/\W|_|,/g, "").toLowerCase();
    
    //reverses the string
    reverseStr = str.split("").reverse().join("");
    
    //checks for palindrome
    return str === reverseStr;
  }
  

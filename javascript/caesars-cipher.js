function rot13(str) {
  
  let arrayStr = str.split(""), asciiValue, codedLetter;

//convert letters to ascii
 arrayStr.forEach((value, index, arr) => {
    asciiValue = str.charCodeAt(index);
    //encodes the letters
    if (asciiValue >= 65 && asciiValue <= 90) {
      asciiValue += 13;
      //loops round the alphabet
      if (asciiValue > 90) {
        asciiValue -= 26;
      }
    }
    //replaces letters in the array
    codedLetter = String.fromCharCode(asciiValue);
    arrayStr.splice(index, 1, codedLetter);

  });

  return arrayStr.join("");
}
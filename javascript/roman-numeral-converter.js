function convertToRoman(num) {
    let numeralLookUp = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1},
    convertedNumeral = "";

    //converts decimal to numeral
    Object.keys(numeralLookUp).forEach((element) => {
        while (num >= numeralLookUp[element]) {
            convertedNumeral += element;
            num -= numeralLookUp[element];
        }
    });
 return convertedNumeral;
}
convertToRoman(36);
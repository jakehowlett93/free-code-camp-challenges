function convertToRoman(num) {
    var numeralLookUp = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1},
    convertedNumeral = "",
    i;

    //converts decimal to numeral
    for (i in numeralLookUp) {
        while ( num >= numeralLookUp[i]) {
            convertedNumeral += i;
            num -= numeralLookUp[i];
        }
    }
 return convertedNumeral;
}
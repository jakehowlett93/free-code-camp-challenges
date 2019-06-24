function permAlone(str) {
//finds all the permutations of a string and counts how many contain no consecutive repeating characters
    var arr = str.split('');
    var result = 0
  
    function switchChar(a, b) {
    //swaps characters at indexes a and b in the array
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp; 
    }
  
    function permFinder(n) {
    //finds all the possible permutations
      var regex = /([a-z])\1+/;
  
      if (n === 1 && !regex.test(arr.join(''))) {
      //counts all the permutations that have no consecutive repeating characters
        result++
  
      } else {
        for (var i = 0; i < n; i++) {
          permFinder(n - 1);
  
          if (n % 2) {
            switchChar(i, n-1);
          }
          else {
            switchChar(0, n-1);
          }
        }
      }
    }
    permFinder(str.length);
    return result;
  }
  
  permAlone('aab');
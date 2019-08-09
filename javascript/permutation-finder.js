function permAlone(str) {
//finds all the permutations of a string and counts how many contain no consecutive repeating characters1
    let arr = str.split('');
    let result = 0
  
    function switchChar(a, b) {
    //swaps characters at indexes a and b in the array
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp; 
    }
  
    function permFinder(n) {
    //finds all the possible permutations
      var regex = /([a-z])\1+/;
      
      //counts all the permutations that have no consecutive repeating characters
      if (n === 1 && !regex.test(arr.join(''))) {
        result++
  
      } else {
        for (let i = 0; i < n; i++) {
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
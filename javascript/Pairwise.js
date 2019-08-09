function pairwise(arr, arg) {
    //finds element pairs that sum equal the second argument and returns the sum of their indices
    let count = 1;
    let pairIndices = [0]
  
  
    for (let i = 0; i < arr.length-1; i++) {
      for (let j = count; j < arr.length; j++) {
        if (arr[i] + arr[j] == arg) {
          pairIndices.push(arr.indexOf(arr[i]))
          arr[i] = undefined        
          pairIndices.push(arr.indexOf(arr[j]))
          arr[j] = undefined
        }
      }
      count++;
    }
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalIndex = pairIndices.reduce(reducer);
  
    return totalIndex;
  }
  
  pairwise([1, 1, 1], 2)
function getProductIndex(arr, item) {
  //get the index of an item in the array
  let index;
  index = arr.some((element, index, arr) => arr[index][1] === item);
  if (index > 0) {
      return index
  } else {
      return false
  }
}
function updateInventory(arr1, arr2) {
 //compares two 2D arrays and updates the first array by comparing it to the second
 var arr1OriginalLength = arr1.length;

  //checks if arr1 is empty
  if (!Array.isArray(arr1) || !arr1.length) {
    arr1 = arr2;
  } else {

    //check if item exists in array, if it does add new inventory to current inventory
    arr2.forEach ((element2, index2) => {
        arr1.forEach ((element1, index1) => {
            if (arr1[index1][1] == arr2[index2][1]) {
                arr1[index1][0] += arr2[index2][0];
            }

          //check if any new inventory items are new to the current inventory, if so adds item to current inventory
            if (getProductIndex(arr1, arr2[index2][1]) === false){
                arr1.push(arr2[index2]);
                console.log(arr1)  
            }
        });
    });
  }

  //sorts the list
  arr1.sort(function (a, b) {
    if (a[1] > b[1]) {
        return 1;
    }
    if (a[1] < b[1]) {
        return -1;
    }
    return 0;
  });
  console.log(arr1)
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
updateInventory(curInv, newInv);
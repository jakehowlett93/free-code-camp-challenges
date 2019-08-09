function findDiff(arrOne, arrTwo) {
  //finds the symmetrical difference between two arrays
    let difference = [];

    arrOne.forEach((element, index) => {
      if (!arrTwo.includes(arrOne[index]) && !difference.includes(arrOne[index])) {
        difference.push(arrOne[index]);
      }
    });

    arrTwo.forEach((element, index) => {
      if (!arrOne.includes(arrTwo[index]) && !difference.includes(arrTwo[index])) {
        difference.push(arrTwo[index]);
      }
    });

    difference.sort((a, b) => a - b);
    return difference;
  }

function sym(args) {
//finds the symmetrical difference between a series of arrays

  args = Array.prototype.slice.call(arguments);

  return args.reduce(findDiff);
}
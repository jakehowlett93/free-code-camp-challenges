function findDiff(arrOne, arrTwo) {
  //finds the symmetrical difference between two arrays
    var difference = []

    for (let i = 0; i < arrOne.length; i++) {
      if (!arrTwo.includes(arrOne[i]) && !difference.includes(arrOne[i])) {
        difference.push(arrOne[i])
      }
    }

    for (let i = 0; i < arrTwo.length; i++) {
      if (!arrOne.includes(arrTwo[i]) && !difference.includes(arrTwo[i])) {
        difference.push(arrTwo[i])
      }
    }

    difference.sort((arrOne, arrTwo) => arrOne - arrTwo);
    return difference
  }

function sym(args) {
//finds the symmetrical difference between arrOne series of arrays

  args = Array.prototype.slice.call(arguments)

  return args.reduce(findDiff);
}
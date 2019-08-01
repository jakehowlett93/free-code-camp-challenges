  //calculates the total change available in the drawer
  let totalCid = 0;
  cid.forEach((element, index) => {
    totalCid += cid[index][1]
  });
  return totalCid;
}

function amountOfCoins(cid, currencyKey) {
  //calculates how many of each coin is available
  let specificCoins = {}, k, coins;
  cid.forEach ((element, index) => {
    coins = cid[index][1] / currencyKey[cid[index][0]];
    specificCoins[cid[index][0]] = coins;
  });
  return specificCoins;
}

function checkCashRegister(price, cash, cid) {
  //calculates how much change to give
  const currencyKey = {"ONE HUNDRED":100, "TWENTY":20, "TEN":10, "FIVE":5, "ONE":1, "QUARTER":0.25, "DIME":0.1, "NICKEL":0.05, "PENNY":0.01};
  let requiredChange, total, j, availableCoins, changeList = [], count,
  change = {
    status: "OPEN",
    change: []
  };
  //calculate values needed to determine return status
  availableCoins = amountOfCoins(cid, currencyKey);
  total = availableChange(cid);
  requiredChange = cash - price;
  //compares the amount of cash in drawer to the amount of change required to determine return status
  if (total < requiredChange) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  if (total === requiredChange) {
    return {status: "CLOSED", change: cid};
  }
  if (total > requiredChange) {
    //determines amount of each coin to give and adjusts their availability
    Object.keys(currencyKey).forEach ((element) => {
      count = 0;      
      while (requiredChange >= currencyKey[element] && availableCoins[element] > 0) {
        availableCoins[element] -= 1;
        requiredChange -= currencyKey[element];
        requiredChange = requiredChange.toFixed(2);
        count++;
      }
      if (count > 0) {
        changeList.push([element, count * currencyKey[element]]);
      }  
    });
    //checks there was enough coins to give correct change
    if (requiredChange > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    change.change = changeList;
  }
  ;
  return change;
}
function availableChange(cid) {
  //calculates the total change available in the drawer
  var i, totalCid = 0;
  for (i in cid) {
    totalCid += cid[i][1]
  }
  return totalCid;
}

function amountOfCoins(cid, currencyKey) {
  //calculates how many of each coin is available
  var specificCoins = {}, k, coins;
  for (k in cid) {
    coins = cid[k][1] / currencyKey[cid[k][0]];
    specificCoins[cid[k][0]] = coins;
  }
  return specificCoins;
}

function checkCashRegister(price, cash, cid) {
  //calculates how much change to give
  const currencyKey = {"ONE HUNDRED":100, "TWENTY":20, "TEN":10, "FIVE":5, "ONE":1, "QUARTER":0.25, "DIME":0.1, "NICKEL":0.05, "PENNY":0.01};
  var requiredChange, total, j, availableCoins, changeList = [], count,
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
    for (j in currencyKey) {
      count = 0;      
      while (requiredChange >= currencyKey[j] && availableCoins[j] > 0) {
        availableCoins[j] -= 1;
        requiredChange -= currencyKey[j];
        requiredChange = requiredChange.toFixed(2);
        count++;
      }
      if (count > 0) {
        changeList.push([j, count * currencyKey[j]]);
      }  
    }
    //checks there was enough coins to give correct change
    if (requiredChange > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    change.change = changeList;
  }
  return change;
}
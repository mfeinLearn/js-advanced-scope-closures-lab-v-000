function produceDrivingRange(blockRange) {
  return function(restorantStreet, customerStreet) {
    let restStreet = parseInt(restorantStreet);
    let custStreet = parseInt(customerStreet);
    let distanceToTravel = Math.abs(custStreet - restStreet);
    let differenceFromRestToHome = blockRange - distanceToTravel;
  // the difference between the restorant and the home
    if (differenceFromRestToHome > 0) {
      return `within range by ${differenceFromRestToHome}`
        } else {
      return `${Math.abs(differenceFromRestToHome)} blocks out of range`
    }// end of condition
  }
}

function produceTipCalculator(tip) {
    return function(fair) {
      return fair * tip
    }
}

function createDriver() {
  let driverId = 0;
  // return the class
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}

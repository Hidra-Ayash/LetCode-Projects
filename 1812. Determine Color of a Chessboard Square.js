/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let num = Number(coordinates[1]);
  if (coordinates[0] == "a") {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  } else if (coordinates[0] == "b") {
    if (num % 2 == 0) {
      return false;
    } else {
      return true;
    }
  } else if (coordinates[0] == "c") {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  } else if (coordinates[0] == "d") {
    if (num % 2 == 0) {
      return false;
    } else {
      return true;
    }
  } else if (coordinates[0] == "e") {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  } else if (coordinates[0] == "f") {
    if (num % 2 == 0) {
      return false;
    } else {
      return true;
    }
  } else if (coordinates[0] == "g") {
    if (num % 2 == 0) {
      return true;
    } else {
      return false;
    }
  } else if (coordinates[0] == "h") {
    if (num % 2 == 0) {
      return false;
    } else {
      return true;
    }
  }
};
console.log(squareIsWhite("c7"));

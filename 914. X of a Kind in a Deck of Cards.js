/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length == 1) {
    return false;
  }
  deck.sort((a, b) => a - b);

  let mapArr = new Map();
  let count = 1;
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] == deck[i + 1]) {
      count++;
      mapArr.set(deck[i], count);
    } else {
      count = 1;
    }
  }
  let resCount = 0;
  let elmComp = mapArr.get(deck[0]);

  for (let elm of mapArr) {
    if (elm[1] == elmComp) {
      resCount++;
    }
  }
  if (resCount == mapArr.size) {
    return true;
  } else {
    return false;
  }
};
console.log(hasGroupsSizeX([1]));

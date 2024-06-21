/**
 *
 * @param {Number} numRow
 * @param {[][]}resPascal
 * @param {[]} newRow
 */
//Pascal Triangle And How To Draw This ???
//Here Are The Code of Triangle in JavaScript Language
//Space Complexity is : O(n^2)

function createPascaslTraingleByNumRow(numRow) {
  let resPascal = [[1]]; //Create The Array of Pascal Triangle
  for (let i = 0; i < numRow; i++) {
    const newRow = [1]; //Create A new Row Of Pascal Triangle
    let elm = resPascal[i]; //1D Element of Pascal Triangle
    for (let j = 0; j < elm.length - 1; j++) {
      newRow.push(elm[j] + elm[j + 1]); //Add the sum of previous Two Number
    }
    newRow.push(1); //Add the One In The End
    resPascal.push(newRow); //Add The New Row Of Triangle in The Result Array
  }
  return resPascal;
}
console.log(`The Result is :`, createPascaslTraingleByNumRow(5));

//The Result is :
/**
                     [
                        [ 1 ], 
                       [ 1, 1 ],  
                     [ 1, 2, 1 ],  
                    [ 1, 3, 3, 1 ],       
                   [ 1, 4, 6, 4, 1 ],    
                 [ 1, 5, 10, 10, 5, 1 ]
                     ]
 */

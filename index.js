function hasTargetSum(array, target) {

  for (let i = 0; i < array.length; i++) {
    const secondNum = target - array[i];
    for (let b = i + 1; b < array.length; b++) {
      if (array[b] === secondNum) return true
    }

  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  iterate thru each num in the array
  for current num identify second num that equals target num 
  if so, return true 
  if not, return false 
*/

/*
  Add written explanation of your solution here
  the function contains a for loop 
  the for loop iterates thru each number looking for a second number to complete the taget number
  if a second number is found then the function returns true
  if a second number cannot be found then it will return false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

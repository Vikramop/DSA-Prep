// Checking sum zero - Problem 1
//Remove the first pair who's sum are zero.
// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4, 4]-> Output

// now the array must be sorted of it's not then sort first

function ZeroSum(array) {
  for (let number of array) {
    // console.log('Outer loop');
    for (let j = 1; j < array.length; j++) {
      // console.log('Inner loop');
      if (number + array[j] == 0) {
        return [number, array[j]];
      }
    }
  }
}

const result = ZeroSum([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// o(n^2) quadratic time complexity cuz it has two loops
//now to make it linear with one loop i.e. O(n)

//so here the logic is the first number compares and start with the next element as j starts with one and compares to all the other element to fulfil the condition.

//And to see this in action uncomment the console.log function

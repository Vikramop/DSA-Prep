//[1, 2, 3, 4, 3, 5, 4, 6, 7, 8] -> Total elements - 10
//Count the largest sum of consecutive Digits
//suppose  num = 4  so sum = 25 (for the above array)

//Conditions
// num > array -> error message.
// 10 - 4 + 1 => 7  => Total numbers of iterations formula
// (number of elements - num + 1)

function findLargest(array, num) {
  if (num > array) {
    throw new Error('num should not be greater than array');
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);

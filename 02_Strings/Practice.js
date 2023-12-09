function maxi(array, num) {
  if (num > array) {
    throw new Error('num shld not be greater than array');
  }
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

const result = maxi([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);

// and since we are not using nested loops so the time complexity will be linear =>o(n)

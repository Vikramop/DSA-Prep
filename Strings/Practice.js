function Zero(array) {
  for (let number of array) {
    for (let i = 1; i < array.length; i++) {
      if (number + array[i] == 0) {
        return [number, array[i]];
      }
    }
  }
}

const result = Zero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

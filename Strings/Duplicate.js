function Duplicate(array) {
  if (array.length === 0) return 0;
  let i = 0;
  //   const arr = [];

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
      //   arr.push(i);
    }
  }

  return i + 1;
}

const result = Duplicate([1, 2, 2, 2, 3, 3, 4, 5, 6, 6]);
console.log('result:', result); // should be 7

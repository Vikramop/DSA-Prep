//So now to optimize the problem lets see the approach.

//[-5, -4, -3, -2, 0, 2, 4, 6, 8]

// now for this the array must be sorted so let's consder two value like pointer but they are not pointers
// one is left i.e. -5(or the first element)
//and another is right i.e. 8(or the last element)
//step1 now lets start adding the left and right pointer now in this case
// -5+8 is 3. now if it is more than zero then shift right pointer to left i.e. j--
// now lly check the next element and add it it will give -1 in the abv case.
// which is less than zero than stop the left pointer shifting.
// by the abv we can avoid the not required cases.
//now if it's less than zero then shift right pointer to left.

// and again start the same addition and shift and all that. i.e. step1 .

function Optimised(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    // now this condn will always be true as it is sorted array.
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = Optimised([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

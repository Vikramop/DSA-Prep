//Divide $ Conqurer Technique
//Find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,,8,9,10,11,12,13,14,15] => index 6 -> output i.e. 7
//for this array must be sorted so that it make 50% of problem
// in case of this the number we need to find is one less(in index)
// like if we need to find 6th number then it will be 7th index number as the indexing starts with 0.

// approach
//min=0 here element is 1 and idexing is 0
//max= array.length-1 and here element is 15 and idexing is 14
//first we need to find mid Index => midIndex= (min+max) /2 , (0+14)/2 => 7(index), and element is 8.
//if the element is less than the provided number => if array[minIndex] < number(7)
//then we need to make min as midIndex+1
//and if array[midindex] > number
//then we need to make max as midIndex-1, min=0, max=6 {1,2,3,4,5,6,7}
//now if both conditions fails then the midIndex is the number(answer).

// for our case (min+max)/2 => 3
// index+1 => 4(min), max=6 { 5,6,7}
//(5+7)/2 => 6(min), max=6
//(6+6)/2 => 6(index) now the 3rd case will run and o/p is given which is 7.

function BinarySearch(array, number) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    // let midIndex = (min+max)/2;  now this is correct but what if the number is odd the there will be 2 midIndex value so.
    let midIndex = Math.floor((min + max) / 2); // just to round off we are using math.floor.
    // console.log('midIndex' + midIndex + ' ' + 'min' + min + 'max' + max); // here's the logic
    if (array[midIndex] > number) {
      max = midIndex - 1;
    } else if (array[midIndex] < number) {
      min = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

const result = BinarySearch(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);
console.log(result);

//  Time Complexity binary O(log(n))

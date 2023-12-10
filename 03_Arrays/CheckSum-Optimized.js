//Cheking Square in another array
// arr1=[1,2,3,4], arr2=[1,2,4,16] - Case 1
// arr1=[1,2,4,2] , arr2=[1,4,16,4] - Case 2

//Conditions
// now let's do it for case 2
// let make a map for each array, i.e. map1={1:1, 2:2, 4:1}
// lly for                             map2={1:1, 4:2, 16:1}

// so the logic is like this: the key in map one shld be the square(key) in map2
// and the number of occurence must be same i.e the value must be same.

function checkSquareOptimized(array1, array2) {
  let map1 = {};
  let map2 = {};

  for (let items of array1) {
    map1[items] = (map1[items] || 0) + 1; //{ '1': 1, '2': 2, '4': 1 }
  }
  // console.log(map1);

  for (let items of array2) {
    map2[items] = (map2[items] || 0) + 1; //{ '1': 1, '4': 2, '16': 1 }
  }
  // console.log(map2);

  for (let key in map1) {
    if (!map2[key * key]) {
      //this checks if it has square .
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      // it compares the keys of both the array.
      return false;
    }
  }
  return true;
}

const result = checkSquareOptimized([1, 2, 4, 2], [1, 4, 16, 4]);
console.log(result);
// time complexity is o(n)

//Checking Square in another array
// arr1=[1,2,3,4] arr2=[1,16,9,4]
// so basically we need to check wheather the number in arr1 has a sqauare in arr2.
// sorting doesn't matter here.

//logic
//let isSquare = false; default
//if (array[i] * array[i] = array[j] ) then return isSquare to true.

function CheckSquare(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let isSquare = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        isSquare = true;
      }
      if (j === arr2.length - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
}

const result = CheckSquare([1, 2, 3, 4], [1, 16, 9, 4]);
console.log(result);

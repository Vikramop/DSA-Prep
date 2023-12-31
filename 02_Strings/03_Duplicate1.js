function findDuplicates(inputArray) {
  let duplicates = [];
  let seen = {};

  for (let i = 0; i < inputArray.length; i++) {
    let currentItem = inputArray[i];

    // Check if the current item is already in the 'seen' object
    if (!seen[currentItem]) {
      seen[currentItem] = 1;
    } else {
      // If it's already in the 'seen' object, it's a duplicate
      // Append the duplicate to the 'duplicates' array
      duplicates.push(currentItem);
    }
  }

  return duplicates;
}

const inputArray = [1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 7, 9, 9, 8];
const duplicateArray = findDuplicates(inputArray);

console.log('Duplicate numbers in the array:', duplicateArray);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

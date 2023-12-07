function anagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
    // console.log(counter[letter]);
  }

  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }
    counter[items] -= 1;
  }
  return true;
}

const res = anagram('hello', 'elloh');
console.log(res);

// and since we are not using nested loops so the time complexity will be linear =>o(n)

function anagram(s, t) {
  if (s.length !== t.length) return false;

  let map = {};
  for (let letter of s) {
    map[letter] = (map[letter] || 0) + 1;
    // console.log(map[letter]);
  }
  for (let item of t) {
    if (!map[item]) {
      console.log(map[item]);
      return false;
    }
    map[item] -= 1;
  }
  return true;
}

const res = anagram('hello', 'lloeh');
console.log('is anangram:', res);

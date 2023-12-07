//Anagram Problem
//'hello' -> 'llheo'  => This is a Anagram.
// 'hello' -> 'llloh' => This is not a Anagram.

//So the condition for anagram must be
//1) The length of both strings should be same.
//2) The arangement can differ but the words and the length must be same.

// let's see the logic.
//consider the first word make a map of all the chars with their n.o of apperences.
//{ h:1,e:1, l:2, o:1}
// now start checking the other word. as we pass the chars then decrement in the map.
//suppose 'h' is encountered then in map decrement the n.o of h value by 1.
//{ h:1,e:1, l:1, o:1} => "l"
//{ h:1,e:1, l:0, o:1} => "ll"
//{ h:0,e:1, l:0, o:1} => "llh"
//{ h:0,e:0, l:0, o:1} => "llhe"
//{ h:0,e:0, l:0, o:0} => "llheo"

// now for "llloh"
//{ h:1,e:1, l:2, o:1} => this will be the map
//{ h:1,e:1, l:1, o:1} => "l"
//{ h:1,e:0, l:0, o:1} => "ll"
//{ h:0,e:0, l:0, o:1} => "ll"
// now here it will break as l=0 and another l appeared in other word so it's not a Anagram.

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return true;
  }
  let counter = {}; //this is the map thing.
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1; //here store the number of letter appeared.
    // console.log(counter[letter]);
  }

  for (let item of string2) {
    if (!counter[item]) {
      //This is for if ther are 3l in other but only 2 in hello .
      //so in map the l value will be 0 so now no l will be there in counter so it'll retrun false.
      return false;
    }
    counter[item] -= 1;
  }
  return true;
}

const result = isAnagram('hello', 'lleho');
console.log(result);

//Palindrome
//An integer is a palindrome when it reads the same forward and backward.

// Input: x =121 ---->> is anangram- true
// Input: x =10  ---->> is anangram- false

function palindrome(x) {
  return x < 0 ? false : x === +x.toString().split('').reverse().join('');
}

const res = palindrome(12);
console.log(res);

// 121 => "121" -> ['1','2','1'] -> ['1','2','1'] ->"121"

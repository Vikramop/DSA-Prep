function Reverse(a) {
  if (a == 0) return 0;

  const rev = [];
  for (var i = a.length - 1; i >= 0; i--) {
    rev.push(a[i]);
  }
  return rev;
}

const res = Reverse([33, 44, 55, 66]);
console.log(res);

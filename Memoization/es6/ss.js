let sum = 0;

const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (func) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };
};

const efficient = memoize(calc);

console.time();
console.log(efficient(5));
console.timeEnd();
console.time();
console.log(efficient(5));
console.timeEnd();

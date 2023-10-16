// Memoization is an optimization technique that can be used to reduce time-consuming
// calculations by saving prev i/p in cache and returning the result from that.

let sum = 0;

const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = (fun) => {
  let cache = {}; // here closure takes place as the cache can access the inner function
  return function (...args) {
    let n = args[0]; // so let's take out the n and put it in 1st pos of args
    if (n in cache) {
      console.log('from cache');
      return cache[n];
    } else {
      console.log('first time...');
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

// we created here a memoize() which itself recieves as a callback fn i.e. memoise is a callback function, then we have created a chache object to store the prev calculated value so that if it is called it do not have to compute again and again, check's in the object if found it'll send it back.
// now further the memoize() will returns a function take args(rest operator) we calc from o index and store it in n then check if it exists in cache then return it else calulate it and store it in cache and returns the result not the cache value.

const eff = memoize(calc);

console.time();
console.log(eff(5));
console.timeEnd(); //11.367ms

console.time();
console.log(eff(5));
console.timeEnd(); // .552ms

console.time();
console.log(eff(5));
console.timeEnd(); //.519ms

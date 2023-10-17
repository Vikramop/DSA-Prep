// Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page that requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single-threaded language.

// SO we use the setTimeout function to optimized it and since it's a browser function not a js function.

let counter = 0;

function getData() {
  console.log('called', counter++);
}

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    setTimeout(() => {
      call();
    }, d);
  };
}

const betterFunction = myDebounce(getData, 1000);

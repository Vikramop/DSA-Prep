/**  Topic - Queues

Works on FIFO method.

The below are the functions that are performed in queues.

1) enqueue()
This function is used to add an element at the end of a queue. If the queue is full, then it is not said to be an Overflow condition cuz the array in the js is not static or fixed thats why there is no concept of overflow condition like cpp or java.

2) dequeue()
 This function is used to remove an element at the beginning of a queue.if the queue is full, then it is said to be an underflow condition.

 3) peek()
  This function is used to peek the element at the beginning of a queue.

  4) isEmpty()
  This function is used to check if the queue is empty or not.

  5) size()
  This function returns the number of elements present inside the queue.

                           BASIC QUEUE IMPLEMENTATION

    CLASS -  class are the templete for creating objects in javascript.

    constructor -  constructor function are function responsible for initializing the variable inside a class . now in below ex the items becoms the property of this queue class. so that we can call it by queue.items or when we create an obj from a class then we will call it like obj.items .

  */

/*
// creating a class with constuctor.
class Queue {
  constructor() {
    this.items = [];
  }

  //enqueue
  enqueue(element) {
    this.items.push(element);
  }

  //dequeue
  dequeue() {
    if (this.isEmpty()) {
      return 'underflow';
    }
    return this.shift(); //to remove elements from an array.
  }

  isEmpty() {
    return this.items.length === 0;
  }

  //peek
  front() {
    if (this.isEmpty()) {
      return 'no elements';
    }
    return this.items[0];
  }
}
*/

String.prototype.giveLydiaPizza = () => {
  return 'just give Lydia pi';
};

const name = 'lydia';
const ab = name.giveLydiaPizza();

console.log(ab);

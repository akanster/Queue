/** A queue Implementation in JavaScript. */
class Queue {
  constructor() {
    /** Array to hold queue items. */
    this.list = [];

    /** Number of items in the queue. */
    this.queueCount = 0;
  }

  /**
   * Remove the first item in the queue.
   * @return Item that was removed.
   */
  dequeue() {
    /* Queue is empty, exit. */
    if (this.queueCount == 0) return console.log(`Queue is empty.`);

    /* Remove first item from the internal array, decrease queue count by one,
       and return the item. */
    const firstItem = this.list[0];
    this.list.splice(0, 1);
    this.queueCount -= 1;
    console.log(`${firstItem} removed from queue.`);
    return firstItem;
  }

  /**
   * Add an item to the queue.
   * @param New item to add.
   */
  enqueue(newItem) {
    /* Nothing to enqueue, exit. */
    if (!newItem) {
      return console.log(`Nothing to enqueue.`);
    }

    /* Add item to the end of the queue. */
    this.list[this.queueCount] = newItem;
    this.queueCount += 1;
    console.log(`${newItem} added to queue.`);
  }

  /**
   * Returns true if queue is empty, false otherwise.
   * @param {Boolean} Indication queue is empty.
   */
  isEmpty() {
    return this.queueCount == 0;
  }

  /**
   * Return a copy of the first item in the queue.
   * @return Item.
   */
  peek() {
    /* Queue is empty, nothing to see. */
    if (this.queueCount == 0) return `The queue is empty.`;

    /* Return a copy of the first item in the queue. */
    console.log(`Top of queue: ${this.list[0]}`);
    return this.list[0];
  }

  /**
   * Returns the number of items in the queue.
   * @return {Number} Queue total count.
   */
  size() {
    console.log(`Queue has ${this.queueCount} items.`);
    return this.queueCount;
  }

  /**
   * Print items in the queue vertically, with the first at the bottom.
   */
  view() {
    /* Display all items in internal array from the end. */
    console.log(`\nQueue`);
    console.log(`-----`);
    for (let i = this.queueCount; i > 0; i--) {
      console.log(this.list[i - 1]);
    }
    console.log(`-----\n`);
  }
}

/* Testing */
const queue = new Queue();
queue.view();
console.log(`Queue is empty? ${queue.isEmpty()}`);
queue.enqueue(`ferret`);
queue.enqueue(`goldfish`);
queue.enqueue(`dog`);
queue.size();
queue.enqueue(`lizard`);
queue.enqueue(`hamster`);
queue.size();
queue.view();
queue.dequeue();
queue.dequeue();
queue.size();
queue.view();
queue.peek();
queue.view();
console.log(`Queue is empty? ${queue.isEmpty()}`);

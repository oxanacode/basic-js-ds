const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if(!this.node) {
      this.node = newNode;
    } else {
      let node = this.node;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
  }

  dequeue() {
    const value = this.node.value;
    this.node = this.node.next;
    return value;
  }
}

module.exports = {
  Queue
};

/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLLNode {
  /**
   * Executed when the new keyword is used to construct a new node instance.
   * @param {any} data The data the new node will store.
   */
  constructor(data) {
    this.data = data;
    /**
     * By default a new node instance will not be connected to any other nodes,
     * these properties will be set after instantiation to connect the node to
     * a list. However, the head prev should remain null.
     *
     * @type {DLLNode|null}
     */
    this.prev = null;
    /** @type {DLLNode|null} */
    this.next = null;
  }
}
//!====================== 8/17/23 ========================
/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    // TODO: implement the constructor.
    this.head = null;
    this.tail = null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    const newHead = new DLLNode(data);

    if (this.isEmpty()) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      const oldHead = this.head;
      oldHead.prev = newHead;
      newHead.next = oldHead;

      this.head = newHead;
    }
    return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {
    let newNode = new DLLNode(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    let newTail = newNode;
    this.tail.next = newTail;
    newTail.prev = this.tail;
    this.tail = newTail;
    return this;
  }


  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {
    if (this.isEmpty()) return null
    let length = 0, runner = this.head;
    while (runner != null) {
        length++;
        runner = runner.next;
    }
    // if length of list is even, no middle
    // console.log(`Length: ${length}`);
    if (length % 2 == 0 || length == 1) {
        return null
    }
    runner = this.head;
    let stop = Math.floor(length/2);
    length = 0;
    // console.log(`stop: ${stop}`);
    while (length < stop - 1){
      length++;
      runner = runner.next;
      // console.log(runner.data);
    }
    let result = runner.next.data;
    runner.next = runner.next.next;
    return result;
  }
  
  //! ===========================================================

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}

const emptyList = new DoublyLinkedList();

const triNodeList = new DoublyLinkedList()
  .insertAtFront(1)
  .insertAtFront(2)
  .insertAtFront(3)
  .insertAtFront(4)
  .insertAtFront(5);
console.log(" ==================== INSERT AT FRONT TEST ====================");
console.log(triNodeList.toArray());

const triNodeList2 = new DoublyLinkedList()
  .insertAtBack(1)
  .insertAtBack(2)
  .insertAtBack(3)
  .insertAtBack(4)
  .insertAtBack(5);
console.log(" ==================== INSERT AT BACK TEST ====================");
console.log(triNodeList2.toArray());

const triNodeList3 = new DoublyLinkedList()
  .insertAtBack(1)
  .insertAtBack(2)
  .insertAtBack(3)
  .insertAtBack(4)
  .insertAtBack(5);
console.log(" ================= Removed Middle Node TEST ==================");
console.log("before:");
console.log(triNodeList3.toArray());
console.log(triNodeList3.removeMiddleNode());
console.log("after:");
console.log(triNodeList3.toArray());

/**************** Uncomment these test lists after insertAtBack is created. ****************/
// const singleNodeList = new DoublyLinkedList().insertAtBack(1);
// const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
// const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new DoublyLinkedList().insertAtBackMany([
//   -5,
//   -10,
//   4,
//   -3,
//   6,
//   1,
//   -7,
//   -2,
// ]);

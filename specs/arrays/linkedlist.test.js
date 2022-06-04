/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
                      
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  push(val) {
    const n = new Node(val);

    if (!this.head) {
      this.head = n;
    } else {
      let currNode = this.head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = n;
    }

    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      const n = this.head;
      this.head = null;
      this.length--;

      return n.value;
    }

    let currNode = this.head,
      nextNode = this.head.next;

    while (nextNode.next) {
      currNode = nextNode;
      nextNode = nextNode.next;
    }

    currNode.next = null;
    this.length--;

    return nextNode.value;
  }

  get(index) {
    let currNode = this.head;

    for (let i = 1; currNode !== null && i <= index; i++) {
      currNode = currNode.next;
    }

    return currNode.value;
  }

  delete(index) {
    if (this.length === 0) {
      return null;
    }

    if (index === 0) {
      const val = this.head.value;
      this.head = this.head.next;
      this.length--;
      return val;
    }

    let currNode = this.head.next,
      prevNode = this.head,
      i = 1;

    while (currNode && i !== index) {
      prevNode = currNode;
      currNode = currNode.next;
      i++;
    }

    if (currNode) {
      prevNode.next = currNode.next;
      this.length--;
      return currNode.val;
    }

    return null;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// unit tests
// do not modify the below code
describe("LinkedList", function () {
  const range = (length) =>
    Array.apply(null, { length: length }).map(Number.call, Number);
  const abcRange = (length) =>
    range(length).map((num) => String.fromCharCode(97 + num));
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("constructor", () => {
    expect(list).toEqual(expect.any(LinkedList));
  });

  test("push", () => {
    abcRange(26).map((character) => list.push(character));
    expect(list.length).toEqual(26);
  });

  test("pop", () => {
    abcRange(13).map((character) => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual("c");
  });

  test("get", () => {
    list.push("first");
    expect(list.get(0)).toEqual("first");
    list.push("second");
    expect(list.get(1)).toEqual("second");
    expect(list.get(0)).toEqual("first");
    abcRange(26).map((character) => list.push(character));
    expect(list.get(27)).toEqual("z");
    expect(list.get(0)).toEqual("first");
    expect(list.get(9)).toEqual("h");
    list.pop();
    expect(list.get(list.length - 1)).toEqual("y");
  });

  test("delete", () => {
    abcRange(26).map((character) => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual("m");
    expect(list.get(13)).toEqual("o");
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual("b");
  });
});

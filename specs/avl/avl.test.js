/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value

*/

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }

  toObject() {
    return this.root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;

    this.height = 0;
  }

  add(value) {
    if (value < this.value) {
      if (this.left == null) {
        this.left = new Node(value);
      } else {
        this.left.add(value);
      }
    } else {
      if (this.right == null) {
        this.right = new Node(value);
      } else {
        this.right.add(value);
      }
    }

    this._balance();
  }

  getHeight() {
    if (!this.left && !this.right) return 0;

    const leftHeight = this.left ? this.left.getHeight() : -1;
    const rightHeight = this.right ? this.right.getHeight() : -1;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  _balance() {
    const leftHeight = this.left ? this.left.getHeight() : -1;
    const rightHeight = this.right ? this.right.getHeight() : -1;

    if (leftHeight - rightHeight >= 2) {
      const leftLeftHeight = this.left.left ? this.left.left.getHeight() : -1;
      const leftRightHeight = this.left.right
        ? this.left.right.getHeight()
        : -1;

      if (leftLeftHeight > leftRightHeight) {
        this._rightRotate();
      } else {
        this.left._leftRotate();
        this._rightRotate();
      }
    } else if (rightHeight - leftHeight >= 2) {
      const rightLeftHeight = this.right.left
        ? this.right.left.getHeight()
        : -1;
      const rightRightHeight = this.right.right
        ? this.right.right.getHeight()
        : -1;

      if (rightRightHeight > rightLeftHeight) {
        this._leftRotate();
      } else {
        this.right._rightRotate();
        this._leftRotate();
      }
    }
  }

  _leftRotate() {
    const newRight = this.right.right;

    const newLeft = new Node(this.value);
    newLeft.left = this.left;
    newLeft.right = this.right.left;

    this.value = this.right.value;
    this.left = newLeft;
    this.right = newRight;
  }

  _rightRotate() {
    const newRight = new Node(this.value);
    newRight.left = this.left.right;
    newRight.right = this.right;

    const newLeft = this.left.left;

    this.value = this.left.value;
    this.left = newLeft;
    this.right = newRight;
  }
}

// unit tests
// do not modify the below code
describe("AVL Tree", function () {
  test("creates a correct tree", () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    const objs = tree.toObject();

    expect(objs.value).toEqual(4);

    expect(objs.left.value).toEqual(2);

    expect(objs.left.left.value).toEqual(1);
    expect(objs.left.left.left).toBeNull();
    expect(objs.left.left.right).toBeNull();

    expect(objs.left.right.value).toEqual(3);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(6);
    expect(objs.right.left.right).toBeNull();

    expect(objs.right.left.left.value).toEqual(5);
    expect(objs.right.left.left.left).toBeNull();
    expect(objs.right.left.left.right).toBeNull();

    expect(objs.right.right.value).toEqual(9);

    expect(objs.right.right.left.value).toEqual(8);
    expect(objs.right.right.left.left).toBeNull();
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.right.value).toEqual(10);
    expect(objs.right.right.right.left).toBeNull();
    expect(objs.right.right.right.right).toBeNull();
  });
});

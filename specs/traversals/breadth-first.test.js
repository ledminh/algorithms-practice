const breadthFirstTraverse = (queue, array) => {
  // while (queue.length !== 0) {
  //   const elem = queue.shift();
  //   array.push(elem.value);
  //   if (elem.left) queue.push(elem.left);
  //   if (elem.right) queue.push(elem.right);
  // }
  // return array;

  const elem = queue.shift();
  array.push(elem.value);

  if (elem.left) queue.push(elem.left);
  if (elem.right) queue.push(elem.right);

  if (queue.length !== 0) breadthFirstTraverse(queue, array);

  return array;
};

// unit tests
// do not modify the below code
describe("breadth-first tree traversal", function () {
  const answer = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

  const tree = {
    value: "A",
    left: {
      value: "B",
      left: {
        value: "D",
        left: {
          value: "G",
          left: null,
          right: null
        },
        right: null
      },
      right: {
        value: "E",
        left: null,
        right: {
          value: "H",
          left: {
            value: "K",
            left: null,
            right: null
          }
        }
      }
    },
    right: {
      value: "C",
      left: {
        value: "F",
        left: {
          value: "I",
          left: null,
          right: null
        },
        right: {
          value: "J",
          left: null,
          right: null
        }
      },
      right: null
    }
  };

  test("breadthFirstTraverse", () => {
    expect(breadthFirstTraverse([tree], [])).toEqual(answer);
  });
});

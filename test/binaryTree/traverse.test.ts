import { Node } from '@/binaryTree/binaryTree';
import { preOrderRecursion, preOrderTraverse } from '@/binaryTree/pre-order';
import { inOrderRecursion, inOrderTraverse } from '@/binaryTree/in-order';
import { postOrderRecursion, postOrderTraverse } from '@/binaryTree/post-order';
import { getMaxWidth } from '@/binaryTree/width';
import { bfs } from '@/binaryTree/bfs';

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

describe("Pre-order traverse", () => {
  it("recursion", () => {
    expect(preOrderRecursion(root).join(' ')).toEqual('1 2 4 5 3 6 7');
  });
  it("No recursion", () => {
    expect(preOrderTraverse(root).join(' ')).toEqual('1 2 4 5 3 6 7');
  });
});

describe("In-order traverse", () => {
  it("recursion", () => {
    expect(inOrderRecursion(root).join(' ')).toEqual('4 2 5 1 6 3 7');
  });
  it("No recursion", () => {
    expect(inOrderTraverse(root).join(' ')).toEqual('4 2 5 1 6 3 7');
  });
});

describe("Post-order traverse", () => {
  it("recursion", () => {
    expect(postOrderRecursion(root).join(' ')).toEqual('4 5 2 6 7 3 1');
  });
  it("No recursion", () => {
    expect(postOrderTraverse(root).join(' ')).toEqual('4 5 2 6 7 3 1');
  });
});

describe("Breadth-First traverse", () => {
  it("No recursion", () => {
    expect(bfs(root).join(' ')).toEqual('1 2 3 4 5 6 7');
  });

  const head = new Node(1);
  head.left = new Node(2);
  head.right = new Node(3);
  head.right.left = new Node(6);
  it("Max width", () => {
    expect(getMaxWidth(head)).toEqual(2);
  });
});
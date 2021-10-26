import { Node } from '@/binaryTree/binaryTree';
import { preOrderRecursion } from '@/binaryTree/pre-order';
import { inOrderRecursion } from '@/binaryTree/in-order';
import { postOrderRecursion } from '@/binaryTree/post-order';

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
});

describe("In-order traverse", () => {
  it("recursion", () => {
    expect(inOrderRecursion(root).join(' ')).toEqual('4 2 5 1 6 3 7');
  });
});

describe("Post-order traverse", () => {
  it("recursion", () => {
    expect(postOrderRecursion(root).join(' ')).toEqual('4 5 2 6 7 3 1');
  });
});
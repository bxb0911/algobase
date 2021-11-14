import { Node } from "@/binaryTree/binaryTree";
import { isBST } from "@/binaryTree/isBST";
import { isFull } from "@/binaryTree/isFull";
import { isBalanced } from "@/binaryTree/isBalanced";
import { isComplete } from "@/binaryTree/isComplete";

const root = new Node(6);
root.left = new Node(4);
root.right = new Node(8);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.left = new Node(7);
root.right.right = new Node(9);

describe("Is xxx binary tree", () => {
  it("is bst", () => {
    expect(isBST(root)).toEqual(true);
  });

  it("not a bst", () => {
    root && root.left && (root.left.left = new Node(10));
    expect(isBST(root)).toEqual(false);
  });

  it("is full", () => {
    expect(isFull(root)).toEqual(true);
  });

  it("not full", () => {
    root && root.left && (root.left.left = null);
    expect(isFull(root)).toEqual(false);
  });

  it("is balanced", () => {
    expect(isBalanced(root)).toEqual(true);
  });

  it("not a balanced tree", () => {
    root && root.left && (root.left.left = new Node(2));
    root && root.left && root.left.left && (root.left.left.left = new Node(3));
    root && root.left && (root.left.right = null);
    expect(isBalanced(root)).toEqual(false);
  });

  it("is completed", () => {
    const head = new Node(0);
    head.left = new Node(1);
    head.right = new Node(2);
    head.left.left = new Node(3);
    expect(isComplete(head)).toEqual(true);
  });

  it("not a completed tree", () => {
    const head = new Node(0);
    head.left = new Node(1);
    head.right = new Node(2);
    head.left.left = new Node(3);
    head.left.left.left = new Node(4);
    expect(isComplete(head)).toEqual(false);
  });
});

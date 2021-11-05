import { Node } from "@/binaryTree/binaryTree";
import { isBST } from "@/binaryTree/isBST";

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
});
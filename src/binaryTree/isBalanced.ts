import { Node } from "./binaryTree";

type Info = {
  isBalanced: boolean;
  height: number;
};

export function isBalanced(head: Node): boolean {
  const { isBalanced } = process(head);
  return isBalanced;
}

function process(head: Node | null): Info {
  if (head === null) {
    return {
      isBalanced: true,
      height: 0,
    };
  }
  let leftInfo = process(head.left),
    rightInfo = process(head.right);

  return {
    isBalanced:
      leftInfo.isBalanced &&
      rightInfo.isBalanced &&
      Math.abs(leftInfo.height - rightInfo.height) < 2,
    height: Math.max(leftInfo.height, rightInfo.height) + 1,
  };
}

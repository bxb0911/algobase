import { Node } from "./binaryTree";

type Info = {
  isBST: boolean;
  max: any;
  min: any;
};

/**
 * 是否是搜索二叉树
 * 方法一：中序遍历结果是从小到大
 * 方法二：二叉树的递归套路 ✅
 * @param head
 * @returns
 */
export function isBST(head: Node): boolean {
  const info = process(head);
  return info ? info.isBST : true;
}

/**
 * 递归函数
 * 1. 左树是BST
 * 2. 右树是BST
 * 3. 左树max < cur < 右树min
 * @param head
 */
function process(head: Node | null): Info | null {
  if (head === null) {
    return null;
  }
  let leftInfo = process(head.left);
  let rightInfo = process(head.right);
  let min = head.value,
    max = head.value;
  let isBST = false;
  if (leftInfo !== null) {
    min = Math.min(min, leftInfo.min);
    max = Math.max(max, leftInfo.max);
  }
  if (rightInfo !== null) {
    min = Math.min(min, rightInfo.min);
    max = Math.max(max, rightInfo.max);
  }
  if (
    (leftInfo !== null ? leftInfo.isBST && leftInfo.max < head.value : true) &&
    (rightInfo !== null ? rightInfo.isBST && rightInfo.min > head.value : true)
  ) {
    isBST = true;
  }
  return {
    isBST,
    max,
    min,
  };
}

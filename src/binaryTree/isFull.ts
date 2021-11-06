import { Node } from "./binaryTree";

type Info = {
  nodeCount: number;
  height: number;
  isFull: boolean;
};

/**
 * 是否是满二叉树
 * 方法一：计算出节点个数n及层高h，判断是否符合 2 ^ h - 1 == n
 * 方法二：二叉树的递归套路 ✅
 * @param head
 * @returns
 */
export function isFull(head: Node | null): boolean {
  const info = process(head);
  return info ? info.isFull : true;
}

/**
 * 递归函数
 * 1. 左子树是满二叉树
 * 2. 右子树是满二叉树
 * 3. 左子树
 * @param head
 * @returns
 */
function process(head: Node | null): Info | null {
  if (head === null) {
    return null;
  }
  let nodeCount = 1,
    height = 1,
    isFull = false;
  let leftInfo = process(head.left);
  let rightInfo = process(head.right);
  if (leftInfo !== null) {
    nodeCount += leftInfo.nodeCount;
    height = leftInfo.height + 1;
  }
  if (rightInfo !== null) {
    nodeCount += rightInfo.nodeCount;
    height = rightInfo.height + 1;
  }
  if (
    (leftInfo !== null ? leftInfo.isFull : true) &&
    (rightInfo !== null ? rightInfo.isFull : true) &&
    nodeCount === Math.pow(2, height) - 1
  ) {
    isFull = true;
  }
  return {
    nodeCount,
    height,
    isFull,
  };
}

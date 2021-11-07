import { Node } from "./binaryTree";

type Info = {
  nodeCount: number;
  height: number;
};

/**
 * 是否是满二叉树
 * 方法一：计算出节点个数n及层高h，判断是否符合 2 ^ h - 1 == n
 * 方法二：二叉树的递归套路 ✅
 * @param head
 * @returns
 */
export function isFull(head: Node | null): boolean {
  const { nodeCount, height } = process(head);
  return (1 << height) - 1 === nodeCount;
}

/**
 * 递归函数
 * 返回节点个数及层高
 * @param head
 * @returns
 */
function process(head: Node | null): Info {
  if (head === null) {
    return { nodeCount: 0, height: 0 };
  }
  let leftInfo = process(head.left),
    rightInfo = process(head.right);
  return {
    nodeCount: leftInfo.nodeCount + rightInfo.nodeCount + 1,
    height: Math.max(leftInfo.height, rightInfo.height) + 1,
  };
}

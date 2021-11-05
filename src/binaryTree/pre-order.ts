import { Node } from './binaryTree';

/**
 * 前序遍历（递归版）
 * @param root 
 * @returns
 */
export function preOrderRecursion(root: Node | null, res: any[] = []): any[] {
  let cur = root;
  if (cur === null) {
    return res;
  }
  res.push(cur.value);
  res = preOrderRecursion(cur.left, res);
  res = preOrderRecursion(cur.right, res);
  return res;
}

/**
 * 前序遍历（非递归版）
 * @param root 
 * @returns 
 */
export function preOrderTraverse(root: Node): any[] {
  let stack: Node[] = [root], result = []; // unshift pop
  while(stack.length > 0) {
    let cur: Node = stack.pop() as Node;
    result.push(cur.value);
    cur.right !== null && stack.push(cur.right);
    cur.left !== null && stack.push(cur.left);
  }
  return result;
}

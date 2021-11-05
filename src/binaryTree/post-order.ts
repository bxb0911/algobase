import { Node } from './binaryTree';

/**
 * 后序遍历（递归版）
 * @param root 
 */
export function postOrderRecursion(root: Node | null, res: any[] = []): any[] {
  let cur = root;
  if (cur === null) {
    return res;
  }
  res = postOrderRecursion(cur.left, res);
  res = postOrderRecursion(cur.right, res);
  res.push(cur.value);
  return res;
}

/**
 * 后序遍历（非递归版）
 * @param root 
 * @returns 
 */
 export function postOrderTraverse(root: Node): any[] {
  let stack: Node[] = [root], result = []; // unshift pop
  while(stack.length > 0) {
    let cur: Node = stack.pop() as Node;
    cur.left !== null && stack.push(cur.left);
    cur.right !== null && stack.push(cur.right);
    result.push(cur.value);
  }
  return result.reverse();
}

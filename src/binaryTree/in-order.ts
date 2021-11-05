import { Node } from './binaryTree';

/**
 * 中序遍历（递归版）
 * @param root 
 */
export function inOrderRecursion(root: Node | null, res: any[] = []): any[] {
  let cur = root;
  if (cur === null) {
    return res;
  }
  res = inOrderRecursion(cur.left, res);
  res.push(cur.value);
  res = inOrderRecursion(cur.right, res);
  return res;
}

/**
 * 中序遍历（非递归版）
 * @param root 
 */
export function inOrderTraverse(root: Node | null) {
  let stack: Node[] = [], result: Node[] = [];
  while(stack.length > 0 || root !== null) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop() as Node;
      result.push(root.value);
      root = root.right;
    }
  }
  return result;
}
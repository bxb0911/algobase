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

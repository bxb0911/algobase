class Node {
  public value: any;
  public left: Node | null;
  public right: Node | null;
  public parent: Node | null;
  constructor(val: any) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

/**
 * 找后继节点
 * 方法一：中序遍历中该节点的下一个节点
 * 方法二：有右子树，右子树的最左节点；没有右子树，往上找到子是父的左子树的情况，该父节点就是后继节点
 * @param n 
 * @returns 
 */
export function getSuccessor(n: Node): Node | null {
  if (n.right !== null) {
    let cur: Node | null = n.right;
    cur = cur.left
    while (cur !== null) {
      cur = cur.left;
    }
    return cur;
  } else {
    let parent = n.parent;
    while (parent !== null && parent.left !== n) {
      n = parent;
      parent = n.parent;
    }
    return parent;
  }
}
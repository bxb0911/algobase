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
 * 获取前驱节点
 * 方法一：中序遍历找当前节点前一个
 * 方法二：有左子树，取左子树最左节点；没有左子树，往上找直到子是父的右子树，取当前父节点
 */
export function getPrecursor(n: Node): Node | null {
  if (n.left !== null) {
    let cur: Node | null = n.left;
    cur = cur.right;
    while (cur !== null) {
      cur = cur.right;
    }
    return cur;
  } else {
    let parent = n.parent;
    while (parent !== null && parent.right !== n) {
      n = parent;
      parent = n.parent;
    }
    return parent;
  }
}
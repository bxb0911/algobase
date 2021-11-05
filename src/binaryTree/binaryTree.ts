/**
 * 二叉树节点
 */
export class Node {
  public value: any;
  public left: Node | null;
  public right: Node | null;
  constructor(val: any) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

function getSpace(num: number) {
  let space = ' ', str = ''
  for(let i = 0; i< num;i++) {
    str += space;
  }
  return str;
}

/**
 * 二叉树结构输出
 * @param head 节点
 * @param height 节点所在层
 * @param to 节点标识
 * @param len 间隔
 */
export function printTree(head: Node | null, height: number, to: string, len: number) {
  if (head === null) {
    return;
  }
  printTree(head.right, height + 1, "v", len);
  let val = to + head.value + to;
  let lenM = val.length;
  let lenL = (len - lenM) / 2;
  let lenR = len - lenM - lenL;
  val = getSpace(lenL) + val + getSpace(lenR);
  console.log(getSpace(height * len) + val);
  printTree(head.left, height + 1, "^", len);
}

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);
// root.left.left.left = new Node(8);
// root.left.left.right = new Node(9);
// root.left.right.left = new Node(10);
// root.left.right.right = new Node(11);
// root.right.left.left = new Node(12);
// root.right.left.right = new Node(13);
// root.right.right.left = new Node(14);
// root.right.right.right = new Node(15);
// printTree(root, 0, "H", 12);
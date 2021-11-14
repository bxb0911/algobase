import { Node } from "./binaryTree";

/* --------------------------------------------------------------------------------- */
/* 序列化用处：用来比对一个二叉树是否是另一个二叉树的子树（比较两二叉树序列化之后的字符串是否有重叠）*/
/* --------------------------------------------------------------------------------- */
/**
 * 二叉树序列化（先序方式）
 * \# —— null  _ —— 分隔符
 * @param head
 */
export function serialization(head: Node | null): string {
  if (head === null) {
    return "#_";
  }
  let str = head.value + "_";
  str += serialization(head.left);
  str += serialization(head.right);
  return str;
}

/**
 * 二叉树反序列化（先序方式）
 * \# —— null  _ —— 分隔符
 * @param str
 * @returns
 */
export function deserialization(str: string): Node | null {
  let strList = str.split("_").slice(0, -1);
  return process(strList);
}

function process(q: string[]): Node | null {
  let cur = q.shift() as Node | "#";
  if (cur === "#") {
    return null;
  }
  let head = new Node(cur.value);
  head.left = process(q);
  head.right = process(q);
  return head;
}

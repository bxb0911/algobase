import { Node } from "./binaryTree";

export function isComplete(head: Node): boolean {
  const queue = [];
  queue.push(head);
  let leaf = false;
  while (queue.length > 0) {
    const cur: Node = queue.shift() as Node;
    if ((leaf && (cur.left !== null || cur.right !== null)) || (cur.right !== null && cur.left === null)) {
      return false
    }
    if (cur.left !== null) {
      queue.push(cur.left);
    }
    if (cur.right !== null) {
      queue.push(cur.right);
    }
    if (cur.left === null || cur.right === null) {
      leaf = true;
    }
  }
  return true;
}
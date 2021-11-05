import { Node } from "./binaryTree";

/**
 * 宽度优先遍历
 * @param head
 * @returns 
 */
export function bfs(head: Node): Node[] {
  let queue = [], result = [];
  if (head !== null) {
    queue.push(head);
  }
  while(queue.length > 0) {
    result.push((queue.shift() as Node).value);
    head.left !== null && queue.push(head.left);
    head.right !== null && queue.push(head.right);
    head = queue[0];
  }
  return result;
}
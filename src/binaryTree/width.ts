import { Node } from './binaryTree';

export function getMaxWidth(head: Node) {
  let queue = [];
  queue.push(head);
  let levelMap = new Map();
  levelMap.set(head, 1);
  let maxWidth = Number.MIN_VALUE, curWidth = 0, curLevel = 1;
  while(queue.length > 0) {
    let node: Node = queue.shift() as Node;
    let curNodeLevel = levelMap.get(node);
    if (curNodeLevel === curLevel) {
      curWidth++;
    } else {
      maxWidth = Math.max(maxWidth, curWidth);
      curLevel++;
      curWidth = 1;
    }
    if (node.left !== null) {
      levelMap.set(node.left, curNodeLevel + 1);
      queue.push(node.left);
    }
    if (node.right !== null) {
      levelMap.set(node.right, curNodeLevel + 1);
      queue.push(node.right);
    }
  }
  return maxWidth;
}
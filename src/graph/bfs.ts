import { Node } from './graph';

/**
 * 宽度优先遍历
 * @param n 
 */
export function bfs(n: Node) {
  const queue = [], set = new Set();
  queue.push(n);
  set.add(n);
  while(queue.length > 0) {
    let cur = queue.shift() as Node;
    console.log(cur.value);
    for(let i = 0, len = cur.nexts.length; i < len; i++) {
      if (!set.has(cur.nexts[i])) {
        set.add(cur.nexts[i]);
        queue.push(cur.nexts[i]);
      }
    }
  }
}
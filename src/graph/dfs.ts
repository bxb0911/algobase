import { Node } from './graph';

/**
 * 深度优先遍历
 * @param n 
 */
export function dfs(n: Node) {
  const stack = [], set = new Set();
  stack.push(n);
  set.add(n);
  console.log(n.value);
  while (stack.length > 0) {
    let cur = stack.pop() as Node;
    for (let i = 0, len = cur.nexts.length; i < len; i++) {
      if (!set.has(cur.nexts[i])) {
        set.add(cur.nexts[i]);
        stack.push(cur, cur.nexts[i]);
        console.log(cur.nexts[i].value);
        break;
      }
    }
  }
}
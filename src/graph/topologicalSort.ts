import { Graph, Node } from "./graph";

/**
 * 拓扑排序（依赖收集方法）
 * @param g 
 * @returns 
 */
export function topologicalSort(g: Graph): Node[] {
  const queue = [], result = [], map: Map<Node, number> = new Map();
  for (let node of g.nodes.values()) {
    map.set(node, node.in);
    node.in === 0 && queue.push(node);
  }
  while (queue.length > 0) {
    let cur = queue.shift() as Node;
    result.push(cur);
    cur.nexts.forEach(n => {
      map.set(n, (map.get(n) as number) - 1);
      map.get(n) === 0 && queue.push(n);
    });
  }
  return result;
}
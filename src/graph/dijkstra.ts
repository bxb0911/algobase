import { Node } from "./graph";

// 最短路径
// 要求：无权重为负值的边
export function dijkstra(n: Node): Map<Node, number> {
  const map: Map<Node, number> = new Map(), set: Set<Node> = new Set();
  map.set(n, 0);
  let minNode = getUnselectedMinNode(map, set);
  while (minNode !== null) {
    let base = map.get(minNode) as number;
    for (let edge of minNode.edges) {
      if (map.has(edge.to)) {
        map.set(edge.to, base + Math.min(map.get(edge.to) as number, edge.weight));
      } else {
        map.set(edge.to, base + edge.weight);
      }
    }
    set.add(minNode);
    minNode = getUnselectedMinNode(map, set);
  }
  return map;
}

function getUnselectedMinNode(map: Map<Node, number>, set: Set<Node>) {
  let minNode = null, minValue = Number.MAX_VALUE;
  for (let [n, v] of map) {
    if (!set.has(n) && v < minValue) {
      minValue = v;
      minNode = n;
    }
  }
  return minNode;
}

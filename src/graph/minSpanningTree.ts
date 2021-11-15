import { Graph, Node, Edge } from "./graph";

/**
 * 最小生成树算法（权重值之和最小的生成树）
 * 要求无向图
 * K算法 & P算法
 */
function collections(g: Graph): Map<Node, Node[]> {
  const collections: Map<Node, Node[]> = new Map();
  for (let node of g.nodes.values()) {
    collections.set(node, [node]);
  }
  return collections;
}

function merge(x: Node, y: Node, clts: Map<Node, Node[]>): Map<Node, Node[]> {
  const union = [...(clts.get(x) as Node[]), ...(clts.get(y) as Node[])];
  clts.set(x, union);
  clts.set(y, union);
  return clts;
}

export function kruskal(g: Graph): Set<Edge> {
  const result: Set<Edge> = new Set();
  let clts = collections(g),
    edges = Array.from(g.edges).sort((x, y) => x.weight - y.weight);
  for (let edge of edges) {
    if (edge.from !== edge.to) {
      clts = merge(edge.from, edge.to, clts);
      result.add(edge);
    }
  }
  return result;
}

export function prim(g: Graph): Set<Edge> {
  const result: Set<Edge> = new Set(),
    nodes: Set<Node> = new Set();
  let queue: Edge[] = [],
    node = Array.from(g.nodes.values())[0];
  if (!nodes.has(node)) {
    nodes.add(node);
    queue = node.edges.sort((x, y) => x.weight - y.weight);
    while (queue.length > 0) {
      let edge = queue.shift() as Edge;
      if (!nodes.has(edge.to)) {
        nodes.add(edge.to);
        result.add(edge);
        queue = [...queue, ...node.edges].sort((x, y) => x.weight - y.weight);
      }
    }
  }
  return result;
}

export class Node {
  public value: number;
  public in: number;
  public out: number;
  public edges: Edge[];
  public nexts: Node[];
  constructor(value: number) {
    this.value = value;
    this.in = 0;
    this.out = 0;
    this.edges = [];
    this.nexts = [];
  }
}

export class Edge {
  public weight: number;
  public from: Node;
  public to: Node;
  constructor(weight: number, from: Node, to: Node) {
    this.weight = weight;
    this.from = from;
    this.to = to;
  }
}

export class Graph {
  public nodes: Map<number, Node>;
  public edges: Set<Edge>;
  constructor(nodes: Map<number, Node>, edges: Set<Edge>) {
    this.nodes = nodes;
    this.edges = edges;
  }
}
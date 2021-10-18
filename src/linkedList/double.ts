/**
 * 双向链表节点
 * value 节点值
 * pre  前驱节点
 * next 后继节点
 */
export class Node {
  public value: any;
  public pre: Node | null;
  public next: Node | null;
  constructor(val: any) {
    this.value = val;
    this.pre = null;
    this.next = null;
  }
}

export function addNode(head: Node, value: any): Node {
  let temp = new Node(value),
    p = head;
  while (p.next !== null) {
    p = p.next;
  }
  p.next = temp;
  temp.pre = p;
  return head;
}

export function insertAfter(head: Node, node: Node, newNode: Node) {
  let p = head;
  while (p.next !== null && p !== node) {
    p = p.next;
  }
  if (p === node) {
    newNode.next = p.next;
    newNode.pre = p.pre;
    p.next = newNode;
  }
  return head;
}

export function insertBeginning(head: Node, newNode: Node): Node {
  head.pre = newNode;
  newNode.next = head;
  head = newNode;
  return head;
}

export function removeAfter(head: Node, node: Node): Node {
  if (head === node && head.next !== null) {
    head.next = null;
  }
  let p = head;
  while (p.next !== null && p !== node) {
    p = p.next;
  }
  if (p === node && p.next !== null) {
    p.next = p.next.next;
  }
  return head;
}

export function removeBeginning(head: Node): Node {
  if (head.next !== null) {
    head = head.next;
    head.pre = null;
  }
  return head;
}

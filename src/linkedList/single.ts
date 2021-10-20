/**
 * 单链表节点
 * value 节点值
 * next 后继节点
 */
export class Node {
  public value: any;
  public next: Node | null;
  constructor(val: any) {
    this.value = val;
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
  return head;
}

export function insertAfter(head: Node, value: any, newValue: any) {
  let p = head;
  while (p.next !== null && p.value !== value) {
    p = p.next;
  }
  let newNode = new Node(newValue);
  if (p.value === value) {
    newNode.next = p.next;
    p.next = newNode;
  }
  return head;
}

export function insertBeginning(head: Node, newValue: any): Node {
  let newNode = new Node(newValue);
  newNode.next = head;
  head = newNode;
  return head;
}

export function removeAfter(head: Node, value: any): Node {
  let p = head;
  while (p.next !== null && p.value === value) {
    p.next = p.next.next;
    break;
  }
  return head;
}

export function removeBeginning(head: Node): Node {
  if (head.next !== null) {
    head = head.next;
  }
  return head;
}

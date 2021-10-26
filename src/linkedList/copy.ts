export class Node {
  public value: any;
  public next: Node | null;
  public rand: Node | null;
  constructor(val: any) {
    this.value = val;
    this.next = null;
    this.rand = null;
  }
}

/**
 * 复制带有随机指针的链表
 * 不考虑空间复杂度，将链表放入hashmap中，key是原链表，value是复制节点
 * 考虑空间复杂度，将每一个节点的复制节点放入该节点后面，然后遍历一遍根据每一个节点的随机指针的下一个节点确定除该复制节点的随机指针指向
 * @param head 头结点
 * @returns
 */
export function copy(head: Node): Node | null {
  let p: Node | null = head, next = null;
  while (p !== null) {
    next = p.next;
    p.next = new Node(p.value);
    p.next.next = next;
    p = next;
  }
  p = head;
  let curCopy: Node | null = null;
  while (p !== null && p.next !== null && p.rand !== null) {
    next = p.next.next;
    curCopy = p.next;
    curCopy.rand = p.rand !== null ? p.rand.next : null;
    p = next;
  }
  p = head;
  let nHead = head.next;
  while (p !== null && p.next !== null) {
    next = p.next.next;
    curCopy = p.next;
    p.next = next;
    curCopy.next = next !== null ? next.next : null;
    p = next;
  }
  return nHead;
}

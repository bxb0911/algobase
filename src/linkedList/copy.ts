class Node {
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
  let p: Node | null = head;
  while (p !== null) {
    let cur: Node | null = new Node(p.value);
    cur.next = p.next;
    p.next = cur;
    p = cur.next;
  }
  p = head;
  while (p !== null && p.next !== null && p.rand !== null) {
    p.next.rand = p.rand.next;
  }
  p = head;
  let p1 = head.next;
  let nHead = head.next;
  // p -> p1 -> p2 -> p3 -> p4 -> p5 -> null p === p4
  while (p !== null && p1 !== null && p1.next !== null) {
    p.next = p1.next;
    p1.next = p.next.next;
    p = p.next;
  }
  p = null;
  return nHead;
}

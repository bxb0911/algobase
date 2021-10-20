import { Node } from "./single";

/**
 * 单链表反转
 * @param head 头结点
 * @returns
 */
export function reverse(head: Node | null): Node | null {
  let pre = null, next = null;
  while (head !== null) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}

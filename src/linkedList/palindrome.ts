import { Node } from './single';
             
/**
 * 是否是回文结构链表
 * 不考虑额外空间复杂度可以使用进栈出栈然后依次与原链表进行比对
 * 全部进栈出栈比对  （额外空间复杂度O(N)）
 * 进栈一半元素并比对（额外空间复杂度O(N/2)）
 * 考虑额外空间复杂度，快慢指针法（额外空间复杂度O(1)）
 * @param head 头结点
 * @returns 
 */
export function isPalindrome(head: Node | null): boolean {
  if (head === null || head.next === null) {
    return true;
  }
  let s: Node | null = head, f: Node | null = head;
  while (s.next !== null && f.next !== null && f.next.next !== null) {
    s = s.next;
    f = f.next.next;
  }
  let p = s.next, n = null;
  s.next = null; // 防止循环调用
  while (p !== null) {
    n = p.next;
    p.next = s;
    s = p;
    p = n;
  }
  let result = true, h: Node | null = head, t: Node | null = s;
  while (h !== null && t !== null) {
    if (h.value !== t.value) {
      result = false;
      break;
    }
    h = h.next;
    t = t.next;
  }
  let pre = null, next = null;
  while (s !== null) {
    next = s.next;
    s.next = pre;
    pre = s;
    s = next;
  }
  return result;
}
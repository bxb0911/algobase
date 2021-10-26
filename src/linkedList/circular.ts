import { Node } from './single';

/**
 * 是否是循环链表，如果是返回第一个入环节点
 * @param head 头结点
 * @returns
 */
function getLoopNode(head: Node): Node | null {
  if (head === null || head.next === null || head.next.next === null) {
    return null;
  }
  let f: Node | null = head.next.next, s: Node | null = head.next;
  while (s !== f) {
    if (s.next === null || f.next === null || f.next.next === null) {
      return null;
    }
    f = f.next.next;
    s = s.next;
  }
  f = head;
  while (s !== f && s !== null && f !== null) {
    s = s.next;
    f = f.next;
  }
  return s;
}

/**
 * 两个无环链表相交节点
 * @param h1 链表1头结点
 * @param h2 链表2头结点
 * @returns 相交节点
 */
function getNoLoopIntersect(h1: Node, h2: Node): Node | null {
  let p1: Node | null = h1, p2: Node | null = h2, n = 0;
  while (p1 !== null) {
    n++;
    p1 = p1.next;
  }
  while (p2 !== null) {
    n--;
    p2 = p2.next;
  }
  if (p1 !== p2) {
    return null;
  }
  p1 = n > 0 ? h1 : h2;
  p2 = p1 === h1 ? h2 : h1;
  n = Math.abs(n);
  while (n !== 0 && p1 !== null) {
    n--;
    p1 = p1.next;
  }
  while (p1 !== p2 && p1 !== null && p2 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}

/**
 * 两个有环链表相交节点
 * @param h1 链表1头结点
 * @param h2 链表2头结点
 * @param ln1 链表1入环节点
 * @param ln2 链表2入环节点
 * @returns 相交节点
 */
function getBothLoopIntersect(h1: Node, h2: Node, ln1: Node, ln2: Node): Node | null {
  if (ln1 === ln2) {
    let p1: Node | null = h1, p2: Node | null = h2, n = 0;
    while (p1 !== null) {
      n++;
      p1 = p1.next;
    }
    while (p2 !== null) {
      n--;
      p2 = p2.next;
    }
    p1 = n > 0 ? h1 : h2;
    p2 = p1 === h1 ? h2 : h1;
    n = Math.abs(n);
    while (n !== 0 && p1 !== null) {
      n--;
      p1 = p1.next;
    }
    while (p1 !== p2 && p1 !== null && p2 !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1;
  } else {
    let p = ln1.next;
    while (p !== ln1 && p !== null) {
      if (p === ln2) {
        return p;
      }
      p = p.next;
    }
    return null;
  }
}

/**
 * 两链表相交节点
 * @param h1 链表1头结点
 * @param h2 链表2头结点
 * @returns 相交节点
 */
export function getIntersect(h1: Node, h2: Node): Node | null {
  let ln1 = getLoopNode(h1), ln2 = getLoopNode(h2);
  if (ln1 !== null && ln2 !== null) {
    return getBothLoopIntersect(h1, h2, ln1, ln2);
  } else if (ln1 === null && ln2 === null) {
    return getNoLoopIntersect(h1, h2);
  }
  return null;
}
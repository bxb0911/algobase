import { Node } from "./single";

/**
 * 不考虑空间复杂度，可以将链表转为数组然后进行数组的partition
 * 考虑额外空间复杂度，申请6个指针原地进行划分
 * 链表从左到右依次摆放比划分值小相等大的节点
 * @param head 头结点
 * @param target 划分值
 * @returns
 */
export function partition(head: Node | null, target: any): Node | null {
  if (head === null || head.next === null) {
    return head;
  }
  let p: Node | null = head;
  let lh: Node | null = null,
    lt: Node | null = null,
    ch: Node | null = null,
    ct: Node | null = null,
    rh: Node | null = null,
    rt: Node | null = null;
  let next: Node | null = null;
  while (p !== null) {
    next = p.next;
    p.next = null;
    if (p.value < target) {
      if (lh === null && lt === null) {
        lh = p;
        lt = lh;
      } else if (lt !== null && lh !== null) {
        lt.next = p;
        lt = p;
      }
    } else if (p.value > target) {
      if (rh === null && rt === null) {
        rh = p;
        rt = rh;
      } else if (rt !== null && rh !== null) {
        rt.next = p;
        rt = p;
      }
    } else {
      if (ch === null && ct === null) {
        ch = p;
        ct = ch;
      } else if (ct !== null && ch !== null) {
        ct.next = p;
        ct = p;
      }
    }
    p = next;
  }

  if (lt !== null) {
    lt.next = ch !== null ? ch : rh;
  }

  if (ct !== null) {
    ct.next = rh !== null ? rh : null;
  }

  return lh !== null ? lh : ch;
}

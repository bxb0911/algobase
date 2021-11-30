import { PriorityQueue } from './priorityQueue';

export function slitGold(list: number[]) {
  let pq = new PriorityQueue(list);
  let cur: number = 0, total: number = 0;
  while (pq.size() > 1) {
    cur = pq.poll() + pq.poll();
    total += cur;
    pq.add(cur);
  }
  return total;
}
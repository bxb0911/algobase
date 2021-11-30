import { PriorityQueue } from './priorityQueue'

type Project = {
  c: number;
  p: number;
}

/**
 * 计算最大利润
 * @param w 启动资金
 * @param k 最大项目数
 */
export function getMaxProfit(list: Project[], w: number, k: number): number {
  let costPQ = new PriorityQueue(list, (x, y) => x.c - y.c),
    profitPQ = new PriorityQueue([], (x, y) => y.p - x.p);
  let total = 0;
  while (k-- > 0) {
    while (!costPQ.isEmpty() && costPQ.peek().c <= w) {
      profitPQ.add(costPQ.poll());
    }
    if (profitPQ.isEmpty()) {
      return total;
    }
    total += profitPQ.poll().p;
  }
  return total;
}
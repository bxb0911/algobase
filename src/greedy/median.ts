import { PriorityQueue } from './priorityQueue';

export function getMedian(list: number[]): number {
  let minRootHeap = new PriorityQueue(),
    maxRootHeap = new PriorityQueue([], (x, y) => y - x);
  maxRootHeap.add(list[0]);
  for (let i = 1, len = list.length; i < len; i++) {
    if (maxRootHeap.isEmpty || list[i] <= maxRootHeap.peek()) {
      maxRootHeap.add(list[i]);
    } else {
      minRootHeap.add(list[i]);
    }

    if (maxRootHeap.size() === minRootHeap.size() + 2) {
      minRootHeap.add(maxRootHeap.poll());
    } else if (minRootHeap.size() === maxRootHeap.size() + 2)  {
      maxRootHeap.add(minRootHeap.poll());
    }
  }

  if (maxRootHeap.size() < minRootHeap.size()) {
    return minRootHeap.peek();
  } else if (maxRootHeap.size() > minRootHeap.size()) {
    return maxRootHeap.peek();
  } else {
    return (maxRootHeap.peek() + minRootHeap.peek()) / 2
  }
}
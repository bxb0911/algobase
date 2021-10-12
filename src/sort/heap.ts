import { swap } from "../utils/swap";

/**
 * 堆排序
 * 时间复杂度 O(N*logN) 额外空间复杂度 O(1)
 * @param data 源数据
 * @param type 排序类型（1 从小到大【默认】 2 从大到小）
 * @returns 排序结果
 */
export function heapSort<T>(data: T[], type: 1 | 2 = 1): T[] {
  let len;
  if ((len = data.length) <= 1) {
    return data;
  }
  let i = 0,
    res = [];
  while (i++ < len) {
    res.push(heapify(data, type) as T);
  }
  return res;
}

/**
 * 去掉第一个节点最后一个节点换到顶剩余构造大根堆小根堆
 * @param type 排序类型（1 小根堆 2 大根堆）
 * @returns 堆
 */
export function heapify<T>(data: T[], type: 1 | 2 = 1) {
  heapInsert(data, type);
  let result = data.shift();
  swap(data, 0, data.length - 1);
  return result;
}

/**
 * 构造大根堆小根堆
 * @param type 排序类型（1 小根堆 2 大根堆）
 * @returns 堆
 */
export function heapInsert(data: any[], type: 1 | 2 = 1) {
  for (let i = 1, len = data.length; i < len; i++) {
    let index = i,
      cur;
    while ((cur = (index - 1) >> 1) >= 0) {
      if (
        (type === 1 && data[index] < data[cur]) ||
        (type === 2 && data[index] > data[cur])
      ) {
        swap(data, index, cur);
        index = cur;
      } else {
        break;
      }
    }
  }
}

/**
 * 堆排序
 * 时间复杂度 O(N*logN) 额外空间复杂度 O(1)
 * @param data 源数据
 * @param type 排序类型（1 从小到大【默认】 2 从大到小）
 * @returns 排序结果
 */
export function heapSort<T>(data: T[], type: 1 | 2 = 1): T[] {
  if (data.length <= 1) {
    return data;
  }

  return data;
}

export function heapify() {}

/**
 * 构造大根堆小根堆
 * @param type 排序类型（1 小根堆 2 大根堆）
 * @returns 堆
 */
export function heapInsert(data: any[], type: 1 | 2 = 1) {
  for (let i = 0, len = data.length; i < len; i++) {
    // let
  }
}

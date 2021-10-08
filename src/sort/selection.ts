import { swap } from "../utils/swap";

/**
 * 选择排序
 * 时间复杂度 O(n^2) 额外空间复杂度 O(1)
 * @param data 源数据
 * @param type 排序类型（1 从小到大【默认】 2 从大到小）
 * @returns 排序结果
 */
export function selectionSort<T>(data: T[], type: 1 | 2 = 1): T[] {
  if (data.length <= 1) {
    return data;
  }
  for (let i = 0, len = data.length; i < len; i++) {
    let target = i;
    for (let j = i; j < len; j++) {
      if (type === 1) {
        target = data[j] < data[target] ? j : target;
      } else if (type === 2) {
        target = data[j] > data[target] ? j : target;
      }
    }
    swap(data, i, target);
  }
  return data;
}

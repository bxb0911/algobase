import { swap } from "../utils/swap";

/**
 * 插入排序
 * 时间复杂度 O(N^2) 额外空间复杂度 O(1)
 * @param data 源数据
 * @param type 排序类型（1 从小到大【默认】 2 从大到小）
 * @returns 排序结果
 */
export function insertionSort<T>(data: T[], type: 1 | 2 = 1): T[] {
  if (data.length <= 1) {
    return data;
  }
  for (let i = 0, len = data.length; i < len - 1; i++) {
    for (let j = i; j >= 0; j--) {
      if (type === 1) {
        data[j] > data[j + 1] && swap(data, j, j + 1);
      } else if (type === 2) {
        data[j] < data[j + 1] && swap(data, j, j + 1);
      }
    }
  }
  return data;
}

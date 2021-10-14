import { swap } from "../utils/swap";

/**
 * 快速排序
 * 时间复杂度 O(N*logN) 额外空间复杂度 O(logN)
 * @param data 源数据
 * @param type 排序类型（1 从小到大【默认】 2 从大到小）
 * @returns 排序结果
 */
export function quickSort<T>(data: T[], type: 1 | 2 = 1): T[] {
  let len;
  if ((len = data.length) <= 1) {
    return data;
  }

  return data;
}

function partition<T>(data: T[], ref: T): [number, number] {
  let left = -1,
    right = data.length,
    i = 0;
  while (i < right) {
    if (data[i] < ref) {
      swap(data, i++, left++);
    } else if (data[i] > ref) {
      swap(data, i, right--);
    } else {
      i++;
    }
  }
  return [left, right];
}

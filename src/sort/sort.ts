import { insertionSort } from "./insertion";
import { quickSort } from "./quick";

/**
 * 综合排序（数据量小时可以忽略时间复杂度优先考虑常数时间）
 * @param data 源数据
 * @param type 排序类型（1 从小到大【默认】 2 从大到小）
 * @returns 排序结果
 */
export function sort(data: any[], type: 1 | 2 = 1): number[] {
  let len;
  if ((len = data.length) <= 1) {
    return data;
  }
  if (len <= 32) {
    insertionSort(data, type);
  } else {
    quickSort(data, type);
  }
  return data;
}

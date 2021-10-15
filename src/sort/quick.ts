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
  process(data, 0, len - 1, type);
  return data;
}

export function process<T>(data: T[], l: number, r: number, type: 1 | 2) {
  if (l <= r) {
    let ref = l + Math.floor(Math.random() * (r - l + 1));
    swap(data, ref, r);
    let [nl, nr] = partition(data, l, r, type);
    process(data, l, nl, type);
    process(data, nr, r, type);
  }
}

export function partition<T>(data: T[], l: number, r: number, type: 1 | 2): [number, number] {
  let ref = r, i = l;
  while (i < r) {
    if (type === 1) {
      if (data[i] > data[ref]) {
        swap(data, i, --r);
      } else if (data[i] < data[ref]) {
        swap(data, i++, l++);
      } else {
        i++;
      }
    } else if (type === 2) {
      if (data[i] < data[ref]) {
        swap(data, i, --r);
      } else if (data[i] > data[ref]) {
        swap(data, i++, l++);
      } else {
        i++;
      }
    }
  }
  swap(data, r, ref);
  return [l - 1, r + 1];
}

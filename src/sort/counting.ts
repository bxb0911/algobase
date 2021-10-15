
/**
 * 计数排序（范围有限，如限制在[0, 10000)）
 * 时间复杂度 O(N) 额外空间复杂度 O(N)
 * @param data 源数据
 * @param type 排序类型（1 从小到大【默认】 2 从大到小）
 * @returns 排序结果
 */
export function countingSort(data: number[], type: 1 | 2 = 1): number[] {
  let len;
  if ((len = data.length) <= 1) {
    return data;
  }
  let counter = Array.from({ length: 10000 }, () => 0);
  for (let i = 0; i < len; i++) {
    counter[data[i]]++;
  }
  for (let j = 0, k = 0; j < counter.length; j++) {
    while (counter[j]--) {
      type === 1 && (data[k++] = j);
      type === 2 && (data[len - k++ - 1] = j);
    }
  }
  return data;
}
/**
 * 归并排序
 * 时间复杂度 O(N*logN) 额外空间复杂度 O(logN)
 * @param data 源数据
 * @param type 排序类型（1 从小到大【默认】 2 从大到小）
 * @returns 排序结果
 */
export function mergeSort<T>(data: T[], type: 1 | 2 = 1): T[] {
  if (data.length <= 1) {
    return data;
  }
  _merge(data, 0, data.length - 1, type);
  return data;
}

function _merge(data: any[], left: number, right: number, type: 1 | 2) {
  if (left === right) {
    return;
  }
  let middle = left + ((right - left + 1) >> 1);
  _merge(data, left, middle - 1, type);
  _merge(data, middle, right, type);
  let newData = [],
    i = left,
    j = middle;
  while (i < middle && j <= right) {
    let index = i;
    if (type === 1) {
      index = data[i] <= data[j] ? i++ : j++;
    } else if (type === 2) {
      index = data[i] > data[j] ? i++ : j++;
    }
    newData.push(data[index]);
  }
  while (i < middle) {
    newData.push(data[i++]);
  }
  while (j <= right) {
    newData.push(data[j++]);
  }
  for (let i = left; i <= right; i++) {
    data[i] = newData[i - left];
  }
}

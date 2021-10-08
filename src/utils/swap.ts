/**
 * 交换数组两元素
 * @param data 数组
 * @param i 数组下标
 * @param j 数组下标
 */
export function swap<T>(data: T[], i: number, j: number) {
  if (data.length < 2 || i === j) {
    return;
  }
  [data[i], data[j]] = [data[j], data[i]];
}

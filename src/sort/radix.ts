/**
 * 基数排序（非负整数适用）
 * 时间复杂度 O(N) 额外空间复杂度 O(N)
 * @param data 源数据
 * @param type 排序类型（1 从小到大【默认】 2 从大到小）
 * @returns 排序结果
 */
export function radixSort(data: any[], type: 1 | 2 = 1): number[] {
  let len;
  if ((len = data.length) <= 1) {
    return data;
  }
  let max = -1,
    digit;
  for (let i = 0; i < len; i++) {
    max = Math.max(max, data[i] as number);
  }
  digit = max.toString().length;
  for (let i = 0; i < len; i++) {
    data[i] = padZero(data[i] as number, digit);
  }
  let result = data.slice();
  for (let j = digit - 1; j >= 0; j--) {
    let counter = Array.from({ length: 10 }, () => 0);
    data.forEach((item) => counter[item[j] as number]++);
    let counterLt = [counter[0]];
    counter.reduce((pre, cur) => {
      let sum = pre + cur;
      counterLt.push(sum);
      return sum;
    });
    for (let k = len - 1; k >= 0; k--) {
      result[--counterLt[data[k][j]]] = data[k];
    }
    data = result.slice();
  }
  return type === 1 ? data.map(Number) : data.reverse().map(Number);
}

export function padZero(x: number, digit: number): string {
  return new Array(digit + 1 - x.toString().length).join("0") + x;
}

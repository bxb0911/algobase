/**
 * 数字转大写字母（1->A 2->B ... 26->Z）
 */
export function permutation(num: number) {
  let result = 0;
  process(num.toString(), 0, result);
  return result;
}

function process(str: string, index: number, result: number) {
  if (str.length === index) {
    return;
  }
  if (parseInt(str[index]) <= 26 && parseInt(str[index]) >= 1) {
    process(str, index + 1, ++result);
  } else {
  }
}

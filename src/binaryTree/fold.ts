/**
 * 一张纸对折N次后的折痕
 * 转为二叉树进行中序遍历即可
 */
let result: string;
export function getCrease(N: number): string {
  result = "";
  process(1, N, true);
  return result;
}

function process(cur: number, N: number, isDown: boolean) {
  if (cur > N) {
    return;
  }
  process(cur + 1, N, true);
  result += isDown ? "凹" : "凸";
  process(cur + 1, N, false);
}

/**
 * 汉诺塔
 */
export function hanoi(count: number): string[] {
  let result: string[] = [];
  process(count, "A", "C", "B", result);
  return result;
}

type position = "A" | "B" | "C";

function process(
  cur: number,
  from: position,
  to: position,
  other: position,
  result: string[]
) {
  if (cur === 1) {
    result.push(`from ${from} to ${to}`);
    return;
  }
  process(cur - 1, from, other, to, result);
  result.push(`from ${from} to ${to}`);
  process(cur - 1, other, to, from, result);
}

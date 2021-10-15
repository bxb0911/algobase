export function binary<T>(data: T[], target: T): number {
  let len = data.length;
  if (len === 0 || (len === 1 && data[0] !== target)) {
    return -1;
  }
  let index = -1,
    l = 0,
    r = len - 1;
  while (l < r) {
    let mid = l + ((r - l) >> 1);
    if (target <= data[mid]) {
      data[mid] === target && (index = mid);
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return index;
}

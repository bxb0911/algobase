export function subsequence(str: string): string[] {
  let result: string[] = [];
  if (str.length === 0) {
    return [str];
  }
  process(str, 0, "", result);
  return result;
}

function process(str: string, index: number, path: string, result: string[]) {
  if (index === str.length) {
    result.push(path);
    return;
  }
  process(str, index + 1, path, result);
  process(str, index + 1, path + str[index], result);
}

export class Trie {
  public pass: number;
  public end: number;
  public nexts: Trie[];
  constructor(pass: number, end: number) {
    this.pass = pass;
    this.end = end;
    this.nexts = [];
  }
}

// 26个字母
const root = new Trie(0, 0);
root.nexts = Array(26).fill(new Trie(0, 0));

export function insert(str: string) {
  let cur = root;
  for (let i = 0, len = str.length; i < len; i++) {
    const index = str.charCodeAt(i) - 97;
    if (cur.nexts[index]) {
      cur.nexts[index].pass++;
    } else {
      cur.nexts[index] = new Trie(1, 0);
    }
    cur = cur.nexts[index];
  }
  cur.end++;
}

export function search(str: string) {

}

export function prefixNumber(str: string) {

}

export function delete(str: string) {

}


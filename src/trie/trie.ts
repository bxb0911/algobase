/**
 * 前缀树
 */
export class TrieNode {
  public pass: number;
  public end: number;
  public nexts: (TrieNode | null)[];
  constructor(pass: number, end: number) {
    this.pass = pass;
    this.end = end;
    this.nexts = [];
  }
}

export class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode(0, 0);
    this.root.nexts = Array(26).fill(new TrieNode(0, 0));
  }

  insert(word: string) {
    let cur = this.root;
    cur.pass++;
    for (let i = 0, len = word.length; i < len; i++) {
      const index = word.charCodeAt(i) - 97;
      if (cur.nexts[index]) {
        cur.nexts[index] = new TrieNode(0, 0);
      }
      cur = cur.nexts[index] as TrieNode;
      cur.pass++;
    }
    cur.end++;
  }

  search(word: string): number {
    let cur = this.root;
    for (let i = 0, len = word.length; i < len; i++) {
      const index = word.charCodeAt(i) - 97;
      if (!cur.nexts[index]) {
        return 0;
      }
      cur = cur.nexts[index] as TrieNode;
    }
    return cur.end;
  }

  prefixNumber(pre: string): number {
    let cur = this.root;
    for (let i = 0, len = pre.length; i < len; i++) {
      const index = pre.charCodeAt(i) - 97;
      if (!cur.nexts[index]) {
        return 0;
      }
      cur = cur.nexts[index] as TrieNode;
    }
    return cur.pass;
  }

  remove(word: string) {
    if (this.search(word) === 0) return;
    let cur = this.root;
    cur.pass--;
    for (let i = 0, len = word.length; i < len; i++) {
      const index = word.charCodeAt(i) - 97;
      if (--(cur.nexts[index] as TrieNode).pass === 0) {
        cur.nexts[index] = null;
        return;
      }
      cur = cur.nexts[index] as TrieNode;
    }
    cur.end--;
  }
}

class SegmentTree {
  MAXN: number;
  arr: number[];
  sum: number[];
  lazy: number[];
  change: number[];
  updateA: boolean[];
  constructor(origin: number[]) {
    this.MAXN = origin.length + 1;
    this.arr = new Array(this.MAXN).fill(0);
    for (let i = 1; i < this.MAXN; i++) {
      this.arr[i] = origin[i - 1];
    }
    this.sum = new Array(this.MAXN << 2);
    this.lazy = new Array(this.MAXN << 2);
    this.change = new Array(this.MAXN << 2);
    this.updateA = new Array(this.MAXN << 2);
  }

  build(l: number, r: number, rt: number) {
    if (l === r) {
      this.sum[rt] = this.arr[l];
    }
    let mid = (l + r) >> 1;
    this.build(l, mid, rt << 1);
    this.build(mid + 1, r, (rt << 1) | 1);
    this.pushUp(rt);
  }

  pushUp(rt: number) {
    this.sum[rt] = this.sum[rt << 1] + this.sum[(rt << 1) | 1];
  }

  pushDown(rt: number, ln: number, rn: number) {
    if (this.updateA[rt]) {
      this.updateA[rt << 1] = true;
      this.updateA[(rt << 1) | 1] = true;
      this.change[rt << 1] = this.change[rt];
      this.change[(rt << 1) | 1] = this.change[rt];
      this.lazy[rt << 1] = 0;
      this.lazy[(rt << 1) | 1] = 0;
      this.sum[rt << 1] = this.change[rt] * ln;
      this.sum[(rt << 1) | 1] = this.change[rt] * rn;
      this.updateA[rt] = false;
    }
    if (this.lazy[rt] !== 0) {
      this.lazy[rt << 1] += this.lazy[rt];
      this.sum[rt << 1] += this.lazy[rt] * ln;
      this.lazy[(rt << 1) | 1] += this.lazy[rt];
      this.sum[(rt << 1) | 1] = this.lazy[rt] * rn;
      this.lazy[rn] = 0;
    }
  }

  add(L: number, R: number, C: number, l: number, r: number, rt: number) {
    if (L <= l && r <= R) {
      this.sum[rt] += C * (r - l + 1);
      this.lazy[rt] += C;
      return;
    }
    let mid = (l + r) >> 1;
    this.pushDown(rt, mid - l + 1, r - mid);
    if (L <= mid) {
      this.add(L, R, C, l, mid, rt << 1);
    }
    if (R > mid) {
      this.add(L, R, C, mid + 1, r, (rt << 1) | 1);
    }
    this.pushUp(rt);
  }

  update(
    L: number,
    R: number,
    C: number,
    l: number,
    r: number,
    rt: number
  ): void {
    if (L <= l && r <= R) {
      this.updateA[rt] = true;
      this.change[rt] = C;
      this.sum[rt] = C * (r - l + 1);
      this.lazy[rt] = 0;
      return;
    }
    let mid = (l + r) >> 1;
    this.pushDown(rt, mid - l + 1, r - mid);
    if (L <= mid) {
      this.update(L, R, C, l, mid, rt << 1);
    }
    if (R > mid) {
      this.update(L, R, C, mid + 1, r, (rt << 1) | 1);
    }
    this.pushUp(rt);
  }

  query(L: number, R: number, l: number, r: number, rt: number): number {
    if (L <= l && r <= R) {
      return this.sum[rt];
    }
    let mid = (l + r) >> 1;
    this.pushDown(rt, mid - l + 1, r - mid);
    let ans = 0;
    if (L <= mid) {
      ans += this.query(L, R, l, mid, rt << 1);
    }
    if (R > mid) {
      ans += this.query(L, R, mid + 1, r, (rt << 1) | 1);
    }
    return ans;
  }
}

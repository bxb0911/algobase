export class Node {
  public value: any;
  public left: Node | null;
  public right: Node | null;
  constructor(val: any) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
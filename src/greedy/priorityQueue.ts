import { Heap } from './heap';

export class PriorityQueue extends Heap {
  constructor(elements?: any[], compareFunction?: (x: any, y: any) => any) {
    super(elements, compareFunction);
  }

  size(): number {
    return this.elements.length;
  }

  add(el: any) {
    this.elements.push(el);
    this.heapInsert();
  }

  poll(): any {
    return this.heapify();
  }

  peek(): any | null {
    return this.elements.length ? this.elements[0] : null;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}
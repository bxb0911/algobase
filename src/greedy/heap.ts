import { swap } from "../utils/swap";

export class Heap {
  elements: any[] = [];
  type: ((x: any, y: any) => any) | number = -1;
  constructor(elements?: any[], type?: ((x: any, y: any) => any) | number) {
    elements && (this.elements = elements);
    type && (this.type = type);
    this.heapInsert();
  }

  heapInsert() {
    if (!this.elements.length || this.elements.length <= 1) {
      return;
    }
    let type = (x: any, y: any) => typeof this.type === 'function' ? this.type(x, y) : this.type;
    for (let i = 1, len = this.elements.length; i < len; i++) {
      let pNode = i - 1 >> 1;
      while (pNode >= 0) {
        if ((type(this.elements[i], this.elements[pNode]) < 0 && this.elements[i] < this.elements[pNode]) 
        || (type(this.elements[i], this.elements[pNode]) > 0 && this.elements[i] > this.elements[pNode])) {
          swap(this.elements, i, pNode);
          i = pNode;
        } else {
          break;
        }
      }
    }
  }

  heapify(): any {
    this.heapInsert();
    let result = this.elements.shift();
    swap(this.elements, 0, this.elements.length - 1);
    return result;
  }
}
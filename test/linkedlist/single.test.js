import { Node, addNode, insertAfter, insertBeginning, removeAfter, removeBeginning } from '@/linkedList/single';
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
describe("Single linkedlist CRUD", () => {
    it("remove beginning", () => {
        expect(removeBeginning(head).value).toEqual(2);
    });
    it("remove after", () => {
        expect(removeAfter(head, 1)?.next?.value).toEqual(3);
    });
    it("add node", () => {
        expect(addNode(head, 4)?.next?.next?.value).toEqual(4);
    });
    it("insert beginning", () => {
        expect(insertBeginning(head, 1)?.value).toEqual(1);
    });
    it("insert after", () => {
        expect(insertAfter(head, 1, 2)?.next?.value).toEqual(2);
    });
});
//# sourceMappingURL=single.test.js.map
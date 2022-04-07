import { copy, Node } from '@/linkedList/copy';
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.rand = head.next.next;
head.next.rand = head;
head.next.next.rand = head.next;
describe("Copy linked list with random", () => {
    it("cp", () => {
        let nHead = copy(head);
        head.value = 0;
        expect(nHead?.value).toEqual(1);
    });
});
//# sourceMappingURL=copy.test.js.map
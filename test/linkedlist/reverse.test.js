import { reverse } from '@/linkedList/reverse';
import { Node } from '@/linkedList/single';
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
describe("Reverse linked list", () => {
    it("reverse", () => {
        expect(reverse(head)?.value).toEqual(6);
    });
});
//# sourceMappingURL=reverse.test.js.map
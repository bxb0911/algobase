import { partition } from '@/linkedList/partition';
import { Node } from '@/linkedList/single';
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(1);
describe("Small to equal to big arrangement", () => {
    it("smaller than 2 -> equal to 2 -> bigger than 2", () => {
        expect(partition(head, 2)?.next?.next?.value).toEqual(2);
    });
});
//# sourceMappingURL=partition.test.js.map
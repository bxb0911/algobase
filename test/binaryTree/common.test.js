import { lowestCommon } from "@/binaryTree/lowestCmn";
import { Node } from "@/binaryTree/binaryTree";
const root = new Node(0);
const o1 = new Node(1);
const o2 = new Node(2);
const o3 = new Node(3);
const o4 = new Node(4);
const o5 = new Node(5);
const o6 = new Node(6);
const o7 = new Node(7);
root.left = o1;
root.right = o2;
root.left.left = o3;
root.left.right = o4;
root.right.left = o5;
root.right.right = o6;
describe("Is xxx binary tree", () => {
    it("get lowest common node1", () => {
        expect(JSON.stringify(lowestCommon(root, o3, o4))).toEqual(JSON.stringify(o1));
    });
    it("get lowest common node2", () => {
        expect(JSON.stringify(lowestCommon(root, o2, o6))).toEqual(JSON.stringify(o2));
    });
    it("get lowest common node3", () => {
        expect(JSON.stringify(lowestCommon(root, o3, o6))).toEqual(JSON.stringify(root));
    });
    it("no lowest common node", () => {
        expect(lowestCommon(root, o5, o7)).toEqual(null);
    });
});
//# sourceMappingURL=common.test.js.map
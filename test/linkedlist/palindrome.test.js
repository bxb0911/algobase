import { isPalindrome } from '@/linkedList/palindrome';
import { Node } from '@/linkedList/single';
const even = new Node(1);
even.next = new Node(2);
even.next.next = new Node(3);
even.next.next.next = new Node(1);
// even.next.next.next.next = new Node(2);
// even.next.next.next.next.next = new Node(1);
const odd = new Node(1);
odd.next = new Node(2);
odd.next.next = new Node(3);
const not = new Node(1);
not.next = new Node(2);
describe("Is palindrome linked list", () => {
    it("even count", () => {
        expect(isPalindrome(even)).toEqual(false);
    });
    it("odd count", () => {
        expect(isPalindrome(odd)).toEqual(false);
    });
    it("not palindrome", () => {
        expect(isPalindrome(not)).toEqual(false);
    });
});
//# sourceMappingURL=palindrome.test.js.map
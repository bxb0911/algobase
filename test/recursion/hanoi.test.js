import { hanoi } from "@/recursion/hanoi";
describe("Find number", () => {
    it("1 Floor", () => {
        expect(hanoi(1)).toEqual(["from A to C"]);
    });
    it("2 Floor", () => {
        expect(hanoi(2)).toEqual(["from A to B", "from A to C", "from B to C"]);
    });
    it("3 Floor", () => {
        expect(hanoi(3)).toEqual([
            "from A to C",
            "from A to B",
            "from C to B",
            "from A to C",
            "from B to A",
            "from B to C",
            "from A to C",
        ]);
    });
});
//# sourceMappingURL=hanoi.test.js.map
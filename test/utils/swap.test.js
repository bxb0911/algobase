import { swap } from "@/utils/swap";
it("swap ${a} and ${b}", () => {
    const data1 = [0];
    const data2 = [1, 2];
    const data3 = [0.3, 0.4, "500"];
    swap(data1, 0, 1);
    swap(data2, 0, 1);
    swap(data3, 1, 2);
    expect(data1).toEqual([0]);
    expect(data2).toEqual([2, 1]);
    expect(data3).toEqual([0.3, "500", 0.4]);
});
//# sourceMappingURL=swap.test.js.map
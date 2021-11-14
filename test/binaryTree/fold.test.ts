import { getCrease } from "@/binaryTree/fold";

describe("Fold paper crease", () => {
  it("Fold 2 times", () => {
    expect(getCrease(2)).toEqual("凹凹凸");
  });

  it("Fold 4 times", () => {
    expect(getCrease(4)).toEqual("凹凹凸凹凹凸凸凹凹凹凸凸凹凸凸");
  });
});

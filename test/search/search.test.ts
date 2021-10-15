import { binary } from "@/search/binary";

const source = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 10000)
);

const data = source.slice().sort((x, y) => x - y);

describe("Find number", () => {
  it("Not found", () => {
    expect(binary(data, -1)).toEqual(-1);
  });
  it("Not found", () => {
    expect(binary(data, 10000)).toEqual(-1);
  });
  it("found", () => {
    expect(binary(data, data[666])).toEqual(
      data.findIndex((x) => x === data[666])
    );
  });
});

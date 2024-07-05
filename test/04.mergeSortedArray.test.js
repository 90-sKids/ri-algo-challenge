import { expect } from "chai";
import mergeSortedArray from "../lib/04.mergeSortedArray.js";

describe("should pass all cases", function () {
  it("should pass base cases", function () {
    expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).to.eql([
      1, 2, 2, 3, 5, 6,
    ]);
    expect(mergeSortedArray([1], 1, [], 0)).to.eql([1]);
    expect(mergeSortedArray([0], 0, [1], 1)).to.eql([1]);
  });

  // 예외 테스트를 추가해주세요~
});

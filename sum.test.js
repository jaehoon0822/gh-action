const sum = require("./sum");

// 성공
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// 실패
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(4);
});

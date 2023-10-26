const sum = (a, b) => {
  if (typeof a === "string" || typeof b === "string") {
    throw Error("숫자를 입력해주세요.");
  }
  return a + b;
};

module.exports = sum;

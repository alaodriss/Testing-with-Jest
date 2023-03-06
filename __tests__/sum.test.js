const sum = require("../sum");

// test (name, fn, timeout)
//==
// it (name, fn, timeout)
// describe(name, fn) == > juste pour bien oraganise le code and ne pas obiligatore

describe("check the numbres sum Total", () => {
  describe("check if no numbers or one number Only", () => {
    test("return 0 if no Number", () => {
      expect(sum()).toBe(0);
    });

    test("return the num just num one", () => {
      expect(sum(10)).toBe(10);
    });
  });

  describe("check if more than one number ", () => {
    test("return the num one + two", () => {
      expect(sum(32, 3)).toBe(35);
    });

    test("return the num one + two + tree", () => {
      expect(sum(32, 3, 10)).toBe(45);
    });

    test("return the num one + two + tree + for", () => {
      expect(sum(32, 3, 10, 5)).toBe(50);
    });

    test("return sum result og all number", () => {
      expect(sum(32, 3, 10, 5, 50, 50)).toBe(150);
    });
  });
});

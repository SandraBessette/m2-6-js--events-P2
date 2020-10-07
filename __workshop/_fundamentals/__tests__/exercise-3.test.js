const { fullName, people } = require("../exercise-3");

test("Exercise 3", () => {
  expect(fullName(people)).toStrictEqual([
    "Alyssa P. Hacker",
    "Ben Bitdiddle",
    "Eva Lu Ator",
    "Lem E. Tweakit",
    "Louis Reasoner",
    "Shahan Haig Krakirian",
  ]);

  expect(fullName([])).toStrictEqual([]);
  expect(fullName(12)).toStrictEqual(undefined);

});

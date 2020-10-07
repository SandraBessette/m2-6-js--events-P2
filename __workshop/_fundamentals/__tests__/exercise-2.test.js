const { avgAge, people } = require("../exercise-2");

test("Exercise 2", () => {
  expect(avgAge(people)).toBe(31);

  expect(avgAge([])).toBe(0);
});

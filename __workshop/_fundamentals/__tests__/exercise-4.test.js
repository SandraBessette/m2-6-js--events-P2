const { olderPeople, people } = require("../exercise-4");

test("Exercise 4", () => {
  expect(olderPeople(people, 30)).toStrictEqual([
    { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
    { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
    { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  ]);
  expect(olderPeople(people, 50)).toStrictEqual([]);
  expect(olderPeople(people, 40)).toStrictEqual([
    { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  ]);

  expect(olderPeople(people, 150)).toStrictEqual([]);
  expect(olderPeople([], 40)).toStrictEqual([]);
  expect(olderPeople(45, 40)).toStrictEqual(undefined);
});

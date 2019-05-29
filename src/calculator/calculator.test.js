import { calculate, TriangleType } from "./calculator";

test("trianlge with all equals sides should return equilateral", () => {
  const result = calculate(7, 7, 7);
  expect(result).toBe(TriangleType.EQUILATERAL);
});

test("trianlge with two equals sides should return isosceles", () => {
  expect(calculate(7, 7, 6)).toBe(TriangleType.ISOSCELES);
  expect(calculate(6, 7, 7)).toBe(TriangleType.ISOSCELES);
  expect(calculate(7, 6, 7)).toBe(TriangleType.ISOSCELES);
});

test("trianlge with no equals sides should return scalene", () => {
  const result = calculate(5, 4, 3);
  expect(result).toBe(TriangleType.SCALENE);
});

test("non possible trianlge should return not exist", () => {
  const result = calculate(7, 2, 1);
  expect(result).toBe(TriangleType.NOT_EXIST);
});

export function calculate(firstSide, secondSide, thirdSide) {
  const isExist =
    firstSide + secondSide > thirdSide &&
    secondSide + thirdSide > firstSide &&
    firstSide + thirdSide > secondSide;

  if (!isExist) {
    return TriangleType.NOT_EXIST;
  }

  if (secondSide === firstSide && thirdSide === firstSide) {
    return TriangleType.EQUILATERAL;
  }

  if (
    firstSide === secondSide ||
    firstSide === thirdSide ||
    secondSide === thirdSide
  ) {
    return TriangleType.ISOSCELES;
  }

  return TriangleType.SCALENE;
}

export const TriangleType = {
  NOT_EXIST: 0,
  EQUILATERAL: 1,
  ISOSCELES: 2,
  SCALENE: 3
};

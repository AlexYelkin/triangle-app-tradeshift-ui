import React from "react";
import { ResultPanel } from "./result-panel";
import { render, cleanup } from "@testing-library/react";
import { TriangleType } from "../calculator/calculator";

afterEach(cleanup);

test("Result panel shows text for equilateral", () => {
  const { queryByText } = render(
    <ResultPanel triangleType={TriangleType.EQUILATERAL} />
  );
  expect(queryByText(/equilateral/i)).toBeTruthy();
});

test("Result panel shows text for isosceles", () => {
  const { queryByText } = render(
    <ResultPanel triangleType={TriangleType.ISOSCELES} />
  );
  expect(queryByText(/isosceles/i)).toBeTruthy();
});

test("Result panel shows text for scalene", () => {
  const { queryByText } = render(
    <ResultPanel triangleType={TriangleType.SCALENE} />
  );
  expect(queryByText(/scalene/i)).toBeTruthy();
});

test("Result panel shows text for not exist", () => {
  const { queryByText } = render(
    <ResultPanel triangleType={TriangleType.NOT_EXIST} />
  );
  expect(queryByText(/not exist/i)).toBeTruthy();
});

test("Result panel shows error when triangle type is not defined", () => {
  const { queryByText } = render(<ResultPanel triangleType={""} />);
  expect(queryByText(/error/i)).toBeTruthy();
});

import React from "react";
import { TriangleForm } from "./triangle-form";
import { render, cleanup, fireEvent } from "react-testing-library";

afterEach(cleanup);

test("Error is hidden by default", () => {
  const { queryByText } = render(<TriangleForm />);
  expect(queryByText(/Invalid value/i)).toBeFalsy();
});

test("Error is shown for invalid value", () => {
  const { queryAllByDisplayValue, queryByText } = render(<TriangleForm />);
  const input = queryAllByDisplayValue("1")[0];
  fireEvent.change(input, { target: { value: 0, name: 0 } });
  expect(queryByText(/Invalid value/i)).toBeTruthy();
});

test("After one side changes it should update result to isosceles", () => {
  const { queryAllByDisplayValue, queryByText } = render(<TriangleForm />);
  const inputFirstSide = queryAllByDisplayValue("1")[0];
  fireEvent.change(inputFirstSide, { target: { value: 1.1, name: 0 } });
  expect(queryByText(/isosceles/i)).toBeTruthy();
});

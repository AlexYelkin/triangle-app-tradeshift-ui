import React from "react";
import { SideInput } from "./side-input";
import { render, cleanup, fireEvent } from "react-testing-library";

afterEach(cleanup);

test("Error is hidden for valid", () => {
  const { queryByText } = render(<SideInput valid={true} />);
  expect(queryByText(/Invalid value/i)).toBeFalsy();
});

test("Error is shown for invalid", () => {
  const { queryByText } = render(<SideInput valid={false} />);
  expect(queryByText(/Invalid value/i)).toBeTruthy();
});

test("Changes in input fire the onChange handle function", () => {
  const handleChange = jest.fn();
  const { getByDisplayValue } = render(
    <SideInput value={1} onChange={handleChange} />
  );
  const input = getByDisplayValue("1");
  fireEvent.change(input, { target: { value: 2 } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});

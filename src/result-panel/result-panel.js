import React from "react";
import { TriangleType } from "../calculator/calculator";

export const ResultPanel = React.memo(props => {
  let stringType = "";
  switch (props.triangleType) {
    case TriangleType.NOT_EXIST:
      stringType = "Not exist";
      break;
    case TriangleType.EQUILATERAL:
      stringType = "Equilateral";
      break;
    case TriangleType.ISOSCELES:
      stringType = "Isosceles";
      break;
    case TriangleType.SCALENE:
      stringType = "Scalene";
      break;
    default:
      stringType = "Error";
      break;
  }
  // BUG: workaround for JSX not supports dots in data attributes from here:
  // https://github.com/Tradeshift/tradeshift-ui/issues/203#issuecomment-287276390
  const resultTopBarAttr = {
    "data-ts": "ToolBar",
    "data-ts.title": "Result"
  };
  return (
    <div data-ts="Board">
      <div {...resultTopBarAttr} />
      <div data-ts="Panel">
        <b>{stringType}</b>
      </div>
    </div>
  );
});

import React from "react";
import { SideInput } from "../side-input/side-input.js";
import { ResultPanel } from "../result-panel/result-panel";
import { calculate, TriangleType } from "../calculator/calculator.js";

export class TriangleForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sides: [
        { label: "First side", value: 1, valid: true },
        { label: "Second side", value: 1, valid: true },
        { label: "Third side", value: 1, valid: true }
      ],
      triangleType: TriangleType.EQUILATERAL
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("handle change");
    const index = event.target.name;
    const value = parseFloat(event.target.value);
    const isValid = Boolean(value) && !Number.isNaN(value) && value > 0;
    const newSides = [...this.state.sides];
    newSides[index].value = isValid ? value : event.target.value;
    newSides[index].valid = isValid;
    this.setState({ sides: newSides });
    if (newSides.every(el => el.valid)) {
      const triangleType = calculate(...newSides.map(el => el.value));
      this.setState({ triangleType });
    } else {
      this.setState({ triangleType: "" });
    }
  }

  render() {
    // BUG: workaround for JSX not supports dots in data attributes from here:
    // https://github.com/Tradeshift/tradeshift-ui/issues/203#issuecomment-287276390
    const formTopBarAttr = {
      "data-ts": "ToolBar",
      "data-ts.title": "Triangle sides"
    };
    return (
      <React.Fragment>
        <div data-ts="Board">
          <div {...formTopBarAttr} />
          <div data-ts="Panel">
            <form data-ts="Form">
              {this.state.sides.map((side, index) => (
                <SideInput
                  key={index}
                  label={side.label}
                  name={index}
                  value={side.value}
                  valid={side.valid}
                  onChange={this.handleChange}
                />
              ))}
            </form>
          </div>
        </div>
        <ResultPanel triangleType={this.state.triangleType} />
      </React.Fragment>
    );
  }
}

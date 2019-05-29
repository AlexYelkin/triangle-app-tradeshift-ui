import React from "react";
import ReactDOM from "react-dom";

import { TriangleForm } from "./triangle-form/triangle-form.js";

export class App extends React.PureComponent {
  render() {
    return <TriangleForm />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

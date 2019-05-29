import React from "react";

const dummyFunc = () => {};

export const SideInput = React.memo(props => {
  const isValid = props.valid;
  const onChange = props.onChange || dummyFunc;
  const cssClass = isValid ? "" : "ts-error";
  return (
    <fieldset>
      <label className={cssClass}>
        <span>{props.label}</span>
        <input
          type="number"
          name={props.name}
          onChange={onChange}
          value={props.value}
        />
      </label>
      {!isValid && (
        <dl className="ts-errors">
          <dt>Invalid value</dt>
          <dd>Value should be a number and be more than 0</dd>
        </dl>
      )}
    </fieldset>
  );
});

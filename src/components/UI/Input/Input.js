import React from "react";
import styled from "styled-components";
const InputElm = styled.input`
  width: 100%;
  height: 35px;
`;
const Label = styled.label`
  display: block;
  text-align: center;
  height: 35px;
  text-transform: capitalize;
  font-weight: bold;
  margin-top: 22px;
`;
const Select = styled.select`
  width: 100%;
  height: 35px;
`;
const Input = props => {
  let Element = null;
  switch (props.typeOfElement) {
    case "input":
      Element = (
        <React.Fragment>
          <Label>{props.label} </Label>
          <InputElm
            {...props.elementConfig}
            type={props.elementConfig.type}
            placeholder={props.elementConfig.placeholder}
            value={props.value}
            onChange={props.onchangeValue}
          />
        </React.Fragment>
      );
      break;
    case "textarea":
      Element = (
        <React.Fragment>
          <Label>{props.label} </Label>
          <textarea
            row="10"
            cols="20"
            value={props.value}
            onChange={props.onchangeValue}
            {...props.elementConfig}
          />
        </React.Fragment>
      );
      break;
    case "number":
      Element = (
        <React.Fragment>
          <Label>{props.label} </Label>
          <InputElm
            type="number"
            value={props.value}
            onChange={props.onchangeValue}
            {...props.elementConfig}
          />
        </React.Fragment>
      );
      break;
    case "select":
      Element = (
        <React.Fragment>
          <Label>{props.label} </Label>
          <Select onChange={props.onchangeValue}>
            {props.elementConfig.options.map((option, i) => (
              <option key={i} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </Select>
        </React.Fragment>
      );

      break;
    default:
      Element = (
        <React.Fragment>
          <Label>{props.label} </Label>
          <InputElm
            type={props.elementConfig.type}
            placeholder="default input element"
            disabled
          />
        </React.Fragment>
      );
      break;
  }
  return Element;
};

export default Input;

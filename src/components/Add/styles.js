import styled from "styled-components";

import { Button, Input, Label, Area } from "./dumb";

export const AddButton = styled(Button)`
  margin-top: 0.5em;
  padding: 0 2rem;
  cursor: pointer;
  height: 3em;
  line-height: 1em;
  color: black;
  border-radius: 2px;
  border: 1px solid #009688;
  text-transform: uppercase;
  outline: 0;
  background-color: #00bfa5;

  &:hover {
    background-color: #06d6ba;
  }
`;

export const SubmitButton = styled(Button)`
  padding: 0 2em;
  margin-left: 1em;
  height: 2em;
  border: 1px solid #009688;
  background-color: #00bfa5;

  cursor: pointer;

  &:hover {
    background-color: #06d6ba;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.content};
  align-items: ${props => props.items};
  flex-wrap: wrap;
`;

export const GroupControl = styled.div`
  padding: ${props => (props.paddingCustom ? props.paddingCustom : `1em`)};
  color: black;
  text-align: left;
  font-weight: bold;
`;

export const LabelControl = styled(Label)`
  display: inline-block;
  margin-bottom: 0.5em;
  font-size: 1em;
`;

export const InputControl = styled(Input)`
  width: 100%;
  min-height: 1em;
  border: none;
  outline: 0;
  border-bottom: 1px solid #9e9e9e;
  padding: 0;
`;

export const AreaControl = styled(Area)`
  width: 100%;
  min-height: calc(50px + 1em);
  border: none;
  outline: 0;
  border-bottom: 1px solid #9e9e9e;
  padding: 0;
`;

export const BoxControl = styled.div`
  flex: 0 0 100%;
  max-width: 100%;

  @media screen and (max-width: 700px) {
    margin-top: 5px;
  }
`;

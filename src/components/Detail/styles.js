import styled from "styled-components";

import { Button, Area, Input } from "./dumb";

export const Row = styled.div`
  margin-top: ${props => (props.top ? props.top : `7em`)};
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: ${props => (props.content ? props.content : `space-evenly`)};
  align-items: ${props => props.align};
`;

export const Title = styled.div`
  padding: 1em;
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  margin: -0.5em;
`;

export const ColHalf = styled.div`
  flex: 0 0 45%;
  max-width: 45%;
  margin: 5px;
`;

export const CardButton = styled(Button)`
  margin-left: ${props => props.marginLeft};
  background-color: ${props => (props.color ? props.color : `#009688`)};
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: calc(7px + 1vmax);
  padding: 0.5rem;
  border: none;
  width: 30%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.color === `#F44336` ? `#F44336` : `#00bfa5`};
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 10%;
  }
`;

export const LabelControl = styled.label`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const AreaControl = styled(Area)`
  width: 100%;
  font-size: 1em;
  height: calc(150px + 2.5rem);
  border: none;
  resize: none;
  outline: 0;
  line-height: 1;
`;

export const InputControl = styled(Input)`
  width: 100%;
  min-height: 2em;
  border-radius: 0.25em;
  border: 1px solid #d9d9dd;
  outline: 0;
  padding: 0;
  text-align: center;
`;

export const TitleControl = styled.p`
  height: 100%;
  padding: 1em;
  font-weight: bold;
  font-size: 1.5em;
  margin: -1em;
  border: none;
`;

export const ImgControl = styled.img`
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-position: center;
  margin: 0 2em;
`;

export const Footer = styled.footer`
  background-color: #009688;
  width: 100%;
  padding: 1em;
  display: flex;
`;

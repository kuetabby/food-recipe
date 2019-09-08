import styled from "styled-components";

import { Button, Area, Input } from "./dumb";

export const Row = styled.div`
  margin-top: ${props => (props.top ? props.top : `7em`)};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.content ? props.content : `space-evenly`)};
  align-items: ${props => props.align};
`;

export const Title = styled.div`
  background-color: #009688;
  height: 100%;
  color: white;
  padding: 2em;
  font-weight: bold;
  font-size: 1.5em;
  margin: -0.5em;
`;

export const ColHalf = styled.div`
  flex: 0 0 44%;
  max-width: 44%;
  margin: 10px;
`;

export const CardWrapper = styled.div`
  padding: 1em;
  margin: 1%;
  background-color: #009688;
  color: white;
  flex: 0 0 22%;
  max-width: 22%;
  height: 100%;
`;

export const CardButton = styled(Button)`
  margin-left: ${props => props.marginLeft};
  background-color: ${props => (props.color ? props.color : `#009688`)};
  color: white;
  text-transform: uppercase;
  padding: 1em;
  border: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.color === `#F44336` ? `#F44336` : `#00bfa5`};
  }

  @media screen and (max-width: 700px) {
    width: 50%;
  }
`;

export const AreaControl = styled(Area)`
  width: 100%;
  font-size: 1em;
  height: calc(150px + 2em);
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

export const TitleControl = styled(Input)`
  background-color: #009688;
  height: 100%;
  color: white;
  padding: 1em;
  font-weight: bold;
  font-size: 1.5em;
  margin: -1em;
  border: none;
`;

export const ParagraphControl = styled.p`
  font-weight: 500;
  height: 10%;
  width: 100%;
  font-size: 1em;
  border: none;
  outline: 0;
`;

export const ImgControl = styled.div`
  text-align: center;
  background-position: center;
  margin: 0 2em;
`;

export const Footer = styled.footer`
  background-color: #009688;
  padding: 1em;
  display: flex;
`;

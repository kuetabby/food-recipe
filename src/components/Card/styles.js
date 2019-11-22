import styled from "styled-components";

import { Button } from "./dumb";

export const CardWrapper = styled.div`
  padding: 1em;
  margin: 1%;
  background-color: #009688;
  color: white;
  flex: 1 0 30%;
  max-width: 30%;
  max-height: 100%;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 50vh;

  @media screen and (max-width: 700px) {
    height: 15vh;
  }
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

export const ParagraphControl = styled.p`
  font-weight: 500;
  height: 10%;
  width: 100%;
  font-size: calc(7px + 1vmax);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border: none;
  outline: 0;
`;

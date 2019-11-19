import styled from "styled-components";

export const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 20px;
  width: 100%;
`;

export const ModalClose = styled.span`
  color: ${props => (props.color ? props.color : `#aaaaaa`)};
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

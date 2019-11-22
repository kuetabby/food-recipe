import styled from "styled-components";

export const Row = styled.div`
  margin-top: ${props => (props.top ? props.top : `7em`)};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.content ? props.content : `space-evenly`)};
  align-items: ${props => props.align};
`;

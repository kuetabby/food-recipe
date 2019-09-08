import styled from "styled-components";

export const NavWrapper = styled.nav`
  padding: 0.5em;
  border-bottom: 2px solid #eee;
  height: 5rem;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #009688;
  color: white;
  z-index: 999;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

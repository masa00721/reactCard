import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">Home</SLink>
      <SLink to="/users">Users</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: yellowgreen;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;

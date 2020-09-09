import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: rgb(30, 30, 30, 0.8);
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 5px 2px rgb(0, 0, 0, 0.5);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  &:not(:last-child) {
    margin-right: 0px;
  }
  &:hover {
    background-color: rgb(70, 70, 70, 1);
    border-bottom: 4px solid #ff7979;
  }
  border-bottom: 4px solid
    ${(props) => (props.current ? "#eb4d4b" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));

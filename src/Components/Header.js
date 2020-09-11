import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: rgb(40, 40, 40, 1);
  position: fixed;
  height: 50px;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 5px 2px rgb(0, 0, 0, 0.5);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 60px;
  height: 50px;
  border-bottom: 4px solid
    ${(props) => (props.current ? props.color : "transparent")};
  /* color: ${(props) => (props.current ? props.color : "inherit")}; */
  background-color: ${(props) => (props.current ? "rgb(55,55,55,0.5)" : "")};
  transition: border-bottom 0.5s ease-in-out, color 0.3s ease-in-out;
  &:hover {
    /* color: ${(props) => props.color}; */
    border-bottom: 4px solid ${(props) => props.color};
    background-color: rgb(55, 55, 55, 0.5);
  }
`;
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => {
  return (
    <Header>
      <List>
        <Item color="rgb(0, 168, 255,0.7)" current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Item>
        <Item color="rgb(220, 221, 225)" current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item color="rgb(232, 65, 24,0.7)" current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
});

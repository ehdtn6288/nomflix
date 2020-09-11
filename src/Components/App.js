import React from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

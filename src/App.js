import React from "react";
import GlobalStyle from "../src/utils/GlobalStyle";

// Pages
import Home from "./Pages/Home/Home";
export default class App extends React.Component{
  render(){
    return(
      <>
      <GlobalStyle/>
      <Home/>
      
      </>
    )
  }
}
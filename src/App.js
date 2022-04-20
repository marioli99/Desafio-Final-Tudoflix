import React from "react";
import GlobalStyle from "../src/utils/GlobalStyle";
// import Header from "./Pages/Header";
// import Carousel from "../src/components/Carousel";
import Home from "./Pages/Home";

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
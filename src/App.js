import React from "react";
import GlobalStyle from "../src/utils/GlobalStyle";
import Header from "./Pages/Header";
import Carousel from "../src/components/Carousel";

export default class App extends React.Component{
  render(){
    return(
      <>
      <GlobalStyle/>
      <Header/>
      <Carousel/>
      
      </>
    )
  }
}
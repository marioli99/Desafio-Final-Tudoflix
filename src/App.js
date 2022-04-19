import React from "react";
import GlobalStyle from "./Pages/GlobalStyle";
import Header from "./Pages/Header";
import Carousel from "./Pages/Carousel";

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
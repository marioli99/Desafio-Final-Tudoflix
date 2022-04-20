import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";

const Div = styled.div`
  background-color: aquamarine;
  height: 499px;
`;

const Div2 = styled.div`
  background-color: brown;
  height: 499px;
`;

export default class MyCarousel extends React.Component {
    state= {
        imagens : [
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ]
    }
  render() {
    return (
      <Carousel
        autoplay={true}
        speed={3000}
        wrapAround={true}
        slidesToShow={5}
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "none",
          },
        }}
      >
        
        <Div></Div>
        <Div2></Div2>
        <Div></Div>
        <Div2></Div2>
        <Div></Div>
        <Div2></Div2>
      </Carousel>
    );
  }
}

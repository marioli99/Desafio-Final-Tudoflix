import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import Modal from "./DivModal";

const Div = styled.div`
  /* background-color: aquamarine; */
  height: 40px;
`;

const Div2 = styled.div`
  /* background-color: brown; */
  height: 40px;
`;

const Button = styled.button`
 width: 40vw;
 height: 10vh;
 background-color: azure;
 color:black;
`;


export default class MyCarousel extends React.Component {
    state= {
        imagens : [
            {taAberto: false},
            {taAberto2: false},
        ],
  
  
    }

    handle = () => {
      this.setState({ taAberto: !this.state.taAberto });
    };
    handle2 = () => {
      this.setState({ taAberto2: !this.state.taAberto2 });
    };
  render() {
    return (
      <>
      <Carousel
        autoplay={true}
        speed={3000}
        wrapAround={true}
        slidesToShow={1}
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "none",
          },
        }}
      >
        
        <Div> <Button onClick={this.handle}>Text Modal</Button></Div>
        <Div2> <Button onClick={this.handle2}>Text Modal</Button></Div2>
        
       
      </Carousel>
        {this.state.taAberto && <Modal />}
        {this.state.taAberto2 && <Modal />}
      </>
    );
  }
}

import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import Modal from "./DivModal";
import { State } from "../utils/State";

const Button = styled.button`
 border: none;

 img{
   width: 21vw;
 }
 
`;
const DivState = styled.div `
  height: 45vh;
  margin-bottom: 15px;

  p{
    font-size: 11px;
  }

  h3{
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 10px;
  }
`;


export default class MyCarousel extends React.Component {
    state= {
        modalState : [
            {taAberto: false},
            {taAberto2: false},
        ],
  
    }


    handle = () => {
      this.setState({ taAberto2: !this.state.taAberto2 });
    };
  render() {
    return (
      <>
      <Carousel
        autoplay={true}
        speed={3000}
        wrapAround={true}
        slidesToShow={4.5}
        defaultControlsConfig={{
          nextButtonText:">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "none",
          }
        }}
        cellSpacing={20}
        adaptiveHeight={true}
      >
        
        {State.filmes.map((item)=>(
          <DivState>
           <Button onClick={this.handle}><img src={item.Image} alt=""/></Button>
           <h3>{item.title}</h3>
           <p>{item.text}</p>

          </DivState>
        ))}
        
      </Carousel>
        {this.state.taAberto && <Modal />}
        {this.state.taAberto2 && <Modal />}
        

      {/* closeModal = () => {
    this.setState({ stateModal: false });
   }; */}
      </>
    );
  }
}

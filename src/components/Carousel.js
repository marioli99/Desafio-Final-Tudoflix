import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import Modal from "./DivModal";
import Shrek from "../utils/img/Sherek.png";
import Sozinho from "../utils/img/sozinho.png";
import Miranha from "../utils/img/Miranha.png";
import Sonho from "../utils/img/sonho.png";
import QueHoras from "../utils/img/Quehoras.png"




const Button = styled.button`
 border: none;

 img{
   width: 21vw;
 }
 
`;
const DivState = styled.div `
  height: 45vh;

  p{
    font-size: 11px;
  }

  h3{
    font-size: 15px;
  }
`;


export default class MyCarousel extends React.Component {
    state= {
        modalState : [
            {taAberto: false},
            {taAberto2: false},
        ],
  
    }

    stateFilmes = {
      filmes : [
        {
          Image:Shrek,
          title:"Shrek",
          text: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."
        },
        {
          Image:Sozinho,
          title:"Hoje Eu Quero Voltar…",
          text: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
        },
        {
          Image:Miranha,
          title:"Spider-man",
          text: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
        },
        {
          Image:Sonho,
          title:"Um Sonho de Liberdade",
          text: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
        },
        {
          Image:QueHoras,
          title:"Que Horas Ela Volta?",
          text: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
        },
      ]
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
        cellSpacing={10}
        adaptiveHeight={true}
      >

        {/* <Button onClick={this.handle}><img src={item.Image} alt=""/></Button> */}
        {this.stateFilmes.filmes.map((item)=>(
          <DivState>
           <Button onClick={this.handle}><img src={item.Image} alt=""/></Button>
           <h3>{item.title}</h3>
           <p>{item.text}</p>

          </DivState>
        ))}
        
      </Carousel>
        {this.state.taAberto && <Modal />}
        {this.state.taAberto2 && <Modal />}
      </>
    );
  }
}

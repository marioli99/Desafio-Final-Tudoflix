import React from "react";
import Shrek from "../utils/img/Sherek.png";
import Sozinho from "../utils/img/sozinho.png";
import Miranha from "../utils/img/Miranha.png";
import Sonho from "../utils/img/sonho.png";
import QueHoras from "../utils/img/Quehoras.png"
import Rock from "../utils/img/rock.jpeg";
import Amarelo from "../utils/img/amarelo.jpeg";
import Galinhas from "../utils/img/galinhas.jpeg";

import {MaxContainer,ContainerState,Container} from "../styles/StylePages"



export default class Todos extends React.Component{
    state = {
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
          {
            Image: Galinhas,
            title:"A Fuga das Galinhas",
            text: "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro."
          },
          {
            Image: Amarelo,
            title:"AmarElo",
            text: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."
          },
          {
            Image: Rock,
            title:"Rocketman",
            text: "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história."
          },
        ]
      }
  
    render (){
        return(
            <MaxContainer>
            
            <h2>Todos</h2>
            <Container>
            {this.state.filmes.map((item) => (
                <ContainerState>
                    <img src={item.Image} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </ContainerState>
            ))}
            </Container>
            </MaxContainer>
        )
    }
}
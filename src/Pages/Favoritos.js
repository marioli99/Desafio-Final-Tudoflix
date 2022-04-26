import React from "react";
import Sozinho from "../utils/img/sozinho.png";
import Miranha from "../utils/img/Miranha.png";
import Amarelo from "../utils/img/amarelo.jpeg";
import {MaxContainer,ContainerState,ContainerTwo} from "../styles/StylePages"



export default  class Favoritos extends React.Component{

    state = {
        filmes : [
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
                Image: Amarelo,
                title:"AmarElo",
                text: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."
              },
        ]
    }
    render (){
        return(
            <MaxContainer>
            <h2>Favoritos</h2>
            <ContainerTwo>
                {this.state.filmes.map((item) => (
                    <ContainerState>
                        <img src={item.Image} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </ContainerState>
                ))}
            </ContainerTwo>
            </MaxContainer>
        )
    }
}
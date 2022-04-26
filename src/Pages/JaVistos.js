import React from "react";
import {MaxContainer,ContainerState,ContainerTwo} from "../styles/StylePages"
import Galinhas from "../utils/img/galinhas.jpeg";

export default class Visto extends React.Component{
    state = {
        filmes : [
            {
                Image: Galinhas,
                title:"A Fuga das Galinhas",
                text: "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro."
              },
        ]
    }
    render (){
        return(
            <MaxContainer>
            <h2>Já Vistos</h2>
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
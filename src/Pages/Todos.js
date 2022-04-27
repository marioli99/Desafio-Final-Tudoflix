import React from "react";
import { State } from "../utils/State"
import {MaxContainer,ContainerState,Container} from "../styles/StylePages"



export default class Todos extends React.Component{
    render (){
        return(
            <MaxContainer>
            
            <h2>Todos</h2>
            <Container>
            {State.filmes.map((item) => (
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
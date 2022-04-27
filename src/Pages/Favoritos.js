import React from "react";
import {MaxContainer,ContainerState,ContainerTwo} from "../styles/StylePages"
import { State } from "../utils/State"



export default  class Favoritos extends React.Component{
    render (){
        return(
            <MaxContainer>
            <h2>Favoritos</h2>
            <ContainerTwo>
                {State.favoritos.map((item) => (
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
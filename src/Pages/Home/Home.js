import React from "react";
import Carousel from "../../components/Carousel"
import"../../components/DivModal"
// import Header from "../Header";
import CapitaoImg from "../../utils/img/Capitao.png" 
import styled from "styled-components";

const Visto = styled.div`
display: flex;
`;

const Infos = styled.div`
width: 30vw;
 p {
     font-size: 14px;
     text-align: left;
 }
 h3{
     font-size: 16px;
 }
`;

export default class Home extends React.Component{
    render(){
        return(
            <>
            {/* <Header/> */}
            <Visto>
            <><img src={CapitaoImg} alt=""/></>
            <Infos><h3>Visto recentemente</h3>
            <h1>Capitao Fantástico</h1>
            <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p></Infos>
            
            </Visto>
            
            <h1>Destaques</h1>
            <Carousel/>
            
            </>
        )
    }
}
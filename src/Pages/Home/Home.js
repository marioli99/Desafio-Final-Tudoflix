import React from "react";
import Carousel from "../../components/Carousel"
import"../../components/DivModal"
// import Header from "../Header";
import CapitaoImg from "../../utils/img/Capitao.png" 
import Coracao from "../../utils/img/coracao.png"
import styled from "styled-components";


const Visto = styled.div`
display: flex;
padding-left: 65px;
`;
const Destaque = styled.div`
padding-left: 65px;
margin-top:5%;
h2{
    font-size: 30px;
    margin-bottom: 15px;
}

`;
const Infos = styled.div`
margin-top: 30px;
width: 36vw;
padding-left: 60px;

 p {
     font-size: 14px;
     text-align: left;
     padding-bottom: 5px;

 }
 h3{
     font-size: 16px;
     padding-bottom: 5px;
     }
 h1{
    padding-bottom: 5px;

 }
 img:hover{
     cursor: pointer;
 }
`;

export default class Home extends React.Component{
    render(){
        return(
            <>
            {/* <Header/> */}
            <Visto>
            <><img src={CapitaoImg} alt=""/></>
           
            <Infos>
            <img src={Coracao} alt=""/>    
            <h3>Visto recentemente</h3>
            <h1>Capitao Fantástico</h1>
            <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p></Infos>
            
            </Visto>
            <Destaque>
                <h2>Destaques</h2>
                 <Carousel/>
            </Destaque>
            
        
            
            </>
        )
    }
}
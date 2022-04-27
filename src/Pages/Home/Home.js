import React from "react";
import Carousel from "../../components/Carousel"
import"../../components/DivModal"
import CapitaoImg from "../../utils/img/Capitao.png" 
import Coracao from "../../utils/img/coracao.png"
import { Visto, Infos , Destaque } from "../../styles/StyleHome";

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
import React from "react";
// Imagens
import logo from "../img/logoo.png"
import PerfilImg from "../img/Perfil.jpg";
import Seta from "../img/Seta.png"
// CSS Dropdown
import {Ul,Li,Logo,LiDrop,SectionInput,DivSec, Container,Add,Pesquisa,Perfil} from "../styles/StyleHeader"
import "../styles/drop.css"



export default class Header extends React.Component{
    render(){
        return(
            
            <Container>
            <Logo src={logo} alt="TudoFlix"/>
            <nav>
              <Ul>
                <Li>Inicio</Li>
                <Li className="dropdown">
                <to className="dropbtn">Categorias </to>
                <div className="dropdown-content">
            
                  <ul>
                 <LiDrop>Todos</LiDrop>
                 <LiDrop>Favoritos</LiDrop>
                 <LiDrop >Já Vistos</LiDrop>
                 </ul>
                 </div>
                 </Li>

                 {/* <img src={Seta} alt=""/>  AJUSTAR 
                 ] */} 
              </Ul>

            </nav>
            <SectionInput>
            <DivSec><Add>Adicionar Filme</Add></DivSec>
            <DivSec><Pesquisa type={'text'} placeholder=" Pesquisar"  /></DivSec>
            </SectionInput>

            <Perfil src={PerfilImg} alt="TudoFlix"/>
            <img src={Seta} alt=""/>
            
            </Container>
            
        )
    }
}

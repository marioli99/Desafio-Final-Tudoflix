import React from "react";
import styled from "styled-components";
// Imagens
import logo from "../img/logoo.png"
import Perfil from "../img/Perfil.jpg";
import pesquisa from "../img/lupa.png"
import Seta from "../img/Seta.png"
// CSS Dropdown
import "../Pages/drop.css"
// import Carousel from "nuka-carousel";

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: auto;
  padding: 10px 0;
  background-color: black;
`;

const Logo = styled.img`
height: 7vh;
width: 8vw;
margin-left: 5%;
display: flex;
`;

const Pf = styled.img`
height: 7vh;
width: 3vw;
display: flex;
`;

const Ul = styled.ul`
display: flex;
margin:10px 20px 0 ;
`;

const Li = styled.li`
color: #fff;
margin-left: 10px;
font-weight: bold;
font-size: 13px;

:hover{
  background-color: red;
  cursor: pointer;
}
`;

const S = styled.div`
padding: 5px;
`;

const Add = styled.button`
width: 9vw;
height: 2.5vw;
border-radius: 3px;
border: none;
color:#fff;
background-color: red;
font-size: 12.5px;

`;

const Pesquisa = styled.input`
width: 30vw;
color: white;
height: 2.5vw;
background-color: #2C2C2C;
border: none;
border-radius: 3px;
background-image:url(${pesquisa}) ;
background-repeat: no-repeat;
background-position: 5px 6px;

::placeholder{
  font-size: 12px;
  font-weight: bold;
  padding: 7% 0 0 7%;
  color: #FFFFFF;
  
}
`;

const Oi = styled.section`
display: flex;
margin-left: 25%;
`;

const SubLi = styled.li`
margin: 10px 0 5px;
`;



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
                 <SubLi>Todos</SubLi>
                 <SubLi>Favoritos</SubLi>
                 <SubLi >Já Vistos</SubLi>
                 </ul>
                 </div>
                 </Li>

                 {/* <img src={Seta} alt=""/>  AJUSTAR 
                 ] */}
                 
                 
              </Ul>
              
            </nav>
            <Oi>
            <S><Add>Adicionar Filme</Add></S>
            <S><Pesquisa type={'text'} placeholder=" Pesquisar"  /></S>
            </Oi>

            <Pf src={Perfil} alt="TudoFlix"/>
            <img src={Seta} alt=""/>
            
           
           
            </Container>
            
        )
    }
}

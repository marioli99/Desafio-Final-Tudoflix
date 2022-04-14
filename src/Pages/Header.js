import React from "react";
import logo from "../img/logoo.png"
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: black;

`;

const Logo = styled.img`
height: 10vh;
width: 8vw;
`;

const Nav = styled.nav`
 display: flex;
 
`;

const Ul = styled.ul`
display: flex;
`;

const Li = styled.li`
display: flex;
color:#fff;


`;
const Add = styled.button`
width: 10vw;
height: 3vw;
border-radius: 5px;
color:#fff;
background-color: red;
`;

const Pesquisa = styled.input`
width: 25vw;
height: 3vw;
`;



export default class Header extends React.Component{
    render(){
        return(
            <Container>
            <Logo src={logo} alt="TudoFlix"/>
            <Nav>
                <Ul>
                    <Li>Indice</Li>
                    <Li>Categorias</Li>
                </Ul>
            </Nav>

            <Add>Adicionar Filme</Add>
            <Pesquisa type={'text'} placeholder="Pesquisar..."/>
            </Container>
        )
    }
}

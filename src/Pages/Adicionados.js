import React from "react";
import styled from "styled-components";

const Container = styled.div `
margin-left: 60px;

p{
    margin-top: 20px
    
}
`;

export default class Adicionados extends React.Component{
    render (){
        return(
            <Container>
            <h2>Adicionados</h2>
            <p>Nenhum Filme Adicionado </p>
            </Container>
        )
    }
}
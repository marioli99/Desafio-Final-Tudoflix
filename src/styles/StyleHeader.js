import styled from "styled-components";
import pesquisa from "../utils/img/lupa.png"

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: auto;
  padding: 10px 0;
  background-color: black;
`;

export const Logo = styled.img`
height: 7vh;
width: 8vw;
margin-left: 5%;
display: flex;
`;

export const Perfil = styled.img`
height: 7vh;
width: 3vw;
display: flex;
`;

export const Ul = styled.ul`
display: flex;
margin:10px 20px 0 ;
`;

export const Li = styled.li`
color: #fff;
margin-left: 10px;
font-weight: bold;
font-size: 13px;

:hover{
  background-color: red;
  cursor: pointer;
}
`;

export const DivSec = styled.div`
padding: 5px;
`;

export const DivAdd = styled.div `
padding: 5px;
`;

export const Add = styled.button`
width: 9vw;
height: 2.5vw;
border-radius: 3px;
border: none;
color:#fff;
background-color: red;
font-size: 12.5px;
cursor: pointer;

:hover{
  opacity:40%;
}

`;

export const Pesquisa = styled.input`
width: 30vw;
color: white;
height: 2.5vw;
background-color: #2C2C2C;
border: none;
border-radius: 3px;
background-image:url(${pesquisa}) ;
background-repeat: no-repeat;
background-position: 5px 6px;
padding-left: 30px;
cursor: pointer;


::placeholder{
  font-size: 12px;
  font-weight: bold;
  color: #FFFFFF;
  
}
`;

export const SectionInput = styled.section`
display: flex;
margin-left: 25%;
`;

export const LiDrop = styled.li`
margin: 10px 0 5px;
`;

export const DivBusca = styled.div`
display: flex;
flex-direction: column;

img{
  width: 21vw;
}

.Busca{
  margin-top: 600px;
}


`;
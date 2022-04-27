import React from "react";
import ReactStars from "react-rating-stars-component";
import Capa from "../utils/img/img.png"
import {Container, SubContainer, ContainerFile, Radios, File, InputName, InputDes, Buttons, Confirmar} from "../styles/StyleModalAdd"




export default class ModalAdd extends React.Component {
  render() {
    return (
      <Container>
      
      <SubContainer>
      <h3>Adicionar Filme</h3>
      <p>Nome </p>
      <InputName type={"text"}/>

      <p>Descrição</p>
      <InputDes type={"text"}/>
      <p>Status</p>
      <Radios>
      <input type={'radio'} name="Já Asisti"  /> Já Asisti
      <input type={'radio'} name= "Ainda não asisti"/>Ainda não asisti
      </Radios>
    
      <p>Nota</p>

      <ReactStars 
      size={40}
      char="✰"/>

      <Buttons>
        <button>Cancelar</button>
        <Confirmar>Confirmar</Confirmar>
        </Buttons>
      
      </SubContainer>
      <ContainerFile>
      <p>Imagem de capa </p>
      <img src={Capa} alt='' />
      <File>
      <label for="name" class="btnPerson">Selecionar Imagem</label>
      <input type={'file'} id="name" accept="image/*" name="capaFilme" />
      </File>
  
      </ContainerFile>
      
      </Container>
    );
  }
}

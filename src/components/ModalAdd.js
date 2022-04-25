import React from "react";
import styled from "styled-components";


const Container = styled.div`
border: solid blueviolet 10px;
width: 50vw;
height: 50vh;
position: absolute;
top: 20%;
left:20%;
z-index: 1;
`;

export default class ModalAdd extends React.Component {
  render() {
    return (
      <Container>
        <h3>Modal Add</h3>
      </Container>
    );
  }
}

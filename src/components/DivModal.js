import React from "react";
import style from "styled-components";
const Container = style.div`
border: solid red;
width: 50vw
`;

export default class Modal extends React.Component {
  render() {
    return (
      <Container>
        <h3>Apenas um teste : D</h3>
      </Container>
    );
  }
}

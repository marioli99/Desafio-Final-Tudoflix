import styled from "styled-components";

export const Container = styled.form`
border: solid #585858;
border-radius: 20px;
width: 50vw;
height: 85vh;
position: absolute;
top: 10%;
left:25%;
z-index: 1;
display: flex;
justify-content: space-around;
`;

export const SubContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 5%;

p{
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
}
h3{
 margin-bottom: 40px;
 font-weight: lighter;
}
`;

export const ContainerFile = styled.div`
margin-top: 15%;
img{
  width: 15vw;
  height: 18vh;
  border: solid #585858 1px;
}
p{
  font-size: 15px;
}
`;

export const Radios = styled.div`
display: flex;
margin-top:5%;
font-size: 12px;
margin-bottom: 10px;

input {
  margin-left: 20px;
}


`;

export const File = styled.div`
input[type="file"] {
  display: none;
}
.btnPerson {
  text-align: center;
  background-color: white;
  font-size: 12px;
  padding: 8px;
  border-radius: 5px;
  color: black;
  line-height: 50px;
  cursor: pointer;

  :hover{
    border: solid white 2px;
  }
}


`;

export const InputName = styled.input`
height: 5vh;
width: 25vw;
border: none;
border-radius: 3px;
background-color: #2C2C2C;
`;

export const InputDes = styled.input`
height: 10vh;
width: 25vw;
border: none;
border-radius: 3px;
background-color: #2C2C2C;
`;


export const Buttons = styled.div`
  width: 20px;
  display: flex;
  margin-left: 10rem;

  button {
    border: none;
    cursor: pointer;
    padding: 5px;
    :hover {
      text-decoration: underline;
    }
  }
  
`;

export const Confirmar = styled.button`
  margin-left: 10px;
  background-color: #E71B27;
  border: none;
`;

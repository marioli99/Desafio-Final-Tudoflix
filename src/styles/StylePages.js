import styled from "styled-components";

export const MaxContainer = styled.div `
margin: 20px 60px 20px 60px;
h2{
    margin-bottom: 20px;
}
`;

export const Container = styled.div `
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
`;

export const ContainerTwo = styled.div `
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
`;

export const ContainerState = styled.ul`
   display: flex;
   flex-direction: column;
   width: 21vw;

   img{
       width: 21vw;
   }
   h3{
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
   }

   p{
    font-size: 12px;
    margin-bottom: 60px;
   }
`;
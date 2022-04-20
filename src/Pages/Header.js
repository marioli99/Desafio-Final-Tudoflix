import React from "react";
// Imagens
import logo from "../utils/img/logoo.png"
import PerfilImg from "../utils/img/Perfil.jpg";
import Seta from "../utils/img/Seta.png"
// CSS Dropdown
import {Ul,Li,Logo,LiDrop,SectionInput,DivSec, Container,Add,Pesquisa,Perfil} from "../styles/StyleHeader"
import "../styles/drop.css"
// Routes
import { BrowserRouter as Router , Link , Routes , Route } from "react-router-dom";
import Todos from "../Pages/Todos";
import Favoritos from "../Pages/Favoritos";
import Vistos from "../Pages/JaVistos";
import Adicionados from "../Pages/Adicionados";




export default class Header extends React.Component{
    render(){
        return(
            <Router>
            <Container>
            <Logo src={logo} alt="TudoFlix"/>
            <nav>
              <Ul>
                <Li>Inicio</Li>
                <Li className="dropdown">
                <to className="dropbtn">Categorias </to>
                <div className="dropdown-content">
            
                  <ul>
                 <LiDrop><Link to = "/movies">Todos</Link></LiDrop>
                 <LiDrop><Link to = "/movies/favorites">Favoritos</Link></LiDrop>
                 <LiDrop><Link to = "/movies/ever-seen">Já Vistos</Link></LiDrop>
                 <LiDrop><Link to = "/movies/add">Adicionados</Link></LiDrop>
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
            <Routes>
            <Route path="/movies" element={<Todos/>}/>
            <Route path="/movies/Favorites" element={<Favoritos/>}/>
            <Route path="/movies/ever-seen" element={<Vistos/>}/>
            <Route path="/movies/add" element={<Adicionados/>}/>
            </Routes>
            </Router>
            
        )
    }
}

import React from "react";
import GlobalStyle from "../src/utils/GlobalStyle"
// Imagens
import logo from "../src/utils/img/logoo.png"
import PerfilImg from "../src/utils/img/Perfil.jpg";
import Seta from "../src/utils/img/Seta.png"
// CSS Dropdown
import {Ul,Li,Logo,LiDrop,SectionInput,DivSec, Container,Add,Pesquisa,Perfil} from "../src/styles/StyleHeader"
import "../src/styles/drop.css"
// Routes
import { BrowserRouter as Router , Link , Routes , Route } from "react-router-dom";
import Todos from "../src/Pages/Todos";
import Favoritos from "../src/Pages/Favoritos";
import Vistos from "../src/Pages/JaVistos";
import Adicionados from "../src/Pages/Adicionados";
import Home from "./Pages/Home/Home";

export default class Header extends React.Component{
    render(){
        return(
            <Router>
            <GlobalStyle/>
            
            <Container>
            <Logo src={logo} alt="TudoFlix"/>
            <nav>
              <Ul>
                <Li><Link to="/">Inicio</Link></Li>
                <Li className="dropdown">
                <to className="dropbtn">Categorias </to>
                <div className="dropdown-content">
            
                  <ul>
                 {/* <LiDrop><Link to = "/">Inicio</Link></LiDrop> */}
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
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Todos/>}/>
            <Route path="/movies/Favorites" element={<Favoritos/>}/>
            <Route path="/movies/ever-seen" element={<Vistos/>}/>
            <Route path="/movies/add" element={<Adicionados/>}/>
            </Routes>

            
            </Router>
            
        )
    }
}

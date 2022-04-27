import React from "react";
import GlobalStyle from "../src/utils/GlobalStyle"
import ModalAdd from "./components/ModalAdd";
// Imagens
import logo from "../src/utils/img/logoo.png"
import PerfilImg from "../src/utils/img/Perfil.jpg";
import Seta from "../src/utils/img/Seta.png"
// CSS Dropdown
import {Ul,Li,Logo,LiDrop,SectionInput,DivSec, Container,Add,Pesquisa,Perfil, DivAdd} from "../src/styles/StyleHeader"
import "../src/styles/drop.css"
// Routes
import { BrowserRouter as Router , Link , Routes , Route } from "react-router-dom";
import Todos from "../src/Pages/Todos";
import Favoritos from "../src/Pages/Favoritos";
import Vistos from "../src/Pages/JaVistos";
import Adicionados from "../src/Pages/Adicionados";
import Home from "./Pages/Home/Home";

export default class Header extends React.Component{

  state= {
    imagens : [
        {taAberto: false}
    ],}

    handleAdd = () => {
      this.setState({ taAberto: !this.state.taAberto });
    };

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
                 <Link to = "/movies"><LiDrop>Todos</LiDrop></Link>
                 <Link to = "/movies/favorites"><LiDrop>Favoritos</LiDrop></Link>
                 <Link to = "/movies/ever-seen"><LiDrop>Já Vistos</LiDrop></Link>
                 <Link to = "/movies/add"><LiDrop>Adicionados</LiDrop></Link>
                 </ul>
                 </div>
                 </Li>

                 {/* <img src={Seta} alt=""/>  AJUSTAR 
                 ] */} 
              </Ul>

            </nav>
            <SectionInput>
            <DivSec><Add onClick={this.handleAdd}>Adicionar Filme</Add>
            <DivAdd>{this.state.taAberto && <ModalAdd/>}</DivAdd>
            </DivSec>
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

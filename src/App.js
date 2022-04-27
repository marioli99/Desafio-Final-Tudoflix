import React from "react";
import GlobalStyle from "../src/utils/GlobalStyle"
import ModalAdd from "./components/ModalAdd";
// Imagens
import logo from "../src/utils/img/logoo.png"
import PerfilImg from "../src/utils/img/Perfil.jpg";
import Seta from "../src/utils/img/Seta.png";
// import Pesquisa from "../src/utils/img/lupa.png";
// CSS Dropdown
import {Ul,Li,Logo,LiDrop,SectionInput,DivSec, Container,Add,Pesquisa,Perfil, DivAdd, DivBusca} from "../src/styles/StyleHeader"
import "../src/styles/drop.css"
// Routes
import { BrowserRouter as Router , Link , Routes , Route } from "react-router-dom";
import Todos from "../src/Pages/Todos";
import Favoritos from "../src/Pages/Favoritos";
import Vistos from "../src/Pages/JaVistos";
import Adicionados from "../src/Pages/Adicionados";
import Home from "./Pages/Home/Home";

import Shrek from "../src/utils/img/Sherek.png";
import Sozinho from "../src/utils/img/sozinho.png";
import Miranha from "../src/utils/img/Miranha.png";
import Sonho from "../src/utils/img/sonho.png";
import QueHoras from "../src/utils/img/Quehoras.png"
import Rock from "../src/utils/img/rock.jpeg";
import Amarelo from "../src/utils/img/amarelo.jpeg";
import Galinhas from "../src/utils/img/galinhas.jpeg";



export default class Header extends React.Component{

  state= {
    imagens : [
        {taAberto: false}
    ],
    filmes : [
      {
        Image:Shrek,
        title:"Shrek",
        text: "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão."
      },
      {
        Image:Sozinho,
        title:"Hoje Eu Quero Voltar…",
        text: "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga."
      },
      {
        Image:Miranha,
        title:"Spider-man",
        text: "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo."
      },
      {
        Image:Sonho,
        title:"Um Sonho de Liberdade",
        text: "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão."
      },
      {
        Image:QueHoras,
        title:"Que Horas Ela Volta?",
        text: "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel."
      },
      {
        Image: Galinhas,
        title:"A Fuga das Galinhas",
        text: "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro."
      },
      {
        Image: Amarelo,
        title:"AmarElo",
        text: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira."
      },
      {
        Image: Rock,
        title:"Rocketman",
        text: "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história."
      },
    ],

    filterFilmes : []
  }

    handleAdd = () => {
      this.setState({ taAberto: !this.state.taAberto });
    };

    handleChange = (e) => {
      if (e.target.value !== "") {
        this.setState({
          filterFilmes: this.state.filmes.filter((item) => {
            if (
              item.title.toLowerCase().includes(e.target.value.toLowerCase())
            ) {
              return true;
            }
          })
        });
      } else {
        this.setState({
          filterFilmes: []
        });
      }
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
            <DivSec>
          
            <Pesquisa 
            onChange={this.handleChange} 
            type={'text'} placeholder=" Pesquisar" />
            
            </DivSec>
            
            </SectionInput>

            <Perfil src={PerfilImg} alt="TudoFlix"/>
            <img src={Seta} alt=""/>

           
            {this.state.filterFilmes.map ((item) => (
              <DivBusca className="Busca">
                <img src={item.Image} alt = ""/>
                {item.title}
              </DivBusca>
            ))}
            

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

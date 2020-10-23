import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBView,
 
} from "mdbreact";
import { Card, Button, CardDeck } from "react-bootstrap";
import { BrowserRouter as Router, Link} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import FooterPage from "../Components/Footer"
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";
import retrato from "../img/retrato.png";
import japan from "../img/proyectouno.png";
import gav from "../img/gav.png";
import unimarc from "../img/unimarc.png";
import "../styleCSS/About.css"
import cv from "../img/cv.pdf"
import calendar from "../img/calendar.png"


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <div>
        <header>
          
            <MDBNavbar color="white" dark expand="md" fixed="top">
              <MDBNavbarBrand >
                <img className="logo" src={logo} alt="imglogo" />
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler className="burger"  onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav
                  className="mt-4 "
                  style={{
                    fontFamily: "Merriweather",
                    fontSize: "1.3em",
                    fontWeight: "400",
                  }}
                >
                  <MDBNavItem active>
                    <MDBNavLink
                      className=""
                      style={{ color: "rgba(89, 89, 89, 1)" }}
                      to="/" 
                    >
                      Inicio
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink 
                      className=""
                      style={{ color: "rgba(89, 89, 89, 1)" }}
                      to="/JapanQueen"
                     
                    >
                     Proyectos
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className=""
                      style={{ color: "rgba(89, 89, 89, 1)" }}
                      to="/About"
                    >
                      Sobre Mi
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavbarBrand >
                    <a href="mailto:carla.renee.diazc@gmail.com"><img className="cont" src={contacto} alt="imgcontacto" /></a>
                  </MDBNavbarBrand>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          

         
            <div  className="flex-center ctnAbouview" >
            
              <div className="">
              
                <div className="flex-center ">
                
                  <img className="retratoAbout " src={retrato} alt="imgretrato" />
                </div>
                
                <div className="textoabout text-center ">
               
                  <h5 className="UnPoco">
                      <mark style={{background:"rgba(255, 88, 51, 0.7)", color:"#595959"}}>Un poco más sobre mi</mark>
                   
                  </h5>
                  <br></br>
                  <p className="miNombre container text-center">
                  <strong>Mi nombre es Carla Díaz.</strong> Vivo en la constante búsqueda de conocimiento y capacitación. Me caracterizo por ser una persona reflexiva y empática, que busca siempre cuestionar problemas y así mismo buscar soluciones. 
                  </p>
                  <br></br>
                  <p className="disfruto container text-center">
                  Disfruto mucho de la vida social y de compartir con todo tipo de personas, pero por sobre todo, con gente creativa y positiva. Quienes me motivan para seguir creciendo y creando para compartir nuevas ideas con el mundo.
                  </p>
                  <a href={cv} target="blank"><Button
                 variant="#FF3C38"
                 style={{
                
                   borderRadius: "8px",
                   fontFamily: "Montserrat",
                   color:"white",
                   fontWeight: "700",
                   background: "#FF3C38",
                   marginTop:"3rem"
                 }}
               >
                 Ver Currículum
               </Button></a>
                </div>
              
              </div>
              
            </div>
          
        </header>
        <div className="ctnAbout container col-sm-12 col-md-12 ">
              <div className=" ">
                <h5 className="mot text-center ">
                  
                    Motivaciones Profesionales
              
                </h5>
                <div className="ctnExpJapan col-sm-12  ">
          <div className="">
            <div className="row textMot">
              <div className=" col-sm-12 col-md-6 ">
               
                <p
                  className="medeclaro 
                "
                >
                Me declaro como una ferviente <strong>autodidacta</strong>, siempre con la necesidad y motivación de crear. Estoy constantemente en reinvención, cumpliendo cada objetivo que me he propuesto en la vida. En el presente, mi interés por el diseño UX/UI ha crecido a medida que estoy más cerca de la tecnología y así también, la necesidad de convertirme en diseñadora, poder <strong>crear interfaces legibles, amigables y accesibles a las personas.</strong>
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className="siBien ">
                Si bien no poseo una basta experiencia, tengo voluntad y disciplina, que creo es lo más importante ante cualquier desafío que se venga en el futuro, además de poder demostrar que soy una profesional que soluciona problemas con un enfoque creativo y siempre pensando en los usuarios. Creo firmemente que seré un aporte en cualquier equipo de trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
       
              </div>
              
            </div>
            <div className="ctnEdu container col-sm-12 col-md-11 ">
              
              <h5 className="edu  col-sm-12 ">Educación</h5>
                
          
            <div className="row col-sm-12">
              <div className=" col-sm-12 col-md-6 ">
               <br></br>
             
            <br></br>
           
            <p className="boot  ">Bootcamp Laboratoria</p>
            <p className="fe ">Front end Developer</p>
            <p className="fecha "> <img className="calendar " src={calendar} alt="caelndar" /> Marzo - Septiembre 2020</p>
            <br></br>
            <p className="uni ">Universidad Uniacc</p>
            <p className="dip ">Diplomado en Gestión Cultural</p>
            <p className="fecha "><img className="calendar " src={calendar} alt="caelndar" /> Noviembre 2012</p>
            <br></br>
            <p className="uni ">Universidad UNIACC</p>
            <p className="artes ">Artes Visuales y Fotografía</p>
            <p className="fecha  "><img className="calendar " src={calendar} alt="caelndar" /> Marzo 2008 - Noviembre 2012</p>
       
              </div>
              <div className=" float-right  ">
                <h5 className="habilidades col-sm-12 ">
                Habilidades técnicas
                </h5>
                <br></br>
                <br></br>
                <div className="tagHabilidades container col-sm-12 col-md-11">
                <p> <mark
                              style={{
                                background: "rgba(37, 222, 178, 0.3)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}
                            >Design Thinking</mark></p>
                <p><mark  style={{
                                background: "rgba(37, 222, 178, 0.3)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}>Metodología DCU</mark></p>
                <p><mark style={{
                                background: "rgba(37, 222, 178, 0.3)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}>Wireframing</mark></p>
                <p><mark style={{
                                background: "rgba(37, 222, 178, 0.3)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}>User Persona</mark></p>
                <p><mark style={{
                                background: "rgba(37, 222, 178, 0.3)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}>Benchmark</mark></p>
                <p><mark style={{
                                background: "rgba(37, 222, 178, 0.3)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}>Html</mark></p>
                <p><mark style={{
                                background: "rgba(37, 222, 178, 0.3)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}>JavaScript</mark></p>
                <p><mark style={{
                                background: "rgba(37, 222, 178, 0.3)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}>React</mark></p>
                <p><mark style={{
                                background: "rgba(37, 222, 178, 0.3)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}>Css</mark></p>
                </div>
              </div>
            
            </div>
            
           
        
       
       
            
              
            </div>
            
           {/*} <div className="ctnEdu container col-sm-12 col-md-11">
            <h5 className="edu container col-sm-12  ">Educación</h5>
            <br></br>
            <br></br>
            <div className=" col-sm-12 col-md-6"></div>
            <p className="boot col-sm-12 ">Bootcamp Laboratoria</p>
            <p className="fe col-sm-12">Front end Developer</p>
            <p className="fecha col-sm-12"> <img className="calendar " src={calendar} alt="caelndar" /> Marzo - Septiembre 2020</p>
            <br></br>
            <p className="uni col-sm-12">Universidad Uniacc</p>
            <p className="dip col-sm-12">Diplomado en Gestión Cultural</p>
            <p className="fecha col-sm-12 "><img className="calendar " src={calendar} alt="caelndar" /> Noviembre 2012</p>
            <br></br>
            <p className="uni col-sm-12">Universidad UNIACC</p>
            <p className="artes col-sm-12">Artes Visuales y Fotografía</p>
            <p className="fecha col-sm-12 "><img className="calendar " src={calendar} alt="caelndar" /> Marzo 2008 - Noviembre 2012</p>
           
           <div className="herramientas col-sm-12 col-md-6">
             <h5>Herramientas</h5>
           </div>
      
                </div>*/}
            
        <FooterPage />
      </div>
    );
  }
}

export default About;

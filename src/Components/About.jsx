import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  
} from "mdbreact";
import { Button} from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import FooterPage from "../Components/Footer";
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";
import retrato from "../img/retrato.png";

import "../styleCSS/About.css";
import cv from "../img/cv.pdf";
import calendar from "../img/calendar.png";
import ph from "../img/photoshop.png";
import ai from "../img/illustrator.png";
import fig from "../img/figma.png";
import boostrap from "../img/boostrap.png";
import githubb from "../img/github.png";
import inv from "../img/invission.png";

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
            <MDBNavbarBrand>
              <img className="logo" src={logo} alt="imglogo" />
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler className="burger" onClick={this.onClick} />
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
                    to="/Proyectos"
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
                <MDBNavbarBrand>
                  <a href="mailto:carla.renee.diazc@gmail.com">
                    <img className="cont" src={contacto} alt="imgcontacto" />
                  </a>
                </MDBNavbarBrand>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <div className="flex-center ctnAbouview">
            <div className="">
              <div className="flex-center ">
                <img className="retratoAbout " src={retrato} alt="imgretrato" />
              </div>

              <div className="textoabout text-center ">
                <h5 className="UnPoco">
                  <mark
                    style={{
                      background: "rgba(255, 88, 51, 0.7)",
                      color: "#595959",
                    }}
                  >
                    Un poco más sobre mi
                  </mark>
                </h5>
                <br></br>
                <p className="miNombre container text-center">
                  <strong>Mi nombre es Carla Díaz.</strong> Vivo en la constante
                  búsqueda de conocimiento y capacitación. Me caracterizo por
                  ser una persona reflexiva, empática y autónoma, que busca siempre
                  cuestionar problemas y diseñar soluciones.
                </p>
                <br></br>
                <p className="disfruto container text-center">
                  Disfruto mucho de la vida social y de compartir con todo tipo
                  de personas, pero por sobre todo, con gente creativa y
                  positiva. Quienes me motivan para seguir creciendo y creando
                  para compartir nuevas ideas con el mundo.
                </p>
                <a href={cv} target="blank">
                  <Button
                    variant="#FF3C38"
                    style={{
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "white",
                      fontWeight: "700",
                      background: "#FF3C38",
                      marginTop: "2rem",
                    }}
                  >
                    Ver Currículum
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="ctnAbout container col-sm-12 col-md-12 ">
          <div className=" ">
            <h5 className="mot text-center ">Motivaciones Profesionales</h5>
            <div className="ctnExpJapan col-sm-12  ">
              <div className="">
                <div className="row textMot">
                  <div className=" col-sm-12 col-md-6 ">
                    <p
                      className="medeclaro 
                "
                    >
                      Me declaro como una ferviente <strong>autodidacta</strong>
                      , siempre con la necesidad y motivación de crear. Comencé mi camino en la tecnología como Front End Developer, pero mi motivación por el Diseño UX/UI ya lleva dos años de camino recorrido{" "}
                      <strong>
                        creando interfaces legibles, amigables y accesibles a las
                        personas.
                      </strong>
                    </p>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <p className="siBien ">
                     Durante estos años de experiencia reando interfaces e investigando para diferentes proyectos, he desarrollado fortalezas como voluntad y
                      disciplina, que creo son lo más importante ante cualquier
                      desafío que se venga en el futuro, además de poder
                      demostrar que soy una profesional que soluciona problemas
                      con un enfoque creativo y siempre pensando en el producto y los
                      usuarios.
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
            <p className="uni ">CoderHouse</p>
              <p className="dip ">Atomic Design y Design System</p>
              <p className="fecha ">
                <img className="calendar " src={calendar} alt="caelndar" />{" "}
                Enero - Marzo 2022
              </p>
              <p className="boot  ">Escalab Academy</p>
              <p className="fe ">UX Design</p>
              <p className="fecha ">
                {" "}
                <img className="calendar " src={calendar} alt="caelndar" />{" "}
                Julio - Octubre 2021
                </p>
                <p className="boot  ">Bootcamp Laboratoria</p>
              <p className="fe ">Front end Developer</p>
              <p className="fecha ">
                {" "}
                <img className="calendar " src={calendar} alt="caelndar" />{" "}
                Marzo - Septiembre 2020
                </p>
             
              <br></br>
              <p className="uni ">Universidad Uniacc</p>
              <p className="dip ">Diplomado en Gestión Cultural</p>
              <p className="fecha ">
                <img className="calendar " src={calendar} alt="caelndar" />{" "}
                Noviembre 2012
              </p>
              <br></br>
              <p className="uni ">Universidad UNIACC</p>
              <p className="artes ">Artes Visuales y Fotografía</p>
              <p className="fecha  ">
                <img className="calendar " src={calendar} alt="caelndar" />{" "}
                Marzo 2008 - Noviembre 2012
              </p>
            </div>
            <div className=" float-right ">
              <h5 className="habilidades col-sm-12  ">Habilidades técnicas</h5>

              <div className="tagHabilidades col-sm-12">
                <p>
                  <mark
                    style={{
                      background: "rgba(37, 222, 178, 0.3)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Design Thinking
                  </mark>{" "}
                  <mark
                    style={{
                      background: "rgba(37, 222, 178, 0.3)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Metodología DCU
                  </mark>{" "}
                </p>
                <p>
                  <mark
                    style={{
                      background: "rgba(37, 222, 178, 0.3)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    User Persona
                  </mark>{" "}
                  <mark
                    style={{
                      background: "rgba(37, 222, 178, 0.3)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Benchmark
                  </mark>{" "}
                  <mark
                    style={{
                      background: "rgba(37, 222, 178, 0.3)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Html
                  </mark>
                </p>
                <p>
                  <mark
                    style={{
                      background: "rgba(37, 222, 178, 0.3)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    JavaScript
                  </mark>{" "}
                  <mark
                    style={{
                      background: "rgba(37, 222, 178, 0.3)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Css
                  </mark>{" "}
                  <mark
                    style={{
                      background: "rgba(37, 222, 178, 0.3)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    React
                  </mark>
                </p>
                <h5 className="blandas">Habilidades Blandas</h5>
                <p className="hblandas">
                  <mark
                    style={{
                      background: "rgba(230, 203, 228, 0.62)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Empática
                  </mark>{" "}
                  <mark
                    style={{
                      background: "rgba(230, 203, 228, 0.62)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Reflexiva
                  </mark>{" "}
                  <mark
                    style={{
                      background: "rgba(230, 203, 228, 0.62)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Analítica
                  </mark>{" "}
                </p>{" "}
                <p>
                  <mark
                    style={{
                      background: "rgba(230, 203, 228, 0.62)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Adaptable
                  </mark>{" "}
                  <mark
                    style={{
                      background: "rgba(230, 203, 228, 0.62)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Sociable{" "}
                  </mark>{" "}
                  <mark
                    style={{
                      background: "rgba(230, 203, 228, 0.62)",
                      borderRadius: "25px",
                      padding: "0.5rem",
                    }}
                  >
                    Creativa
                  </mark>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ctnHerramientas container col-sm-12 col-md-12 "></div>
        <div className="ctnEdu container col-sm-12 col-md-11 ">
          <h5 className="herr  col-sm-12 ">Herramientas</h5>

          <div className="row col-sm-12">
            <div className=" tagH col-sm-12 col-md-4">
              <p className="photoshop">
                <img className="ph " src={ph} alt="ph" /> Photoshop
              </p>
              <p className="ai">
                <img className="ai " src={ai} alt="ai" /> Illustrator
              </p>
            </div>
            <div className=" float-right col-md-5">
              <div className="tagHerramientas col-sm-12">
                <p className="figma">
                  <img className="fig " src={fig} alt="fig" /> Figma
                </p>
                <p className="Boost">
                  <img className="boostrap" src={boostrap} alt="boostrap" />{" "}
                  Boostrap
                </p>
              </div>
            </div>

            <div className=" float-right">
              <div className="tagHerramientasDos col-sm-12">
                <p className="gitHubb">
                  <img className="githbb" src={githubb} alt="githubb" /> GitHub
                </p>
                <p className="inVision">
                  <img className="inv" src={inv} alt="inv" /> inVision
                </p>
              </div>
            </div>
          </div>

          {/*<div className=" container col-sm-12 col-md-12">
                              <div className="container col-sm-12 col-md-11">
                            <div className="row col-sm-12">
              <div className=" col-sm-12 col-md-9 ">
             
           
           
       
              </div>
            
              <div className=" float-right">
                
                
                <div className="tagHabilidades col-sm-12">
                <p className="figma"><img className="fig " src={fig} alt="fig" /> Figma</p>
                <p className="Boost"><img className="boostrap" src={boostrap} alt="boostrap" /> Boostrap</p>
              
                </div>
              </div>

              


                            </div>
                            </div>
          </div>*/}
        </div>

        <FooterPage />
      </div>
    );
  }
}

export default About;

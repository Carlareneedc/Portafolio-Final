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
import { Carousel } from "react-bootstrap";
import {Link} from "react-router-dom"
import { Card, Button, CardDeck } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import FooterPage from "./Footer";
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";
import Edfin from "../img/edfinanciera.png";
import humans from "../img/humas.png";
import japanCarousel from "../img/pantallainicio.png";
import mesero from "../img/vistamesero.png";
import pedidos from "../img/pedidos.png";
import portal from "../img/portal.png"

import "../styleCSS/JapanQueen.css";

import portalUno from "../../src/img/portalresult.png";
import portalresultdos from "../../src/img/portalresul2.png";
import portalresulttres from "../../src/img/portalresulttres.png";
import japan from "../img/proyectouno.png"
import gav from "../img/gav.png"
import unimarc from "../img/unimarc.png";



class Portal extends React.Component {
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
              <MDBNavbarBrand  >
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
                   to="./" 
                    >
                      Inicio
                  
                 
                    </MDBNavLink>
                    
                  </MDBNavItem>
                  <MDBNavItem>
                   <Link to=""> <MDBNavLink
                      className=""
                      style={{ color: "rgba(89, 89, 89, 1)" }}
                      to=""
                    >
                      Proyectos
                    </MDBNavLink></Link>
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
          

          <div className="ctnJapan container row col-sm-12 ">
            <div className="container col-sm-12 col-md-12">
              <div className="row contJA">
                <div className=" col-sm-12 col-md-5">
                  <img
                    className="img-fluid japanQueen"
                    src={Edfin}
                    alt="imgjapan"
                  />
                </div>

                <div className="textContJapan col-sm-12 col-md-7">
                  <h5 className="textJapan col-sm-12">
                    <mark
                      style={{
                        background: "#D1E9E4",
                        color: "rgba(89, 89, 89, 1)",
                      }}
                    >
                      Programa de Educación Financiera
                    </mark>
                  </h5>

                  <p className=" col-md-10 col-md-6 japanEs">
                  Re diseño y transformación digital hacía una App de educación financiera diseñada para las mujeres pertenecientes al Programa Familia del FOSIS, a cargo de SATORI en conjunto con el Instituto de Estudios Peruanos.
                  </p>
                  <div className="">
                    <div className=" col-sm-12 col-md-6  float-left">
                      {" "}
                      <h5 className="rolText ">Rol</h5>
                      <p className="ux">UX/UI Designer</p>{" "}
                      <h5 className=" rolText">Actividades</h5>
                      <div className="container">
                        <div className="row tagsJapan">
                   
                        <p className="uxR">
                            <mark
                              style={{
                                background: "#61C6B4",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}
                            >
                              UX Research
                            </mark>
                          </p>
                          <p className="proto">
                            <mark
                              style={{
                                background: "#A5EBDE",
                                borderRadius: "25px",
                                padding: "0.5rem 1.5rem",
                                marginLeft: "1rem",
                              }}
                            >
                              Testeos
                            </mark>
                          </p>
                          <br></br>
                          <p className="ui">
                            <mark
                              style={{
                                background: "#DCF5F1",
                                borderRadius: "25px",
                                padding: "0.5rem 1rem",
                              }}
                            >
                              Diseño UI
                            </mark>
                          </p>
                          <p className="ui">
                            <mark
                              style={{
                                background: "#E0F1EE",
                                borderRadius: "25px",
                                padding: "0.5rem 1rem",
                              }}
                            >
                              Prototipo
                            </mark>
                          </p>
                        
                           
                           
                            {/*<p  className="ui">
                            <mark
                              style={{
                                background: "rgb(0 123 255 / 45%)",
                                borderRadius: "25px",
                                padding: "0.5rem 1rem",
                              }}
                            >
                              UX Research
                            </mark>
                            </p>
                            <p className="ui">
                            <mark
                              style={{
                                background: "rgb(0 123 255 / 48%)",
                                borderRadius: "25px",
                                padding: "0.5rem 1rem",
                              }}
                            >
                              Diseño UI
                            </mark>
                            </p>
                            <p  className="ui">
                            <mark
                              style={{
                                background: "rgb(150 181 215 / 35%)",
                                borderRadius: "25px",
                                padding: "0.5rem 1rem",
                              }}
                            >
                              Testeos
                            </mark>
                            </p>*/}
                           
                            
                         
                        </div>
                      </div>
                    </div>
                    <div className=" col-sm-12 col-md-6 float-right">
                      <h5 className="rolText ">Fecha del Proyecto</h5>
                      <p className="julio">2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="ctnExpJapan container row col-sm-12 ">
          <div className="container col-sm-12 col-md-10">
            <div className="row">
              <div className=" col-sm-10 col-md-6">
                <h5 className="experienciaJapan">
                  <mark
                    style={{
                      background: "rgb(38 172 187 / 28%)",
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                    Experiencia Educación Financiera
                  </mark>
                </h5>
                <p
                  className="comoToda mt-4
                "
                >
              El mayo desafío en este proyecto, tiene que ver con el re diseño y tranformación digital. Este programa solía darse en actividades presenciales en distintas ciudades de Chile, con usarias y usuarios que participaban de los cursos y talleres en general del FOSIS. La importancia que tenía la presencialidad de este taller, era lo que más valoraban los usuarios, el poder compartir con otras personas, poder llevar a sus hijos y todo lo que significa una experiencia de aprendizaje presencial.
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className=" desdeAqui ">
                 Desde la premisa de lo presencial y considerando además que nos encontramos en el segundo año de pandemia, se planteo la importancia de una transformación digital para poder llegar a más usuarios y elevar la alfabetización digital.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="ctnElProblema  col-sm-12">
          <div className=" container col-sm-12 col-md-10">
            <div className="ctnElP row">
              <div className=" col-sm-10 col-md-3">
                <h5 className="elProblema ">
                  <mark
                    style={{
                      background: "#E7D394",
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                    El Problema
                  </mark>
                </h5>
                <p
                  className="aAlgunos col-md-12 mt-4
                "
                >
                  <strong>
                    Crear una app de educación financiera para mujeres de escasos recursos.
                  </strong>
                </p>
                <p className="cambian col-md-12">
                  <strong>
                    Tienen un bajo nivel alfabetización digital y tecnológico.
                  </strong>
                </p>
              </div>

              <div className=" ctnQuien col-sm-12 col-md-9">
                <p className=" col-md-12 quien">
                 La importancia realizar una transformación digital que no solo pueda llegar a más usuarias, si no que la usabilidad sea lo suficientemente amigable para que dichos usuarias puedan encontrarle valor a este programa que cambiaría de una experiencia presencial a digital, con todo lo que esto implica.
                </p>
                <p className="col-md-12 cliente">
                  Lograr conectar con la empatía con estas usuarias y comprender de qué manera sería posible llegar a ellas y entregar un producto que fuera limpio y centrado en el usuario en cuanto a usabilidad, además de ir a la par con la tecnología en estos tiempos, logrando ser un caso de éxito.
                </p>
              </div>
            </div>
          </div>
          <div className="contprocesos container col-sm-12 col-md-10">
            <div className="container row col-sm-12 col-md-12">
              <div style={{textAlign:"left"}}className="row col-md-6">
                <h5 className="procesos">
                  <mark
                    style={{
                      background: "rgba(254, 214, 123, 0.9)",
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                    Procesos
                  </mark>
                </h5>
                <p className="textoProcesos">
                  Por medio de diversas entrevistas e indagaciones, definimos
                  tres tipos de usuarios, los que precisamos de la siguiente
                  forma:
                </p>
                <p className="textopro">
                  <strong>Cliente (Usuario indirecto)</strong> Accederá a esta
                  plataforma por medio de otro usuario que es el mesero.
                </p>
                <p className="mesero">
                  <strong>Mesero</strong> Accederá a la plataforma para generar
                  el pedido del cliente
                </p>
                <p className="chef">
                  <strong>Chef </strong> Recibirá el pedido
                </p>
              </div>
              <div className=" col-md-6 ">
                <img src={humans} className="humans" alt="humans" />
              </div>
              <h5 className="textSolucion">
                <mark
                  style={{
                    background: "rgba(39, 146, 138, 0.49)",
                    color: "rgba(89, 89, 89, 1)",
                  }}
                >
                  Solución al problema
                </mark>
              </h5>
              <p className="segun">
                Según nuestra investigación, diferentes iteraciones y
                entrevistas de usuario, decidimos que la mejor solución sería
                diseñar una interfaz que funcione por medio de Tablet y
                computador, en la que como principal objetivo, se podrá tomar
                pedidos, eliminar y cambiar según la decisión del cliente.
              </p>
              <h5 className="resultado">
                <mark
                  style={{
                    background: "rgba(37, 222, 178, 0.3)",
                    color: "rgba(89, 89, 89, 1)",
                  }}
                >
                  Resultado
                </mark>
              </h5>
            </div>
          </div>
        </div>
        <div style={{ background: "rgba(44, 148, 141, 0.6)" }}>
          <Carousel>
            <Carousel.Item>
            <a target="_blank" href="https://burger-queen2020.web.app/"> <img
                className="img-fluid jp "
                src={japanCarousel}
                alt="First slide"
              /></a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://burger-queen2020.web.app/"><img className="img-fluid jp" src={mesero} alt="Third slide" /></a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://burger-queen2020.web.app/"><img className="img-fluid jp " src={pedidos} alt="Third slide" /></a>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-sm-12">
        <div className="ctnresult container col-sm-12 col-md-10">
          <h5 className=" que">¿Qué te gustó de este proyecto?</h5>
          <p className="col-sm-12 textQue">Lo que más me gustó de este proyecto, fue poder darle una identidad visual al producto.  Fue un desafío poder encontrar una imagen representativa y a la vez legible y eficaz. Finalmente creo que el resultado superó mis propias espectativas.</p>
        </div>
        </div>
        <div><h5 className="container col-sm-12  col-md-10 puedes" > <mark
                    style={{
                      background: "rgba(254, 214, 123, 0.9)",
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                   Puedes ver otro proyectos
                  </mark></h5>     
                  <div className="container  col-md-10 flex-center mt-5">  
                  <CardDeck className="cardeck">
                  <Card
              style={{
                borderRadius: "20px 20px 0px 0px",
                border: "none",
              }}
            >
              <Card.Img variant="top" src={portal} />
              <Card.Body>
                <Card.Title className="cardTittle">Cyber Monday</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  Construcción y corrección de Landing para la campaña Cyber Monday en Mercado Libre y Portal Inmobiliario.
                </Card.Text>
                <Link to="/Portal">
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "3rem",
                      marginLeft: "0rem",
                      display: "flex",
                      borderRadius: "8px",
                      fontFamily: "Montserrat",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "700",
                      background: "#FF3C38",
                    }}
                  >
                    Ver Proyecto
                  </Button>
                </Link>
              </Card.Body>
            </Card>
           <Card 
             style={{
               /*width: "25vw",*/
               borderRadius: "20px 20px 0px 0px",
               border: "none",
             }}
           >
             <Card.Img variant="top" src={gav} />
             <Card.Body>
               <Card.Title className="cardTittle">GAV</Card.Title>
               <Card.Text
                 style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                 className="cardText"
               >
                 Sitio gamificado en donde se entrega información sobre el
                 covid-19. Proyecto ganador empresa "Hootie Hoo".
               </Card.Text>
               <Link to="/Gav"><Button
                 variant="#FF3C38"
                 style={{
                   marginTop: "2.5rem",
                   marginLeft: "0rem",
                   display: "flex",
                   borderRadius: "8px",
                   fontFamily: "Montserrat",
                   color: "rgba(255, 255, 255, 1)",
                   fontWeight: "700",
                   background: "#FF3C38",
                 }}
               >
                 Ver Proyecto
               </Button></Link>
             </Card.Body>
           </Card>
           <Card
             style={{
              /* width: "25vw",*/
               borderRadius: "20px 20px 0px 0px",
               border: "none",
             }}
           >
            <Card.Img className="imgUni" variant="top" src={unimarc} />
             <Card.Body>
               <Card.Title className="cardTittle">Recetas Unimarc</Card.Title>
               <Card.Text
                 style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                 className="cardText"
               >
                 Rediseño de la sección de recetas correspondiente a la
                 plataforma web Unimarc. Proyecto ganador "Hackaton"
                 Laboratoria
               </Card.Text>
              <Link to="/Unimarc"> <Button
                 variant="#FF3C38"
                 style={{
                   marginTop: "1rem",
                   marginLeft: "0rem",
                   display: "flex",
                   borderRadius: "8px",
                   fontFamily: "Montserrat",
                   color: "rgba(255, 255, 255, 1)",
                   fontWeight: "700",
                   background: "#FF3C38",
                 }}
               >
                 Ver Proyecto
               </Button></Link>
             </Card.Body>
           </Card>
         </CardDeck>
         </div>   
         </div>
        <FooterPage />
      </div>
    );
  }
}
export default Portal;

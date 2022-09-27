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
import FooterPage from "../Components/Footer";
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";
import Portalin from "../img/portalin.png";
import "../styleCSS/JapanQueen.css";

import portalUno from "../../src/img/portalresult.png";
import portalresultdos from "../../src/img/portalresul2.png";
import portalresulttres from "../../src/img/portalresulttres.png";
import japan from "../img/proyectouno.png"
import gav from "../img/gav.png"
import tango from "../img/tango.png"
/* import unimarc from "../img/unimarc.png"; */
import edu from "../img/login.png";
import migrante from "../img/migrante.png";


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
                    src={Portalin}
                    alt="imgjapan"
                  />
                </div>

                <div className="textContJapan col-sm-12 col-md-7">
                  <h5 className="textJapan col-sm-12">
                    <mark
                      style={{
                        background: "rgb(33 149 202 / 27%)",
                        color: "rgba(89, 89, 89, 1)",
                      }}
                    >
                      Cyber Day 
                    </mark>
                  </h5>

                  <p className=" col-md-10 col-md-6 japanEs">
                  Landing de Portal Inmobiliario y Mercado Libre, diseñada para la campaña Cyber Day a cargo de la empresa Villa Alegre Producciones
                  </p>
                  <div className="">
                    <div className=" col-sm-12 col-md-6  float-left">
                      {" "}
                      <h5 className="rolText ">Rol</h5>
                      <p className="ux">UI Designer</p>{" "}
                      <h5 className=" rolText">Actividades</h5>
                      <div className="container">
                        <div className="row tagsJapan">
                   
                         
                          <p className="ui">
                            <mark
                              style={{
                                background: "rgb(0 123 255 / 45%)",
                                borderRadius: "25px",
                                padding: "0.5rem 1rem",
                              }}
                            >
                              Diseño UI
                            </mark>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" col-sm-12 col-md-6 float-right">
                      <h5 className="rolText ">Fecha del Proyecto</h5>
                      <p className="julio">Octubre 2020</p>
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
                    Experiencia Cyber Day
                  </mark>
                </h5>
                <p
                  className="comoToda mt-4
                "
                >
             Para la campaña de Cyber Day, mi rol como diseñadora me permitió participar en la construcción, desarrollo y QA de la landing, corrigiendo, mejorando y trabajando directamente con el diseño de la página, con el fin de entregar una información clara y precisa a los usuarios.
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className=" desdeAqui ">
                  Editando imágenes, generando logos y mejorando el desarrollo del proyecto. Esto permitió que la página de Portal Inmobiliario que ya existía, se adaptara para esta campaña, mejorando la visualidad y haciendola atractiva para quienes accedan.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="ctnElProblema  col-sm-12">
        
          <div className="contprocesos container col-sm-12 col-md-10">
            <div className="container row col-sm-12 col-md-12">
              <div style={{textAlign:"left"}}className="row col-md-6">
               
               <h5 className="resultado row">
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
        </div>
        <div style={{ background: "rgba(44, 148, 141, 0.6)" }}>
          <Carousel>
            <Carousel.Item>
            <a target="_blank" href="https://www.portalinmobiliario.com/venta/departamento/la-florida-metropolitana/8830-vista-la-florida-nva"> <img
                className="img-fluid jpPortal "
                src={portalUno}
                alt="First slide"
              /></a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://www.portalinmobiliario.com/venta/departamento/la-florida-metropolitana/8830-vista-la-florida-nva"><img className="img-fluid jpPortal" src={portalresultdos} alt="Third slide" /></a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://www.portalinmobiliario.com/venta/departamento/la-florida-metropolitana/8830-vista-la-florida-nva"><img className="img-fluid jpPortal " src={portalresulttres} alt="Third slide" /></a>
            </Carousel.Item>
          </Carousel>
        </div>
        {/*<div className="col-sm-12">
       <div className="ctnresult container col-sm-12 col-md-10">
          <h5 className=" que">¿Qué te gustó de este proyecto?</h5>
          <p className="col-sm-12 textQue">Lo que más me gustó de este proyecto, fue trabajar en una landing real, poder conocer metodologías de trabajo diferentes y conocer personas nuevas con quienes pude compartir conocimientos. Aprender cosas nuevas es lo más importante que me llevo de este proyecto, sin duda adquirí nuevos conocimientos que he podido aplicar efectivamente. </p>
        </div>
                </div>*/}
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
              <Card.Img variant="top" src={edu} />
              <Card.Body clasName="pro">
                <Card.Title className="cardTittle">Educación Financiera</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  App de educación financiera enfocada en mujeres pertenecientes al Programa Familia del FOSIS.
                </Card.Text>
                <Link to="/EdFinanciera">
                  <Button
                    variant="#FF3C38"
                    style={{
                      marginTop: "2rem",
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
             
               borderRadius: "20px 20px 0px 0px",
               border: "none",
             }}
           >
             <Card.Img variant="top" src={tango} />
             <Card.Body>
               <Card.Title className="cardTittle">Tango Rent</Card.Title>
               <Card.Text
                 style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                 className="cardText"
               >
                Sitio de venta y arriendo de propiedades 100% on line.
               </Card.Text>
               <Link to="/Gav"><Button
                 variant="#FF3C38"
                 style={{
                   marginTop: "3.3rem",
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
            <Card.Img className="imgUni" variant="top"  src={migrante}  />
             <Card.Body>
               <Card.Title className="cardTittle">Migrante</Card.Title>
               <Card.Text
                 style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                 className="cardText"
               >
                 Diseño de plataforma nacional e internacional de simulación de créditos para migrantes.
               </Card.Text>
              <Link to="/Unimarc"> <Button
                 variant="#FF3C38"
                 style={{
                   marginTop: "1.5rem",
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

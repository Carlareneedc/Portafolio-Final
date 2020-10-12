import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBCol
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import FooterPage from "../Components/Footer";
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";
import japanQueen from "../img/japanqueennores.png";
import japan from "../img/proyectouno.png";
import gav from "../img/gav.png";
import unimarc from "../img/unimarc.png";
import "../styleCSS/JapanQueen.css";

class JapanQueen extends React.Component {
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
          <Router>
            <MDBNavbar color="white" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
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
                      to="#"
                    >
                      Inicio
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className=""
                      style={{ color: "rgba(89, 89, 89, 1)" }}
                      to="#"
                    >
                      Proyectos
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      className=""
                      style={{ color: "rgba(89, 89, 89, 1)" }}
                      to="#"
                    >
                      Sobre Mi
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavbarBrand href="/">
                    <a href="mailto:carla.renee.diazc@gmail.com">
                      <img className="" src={contacto} alt="imgcontacto" />
                    </a>
                  </MDBNavbarBrand>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <div className="ctnJapan container row col-sm-12 ">
            <div className="container col-sm-12 col-md-12">
              <div className="row">
                <div className=" col-sm-12 col-md-5">
                  <img
                    className="img-fluid japanQueen"
                    src={japanQueen}
                    alt="imgjapan"
                  />
                </div>

                <div className="textContJapan col-sm-12 col-md-7">
                  <h5 className="textJapan col-sm-12">
                    <mark
                      style={{
                        background: "rgba(220, 21, 21, 0.23)",
                        color: "rgba(89, 89, 89, 1)",
                      }}
                    >
                      Japan Queen
                    </mark>
                  </h5>

                  <p className=" col-sm-12 col-md-10 japanEs">
                    Japan Queen es una app web diseñada para restaurantes, que
                    se origina como solución a la gestión de pedidos por medio
                    de una interfaz simple y amigable, evitando el antiguo uso
                    de comandas y toma de ordenes a mano.
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
                                background: "rgba(255, 150, 126, 1)",
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
                                background: "rgba(254, 214, 123, 0.9)",
                                borderRadius: "25px",
                                padding: "0.5rem 1.5rem",
                                marginLeft: "1rem",
                              }}
                            >
                              Prototipo
                            </mark>
                          </p>
                          <p className="ui">
                            <mark
                              style={{
                                background: "rgba(235, 135, 147, 1)",
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
                      <p className="julio">Julio 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    {/* <div className="container col-md-10 ">
          
            <div className="  col-sm-12 col-md-7  mt-5">
              <h5 className="experienciaJapan  mt-5">
                <mark
                  style={{
                    background: "rgba(220, 21, 21, 0.23)",
                    color: "rgba(89, 89, 89, 1)",
                  }}
                >
                  Experiencia Japan Queen
                </mark>
              </h5>
              <p
                className="comoToda mt-5 
                "
              >
                Como toda innovación, la app web Japan Queen se gesta en la
                búsqueda de{" "}
                <strong>
                  mejorar la experiencia de usuario y como solución a un
                  problema
                </strong>{" "}
                que debe ser acorde a las necesidades de nuestra época, esto es
                haciendo uso de las múltiples opciones que nos ofrece la
                tecnología.
              </p>
              <div className="col-lg-7">
                
              <p className="float-right desdeAqui">Desde aquí inicié una investigación enfocada en el cliente y el usuario para saber de qué manera podría modernizar la atención en restaurantes.</p>
              </div>
            
            </div>
  
         
                </div>*/}
                <div className="ctnExpJapan container row col-sm-12 ">
            <div className="container col-sm-12 col-md-10">
              <div className="row">
                <div className=" col-sm-10 col-md-6">
                  <h5 className="experienciaJapan"><mark  style={{
                    background: "rgba(255, 150, 126, 1)",
                    color: "rgba(89, 89, 89, 1)",
                  }}>Experiencia Japan Queen</mark></h5>
                  <p
                className="comoToda mt-4
                "
              >
                Como toda innovación, la app web Japan Queen se gesta en la
                búsqueda de{" "}
                <strong>
                  mejorar la experiencia de usuario y como solución a un
                  problema
                </strong>{" "}
                que debe ser acorde a las necesidades de nuestra época, esto es
                haciendo uso de las múltiples opciones que nos ofrece la
                tecnología.
              </p>
                </div>

                <div className="col-sm-12 col-md-6">
                

                  <p className=" desdeAqui ">
                  Desde aquí inicié una investigación enfocada en el cliente y el usuario para saber de qué manera podría modernizar la atención en restaurantes.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="ctnElProblema  col-sm-12">
            <div className=" container col-sm-12 col-md-10">
              <div className="ctnElP row">
                <div className=" col-sm-10 col-md-3">
                
                  <h5 className="elProblema "><mark  style={{
                    background: "rgba(220, 21, 21, 0.23)",
                    color: "rgba(89, 89, 89, 1)",
                  }}>El Problema</mark></h5>
                  <p
                className="aAlgunos col-md-12 mt-4
                "
              >
               <strong>A algunos clientes les resulta difícil decidir  al momento de elegir un plato</strong>

              </p>
              <p className="cambian col-md-12"><strong>Cambian su pedido varias veces antes de finalizarlo</strong></p>
                </div>

                <div className=" ctnQuien col-sm-12 col-md-9">
                

                  <p className=" col-md-12 quien">
                  Quien se enfrenta  a situación directamente es el mesero, tomando en cuenta que hasta ese momento utilizaría lápiz y papel para anotar la información del pedido. Esto supone una gran dificultad. 
                  </p>
                  <p className="col-md-12 cliente">Si  el cliente tiende a cambiar de decisión, no es posible que el mesero anote y tache reiteradamente, produciendo confusión en el resumen del pedido y generando otro problema, el tiempo en que este llegaría a cocina y si sería legible para el chef, al momento de preparar la comida.</p>
                 
                </div>
               
              </div>
             
            </div>
           
          </div>
        
  
      </div>
    );
  }
}
export default JapanQueen;

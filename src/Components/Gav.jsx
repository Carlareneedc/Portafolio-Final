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
import {
  
 
  Link,
 
} from "react-router-dom";
import { Card, Button, CardDeck } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import FooterPage from "../Components/Footer";
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";

import "../styleCSS/JapanQueen.css";

/* import unimarc from "../img/unimarc.png"; */
import gavvista from "../img/gavvista.png";
import gamificacion from "../img/gamificacion.png";
import resultgav from "../img/resultgav.png";
import resultgavdos from "../img/resultgavdos.png";
import resultgavtres from "../img/resultgavtres.png";
import japan from "../img/proyectouno.png";
import portal from "../img/portal.png"
import edu from "../img/login.png";
import migrant from "../img/migrant.png";
import journey from "../img/journey.png";
import kayak from "../img/kayak.png";
import kayakdos from "../img/kayakdos.png";
import kayaktres from "../img/kayaktres.png";
import tango from "../img/tango.png";
class Gav extends React.Component {
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
                    to="./"
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
                <MDBNavbarBrand>
                  <a href="mailto:carla.renee.diazc@gmail.com">
                    <img className="" src={contacto} alt="imgcontacto" />
                  </a>
                </MDBNavbarBrand>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <div className="ctnJapan container row col-sm-12 ">
            <div className="container col-sm-12 col-md-12">
              <div className="row contGav">
                <div className=" col-sm-12 col-md-5">
                  <img
                    className="img-fluid japanQueen"
                    src={migrant}
                    alt="imgjapan"
                  />
                </div>

                <div className="textContJapan col-sm-12 col-md-7">
                  <h5 className="textJapan col-sm-12">
                    <mark
                      style={{
                        background: "rgb(102 16 242 / 42%)",
                        color: "rgba(89, 89, 89, 1)",
                      }}
                    >
                      Migrante
                    </mark>
                  </h5>

                  <p className=" col-md-10 col-md-6 japanEs">
                    Desarrollo de app<strong> Kayak </strong>simulación de créditos para adquirir motos en Perú y Chile.
                    
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
                                background: "rgb(111 66 193 / 71%)",
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
                                background: "rgb(165 73 187 / 51%)",
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
                                background: "rgb(111 66 193 / 35%)",
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
                      <p className="julio">Julio 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="ctnExpJapan container row col-sm-12 ">
          <div className="container col-sm-12 col-md-10">
            <div className="row ">
              <div className=" col-sm-10 col-md-6">
                <h5 className="experienciaJapan">
                  <mark
                    style={{
                      background: "rgb(111 66 193 / 71%)",
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                    Experiencia Migrante - Kayak
                  </mark>
                </h5>
                <p
                  className="comoToda mt-4
                "
                >
                  El diseño de las plataformas de solicitud de crédito, viene a resolver el problema de la bancarización de migrantes Venezolanos en Chile y Perú. Se propone este proyecto como una oportunidad de que cualquier persona, sin necesidad de tener un historial crediticio, 
                  
                     pueda optar a un financiamiento de motos para uso personal o laboral.
                  
                 
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className=" desdeAqui ">
                  La plataforma tiene un enfoque y una función centrada en el usuario. <strong> Kayak </strong>, se desarrolla como una app de simulación de créditos y análisis de datos del usuario.
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
                      background: "rgba(220, 21, 21, 0.23)",
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
                    ¿Cómo evaluar a nuestros usuarios para otorgar créditos?
                    y ¿De qué manera generar simulaciones rápidas?
                  </strong>
                </p>
                <p className="gav col-md-12">
                  <strong></strong>
                </p>
              </div>

              <div className=" ctnQuien col-sm-12 col-md-9">
                <p className=" col-md-12 quien">
                  En el caso de <strong>Kayak</strong> el mayor desafío es conocer cuál es nuestro usuario y cuáles son sus necesidades, y cómo podemos resolver sus dolores en la entrega exitosa de un crédito sin el requisito de estar bancarizados.
                </p>
               
                <p className="col-md-12 cliente">
                 Por otro lado, generar una simulación clara y correcta desde la adquisición rápida y simple de datos del cliente sin necesidad de un mayor papeleo y de manera 100% on line.
                </p>
              </div>
            </div>
          </div>
          <div className="contprocesos container col-sm-12 col-md-10">
            <div className="container row col-sm-12 col-md-12">
              <div style={{ textAlign: "left" }} className="row col-md-6">
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
                <p className="textoProcesosgav">
                  Se realiza una investigación de usuario para poder generar un enfoque claro del producto, generando protopersonas que ayudarían comprender mejor hacia quién nos dirigimos. Una vez profundizada la información del usuario fue necesario realizar un análisis de competencias para conocer qué plataformas entregan créditos, cuáles son su requerimientos y cómo llegan a los clientes. 
                  
                     Nuestro usuario objetivo son <strong> migrantes Venezolanos
                  </strong>
                  , esto no excluye a cualquier otro usuario que necesite adquirir un crédito.
                </p>
                <p className="eldesafio">
                 El mayor dolor que se detectó en el discovery, es que nuestro usuario tiene bajo nivel de bancarización y conocimientos financieros, por otro lado la necesidad de trabajo y de adquirir una herramienta para generar ingresos. Es por esto que además de considerar a nuestro usuario no bancarizado, también el foco importante es el <strong> usuario repartidor de app. </strong>
                </p>
                <p className="textopro">
                  <strong>¿Cómo optar a una moto sin historial crediticio?</strong> En este punto se propone que nuestro usuario pueda validar rapidamente algunos documentos que acrediten ingresos, identidad y capacidad financiera.
                </p>
                <p className="mesero">
                  <strong>¿De qué modo podemos obtener la información necesaria de nuestro usuario?</strong> 
                </p>
              </div>
              <div className=" col-md-6 ">
                <img src={journey} className="gam" alt="gam" />
              </div>
              <div className="ctngav row ">
                <div className="container col-sm-12 col-md-12">
                  <div className="row ">
                    <div className=" col-sm-12 col-md-6">
                     
                    </div>

                    <div className="col-md-6">
                      <p className=" entreestos ">
                       
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="textSoluciongav">
                <mark
                  style={{
                    background: "rgba(39, 146, 138, 0.49)",
                    color: "rgba(89, 89, 89, 1)",
                  }}
                >
                  Solución al problema
                </mark>
              </h5>

              <p className="porotro">
                {" "}
                La solución final fue crear una interfaz desarrollada para{" "}
                <strong> mobile</strong>, en base a que nuestros usuarios tienen mayor acceso a smartphone, apelando también a la inmediatez que se genera por medio del uso de un teléfono celular. Por otro lado se propone una calculadora que pueda entregarle al usuario la simulación rápida de su crédito según las cuotas y montos que ha elegido. Para poder obtener los datos fidedignos del cliente y además agilizar el proceso, se debe acceder a la plataforma por medio de Clave única.
              </p>
              <p className="cadaseccion">
                Se propone una interfaz clara y limpia que no interfiera con la información solicitada, se utilizan mayormente la gama de colores de la empresa y su branding.
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
              <a target="_blank" href="https://www.figma.com/proto/cln81QGH4oe4QpxqrIyNQA/MVP-EF?node-id=3002%3A1158&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3002%3A1158&show-proto-sidebar=1">
                {" "}
                <img
                  className="img-fluid gv "
                  src={kayak}
                  alt="First slide"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://www.figma.com/proto/cln81QGH4oe4QpxqrIyNQA/MVP-EF?node-id=3002%3A1158&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3002%3A1158&show-proto-sidebar=1">
                <img
                  className="img-fluid gv"
                  src={kayakdos}
                  alt="Third slide"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://www.figma.com/proto/cln81QGH4oe4QpxqrIyNQA/MVP-EF?node-id=3002%3A1158&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=3002%3A1158&show-proto-sidebar=1">
                {" "}
                <img
                  className="img-fluid gv "
                  src={kayaktres}
                  alt="Third slide"
                />
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
        {/*<div className="col-sm-12">
          <div className="ctnresult container col-sm-12 col-md-10">
            <h5 className=" que">¿Qué te gustó de este proyecto?</h5>
            <p className="col-sm-12 textQue">
              Lo que más me gustó de este proyecto fue lo desafiante que se
              volvió. Fue un reto poder tomar los elementos de diseño entregados
              por la empresa y poder incorporarlos dentro de la solución final.
              Sin embargo la comunicación el feedback que se generó entre Hottie
              Hoo y el equipo permitió lograr un resultado que nos dejó felices
              a todos, principalmente a los usuarios.
            </p>
          </div>
                </div>*/}
        <div>
          <h5 className="container col-sm-12  col-md-10 puedes">
            {" "}
            <mark
              style={{
                background: "rgba(254, 214, 123, 0.9)",
                color: "rgba(89, 89, 89, 1)",
              }}
            >
              Puedes ver otro proyectos
            </mark>
          </h5>
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
                      marginTop: "3.4rem",
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
             {/* <Card
                style={{
                  borderRadius: "20px 20px 0px 0px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src={japan} />
                <Card.Body>
                  <Card.Title className="cardTittle">Japan Queen</Card.Title>
                  <Card.Text
                    style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                    className="cardText"
                  >
                    App para restaurantes que se origina como solución a la
                    gestión de pedidos, eliminando el uso de comandas y toma de
                    ordenes a mano.
                  </Card.Text>
                  <Link to="/JapanQueen">
                    <Button
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
                    </Button>
                  </Link>
                </Card.Body>
                    </Card>*/}
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
                  </Button>
                </Link>
              </Card.Body>
            </Card>
              <Card
                style={{
                  /* width: "25vw",*/
                  borderRadius: "20px 20px 0px 0px",
                  border: "none",
                }}
              >
                <Card.Img className="imgUni" variant="top" src={tango} />
                <Card.Body>
                  <Card.Title className="cardTittle">
                    Tango Rent
                  </Card.Title>
                  <Card.Text
                    style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                    className="cardText"
                  >
                   Sitio de venta y arriendo de propiedades 100% on line.
                  </Card.Text>
                  <Link to="/Unimarc">
                    {" "}
                    <Button
                      variant="#FF3C38"
                      style={{
                        marginTop: "4rem",
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
            </CardDeck>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}
export default Gav;

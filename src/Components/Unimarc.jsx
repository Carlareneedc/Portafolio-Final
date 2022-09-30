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

import gav from "../img/gav.png";

import japan from "../img/proyectouno.png";
import tangopage from "../img/tangopage.png";
import humansdos from "../img/humaaansdos.png";
import resultunimarc from "../img/resultunimarc.png";
import resultunimarcdos from "../img/resultunimarcdos.png";
import resultunimarctres from "../img/resultunimarctres.png";
import portal from "../img/portal.png";
import edu from "../img/login.png";
import tangoapp from "../img/tangoapp.png";
import tangouno from "../img/tangouno.png";
import tangodos from "../img/tangodos.png";
import migrante from "../img/migrante.png";

class Unimarc extends React.Component {
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
              <div className="row">
                <div className=" col-sm-12 col-md-5">
                  <img
                    className="img-fluid japanQueen"
                    src={tangopage}
                    alt="imgjapan"
                  />
                </div>

                <div className="textContJapan col-sm-12 col-md-7">
                  <h5 className="textJapan col-sm-12">
                    <mark
                      style={{
                        background: "rgba(221, 53, 48, 0.38)",
                        color: "rgba(89, 89, 89, 1)",
                      }}
                    >
                      Tango Rent
                    </mark>
                  </h5>

                  <p className=" col-md-10 col-md-6 japanEs">
                    Tango es una plataforma inmobiliaria que se encarga de todos los trámites de arrendamiento de propiedades de forma automatizada.
                  
            
                  </p>

                  <div className="">
                    <div className=" col-sm-12 col-md-6  float-left">
                      {" "}
                      <h5 className="rolText ">Rol</h5>
                      <p className="ux">UX/UI Designer</p>
                    
                      <h5 className=" rolText">Actividades</h5>
                      <div className="container">
                        <div className="row tagsJapan">
                          <p className="uxR">
                            <mark
                              style={{
                                background: "rgba(221, 53, 48, 0.58)",
                                borderRadius: "25px",
                                padding: "0.5rem",
                              }}
                            >
                              UX/UI Design
                            </mark>
                          </p>
                          <p className="proto">
                            <mark
                              style={{
                                background: "rgba(255, 88, 51, 0.7)",
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
                                background: "rgba(239, 206, 74, 0.62)",
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
                      <p className="julio">Febrero 2022</p>
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
                      background: "rgba(221, 53, 48, 0.58)",
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                    Experiencia Tango Rent
                  </mark>
                </h5>
                <p
                  className="comoToda mt-4
                "
                >
                  El re diseño de la plataforma <strong>Tango</strong>, se propone desde la necesidad de generar mayores conversiones, proporcionando una plataforma más amigable y atractiva. Desde un análisis exhaustivo, detecté diferentes detalles que debían ser mejorados o eliminados de la plataforma ya que no aportaban desde la experiencia de usuario.
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className=" desdeAqui ">
                 Era necesario complementar dicha experiencia y el diseño en conjunto con la propuesta de valor de una <strong> plataforma 100% y automatizada </strong> de modo de solucionar la mayor cantidad de dolores del usuario considerando todo lo que implica arrendar y poner en arriendo una propiedad.
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
                      background: "rgba(255, 88, 51, 0.7)",
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
                    ¿cómo generar confianza desde la plataforma hacia el usuario?
                  </strong>
                </p>
                <p className="deque col-md-12">
                  <strong>
                    ¿De qué manera mejorar la interfaz de Tango?
                  </strong>
                </p>
              </div>

              <div className=" ctnQuien col-sm-12 col-md-9">
                <p className=" col-md-12 quien">
                Si bien la plataforma posee una gran cantidad de usuarios que valoran su funcionalidad, tiende a haber poco crecimiento desde el punto de vista de las conversiones, por razones que son desconocidas.
                </p>
                <p className="col-md-12 cliente">
                  La interfaz que se propone es clara y simple, sin embargo tiende a estar sobrecargada de información otorgandole relevancia a secciones que en realidad no son las que se quieren destacar.
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
                      background: "rgba(239, 206, 74, 0.62)",
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                    Procesos
                  </mark>
                </h5>
                <p className="textoProcesosgav">
                 Para este proyecto, no tuve la oportunidad de realizar una investigación profunda, ya que se necesitaba una solución inmediata y simple. En cuanto a lo anterior y para tener una base clara, realicé un <strong> benchmark </strong> rápido para poder conocer nuestras competencias directas. 
                </p>
                <p className="procesosUni">
                  <strong>
                    Entre diferentes hallazgos, se decidió que era necesario mejorar la visualidad de la interfaz para poder enfocar mejor las conversiones hacia nuestro usuario promedio, que son personas entre 30 y 45 años con un alto nivel de ingreso económico y con alto conocimiento digital.
                  </strong>
                </p>
                <p className="eldesafio">
                  Desde lo anterior se toma como premisa realizar una plataforma atractiva para nuestro usuario, acorde a las tendencias, clara y simple.
                </p>
                {/*<p className="textopro">
                 Personas que buscan recetas en la web. Son
                  aficionados a la cocina y están en constante búsqueda de
                  nuevas preparaciones.
                </p>
                <p className="mesero">
                 
                    Personas que siguen y conocen Recetas Unimarc.
                 {" "}
                  Acceden seguido a la página y siguen las recetas 4X4.
                </p>*/}
              </div>
              <div className=" col-md-6 ">
                <img src={tangoapp} className="humansdos" alt="humansdos" />
              </div>
              {/*<div className="ctngav row ">
                <div className="container col-sm-12 col-md-12">
                  <div className="row ">
                    <div className=" col-sm-12 col-md-6">
                      <p
                        className="comoToda mt-4
                "
                      >
                        Desde aquí obtuvimos diferentes hallazgos, dos de los
                        más importantes tienen que ver con{" "}
                        <strong>
                          facilitar la navegación en la sección de recetas y
                          motivar al cliente a comprar.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>*/}
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
             La propuesta de valor, surge desde una solución rápida desde el login de la plataforma en su versión Desktop y mobile, agregando la opción de iniciar sesión con google para ahorrarle pasos al usuario, pero manteniendo las opciones anteriores de manera que el usuario pueda tener libertad de decisión.
              </p>
              <p className="cadaseccion">
                A grandes rasgos, se mejoran los componentes, si ubican de manera correcta en la plataforma manteniendo la identidad de la marca.
                
                  Si bien la propuesta no genera una transformación completa del producto, las mejoras generaron incrementos en las conversiones.
                
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
              <a target="_blank" href="https://unimarc.netlify.app/">
                {" "}
                <img
                  className="img-fluid gv "
                  src={tangouno}
                  alt="First slide"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://unimarc.netlify.app/">
                <img
                  className="img-fluid gv"
                  src={tangodos}
                  alt="Third slide"
                />
              </a>
            </Carousel.Item>
            {/*<Carousel.Item>
              <a target="_blank" href="https://unimarc.netlify.app/">
                {" "}
                <img
                  className="img-fluid gv "
                  src={resultunimarctres}
                  alt="Third slide"
                />
              </a>
            </Carousel.Item>*/}
          </Carousel>
        </div>
        {/*<div className="col-sm-12">
          <div className="ctnresult container col-sm-12 col-md-10">
            <h5 className=" que">¿Qué te gustó de este proyecto?</h5>
            <p className="col-sm-12 textQue">
              Lo que más me gustó de este proyecto fue poder superar las
              expectativas del clientes con respecto a la propuesta de valor que
              hicimos. Tomar los elementos de la página y rediseñarlo también
              fue parte importante de lo que disfruté de este proyecto. Fue un
              desafío fuerte, sin embargo creo que cumplimos los objetivos.
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
              {/*<Card
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
                 
                  borderRadius: "20px 20px 0px 0px",
                  border: "none",
                }}
              >
                <Card.Img variant="top" src={migrante} />
                <Card.Body>
                  <Card.Title className="cardTittle">Migrante</Card.Title>
                  <Card.Text
                    style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                    className="cardText"
                  >
                   Diseño de plataforma nacional e internacional de simulación de créditos para migrantes.
                  </Card.Text>
                  <Link to="/Gav">
                    <Button
                      variant="#FF3C38"
                      style={{
                        marginTop: "2.9rem",
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
                      marginTop: "3.2rem",
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
export default Unimarc;

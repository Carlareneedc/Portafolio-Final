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
import unirecetas from "../img/recetasunimarc.png";
import humansdos from "../img/humaaansdos.png";
import resultunimarc from "../img/resultunimarc.png";
import resultunimarcdos from "../img/resultunimarcdos.png";
import resultunimarctres from "../img/resultunimarctres.png";
import portal from "../img/portal.png";
import edu from "../img/login.png";

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
                    src={unirecetas}
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
                      Recetas Unimarc
                    </mark>
                  </h5>

                  <p className=" col-md-10 col-md-6 japanEs">
                    Unimarc Recetas, es un proyecto realizado por encargo de la
                    empresa SMU para Unimarc. Se propone como rediseño de la
                    sección recetas correspondiente a la página web de Unimarc.{" "}
                    <br></br>
                    <strong>Proyecto Ganador Hackaton Laboratoria.</strong>
                  </p>

                  <div className="">
                    <div className=" col-sm-12 col-md-6  float-left">
                      {" "}
                      <h5 className="rolText ">Rol</h5>
                      <p className="ux">UX/UI Designer</p>
                      <p className="fed">Front End Developer</p>{" "}
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
                              UX Research
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
                      <p className="julio">Septiembre 2020</p>
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
                    Experiencia Recetas Unimarc
                  </mark>
                </h5>
                <p
                  className="comoToda mt-4
                "
                >
                  <strong>Recetas Unimarc</strong>, se presenta como desafío en
                  contexto de la <strong>Hackaton en Laboratoria</strong>, pero
                  además como proyecto de egreso de la generación 13. El
                  rediseño de la sección de recetas de la página web Unimarc. Se
                  propone como solución y mejora en base al contenido de la
                  página ya existente y se desarrolla tomando en cuenta el
                  contexto de pandemia.
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className=" desdeAqui ">
                  El confinamiento nos ha permitido desarrollar actividades
                  dentro de nuestro hogar, siendo una de estas cocinar en
                  familia. Es por esto que SMU nos propone el desafío de crear
                  una página web que permita la{" "}
                  <strong>
                    búsqueda y adquisición de ingredientes y recetas de una
                    manera amigable y sencilla.
                  </strong>
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
                    ¿cómo podemos hacer la experiencia de compra de insumos para
                    receta de una forma más amigable?
                  </strong>
                </p>
                <p className="deque col-md-12">
                  <strong>
                    ¿De qué manera se puede potenciar las recetas 4X4 de Unimarc
                  </strong>
                </p>
              </div>

              <div className=" ctnQuien col-sm-12 col-md-9">
                <p className=" col-md-12 quien">
                  La página web de Unimarc{" "}
                  <strong>
                    no posee una sección de compra o e-commerce que invite al
                    usuario a comprar on-line.
                  </strong>{" "}
                  La sección de recetas, es una parte importante de la
                  plataforma e invita a cocinar{" "}
                  <strong>menús para 4 personas por $4000.</strong> Sin embargo,
                  el acceso a esos ingredientes sólo es posible de manera
                  presencial y no existe un llamado que potencie esta acción, es
                  decir, <strong>la compra.</strong>
                </p>
                <p className="col-md-12 cliente">
                  Las recetas <strong>4X4</strong> además de las propias
                  recetas, disponen de más contenido que tiene que ver con la
                  cocina, como tips y material audiovisual que{" "}
                  <strong>no se encuentra bien posicionado en la página</strong>{" "}
                  por ende es de difícil acceso para los usuarios.
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
                  En base a encuestas, competencias, entrevistas y análisis web
                  que se desarrollaron como métodos de investigación por el
                  equipo, tanto por el lado UX como por el lado Front, obtuvimos
                  datos relevantes desde los usuarios. Por ejemplo:
                </p>
                <p className="procesosUni">
                  <strong>
                    Buscan recetas económicas, fáciles y sencillas. Además es
                    necesario que exista un buscador que permita que el usuario
                    tenga la libertad de seleccionar lo que necesita. Junto con
                    esto incorporar un sistema de check in para cada
                    ingrediente.{" "}
                  </strong>
                </p>
                <p className="eldesafio">
                  Nuestra investigación arrojó dos tipos de usuario:
                </p>
                <p className="textopro">
                  <strong>Personas que buscan recetas en la web.</strong> Son
                  aficionados a la cocina y están en constante búsqueda de
                  nuevas preparaciones.
                </p>
                <p className="mesero">
                  <strong>
                    Personas que siguen y conocen Recetas Unimarc.
                  </strong>{" "}
                  Acceden seguido a la página y siguen las recetas 4X4.
                </p>
              </div>
              <div className=" col-md-6 ">
                <img src={humansdos} className="humansdos" alt="humansdos" />
              </div>
              <div className="ctngav row ">
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
                Nuestra propuesta de valor con respecto al rediseño de la
                página, es proporcionar una interfaz más amigable con contenido
                claro y jerarquizado, mostrando las recetas unimarc por
                categoría con la{" "}
                <strong>opción de comprar uno o más ingedientes.</strong>
              </p>
              <p className="cadaseccion">
                También se añade la opción de comprar los productos como una{" "}
                <strong>"Canasta Familiar"</strong> que incluye todos los
                ingredientes de cada receta 4X4 para toda la semana, con opción
                de delivery. Esto logra eficiencia y cercanía con los usuarios
                además de potenciar la marca Unimarc.<br></br>
                <p>
                  En próximas iteraciones quisieramos incorporar la posibilidad
                  de <strong>acceder a la página de manera offline</strong>, así
                  los usuarios podrán tener acceso sin la necesidad de estar
                  conectados a wifi.
                </p>
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
                  src={resultunimarc}
                  alt="First slide"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://unimarc.netlify.app/">
                <img
                  className="img-fluid gv"
                  src={resultunimarcdos}
                  alt="Third slide"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://unimarc.netlify.app/">
                {" "}
                <img
                  className="img-fluid gv "
                  src={resultunimarctres}
                  alt="Third slide"
                />
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-sm-12">
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
        </div>
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
                  <Link to="/Gav">
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
            </CardDeck>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}
export default Unimarc;

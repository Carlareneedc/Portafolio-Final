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
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { Card, Button, CardDeck } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import FooterPage from "../Components/Footer";
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";
import japanQueen from "../img/japanqueennores.png";
import "../styleCSS/JapanQueen.css";
import humans from "../img/humas.png";
import japanCarousel from "../img/pantallainicio.png";
import mesero from "../img/vistamesero.png";
import pedidos from "../img/pedidos.png";
import gav from "../img/gav.png";
import unimarc from "../img/unimarc.png";
import gavvista from "../img/gavvista.png";

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
                    to="/"
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
                    src={gavvista}
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
                      Ganémosle al Virus
                    </mark>
                  </h5>

                  <p className=" col-md-10 col-md-6 japanEs">
                    GAV es una app web diseñada por encargo de la empresa Hootie
                    Hoo, con el fin de entregar contenido didáctico con respecto
                    al covid-19.{" "}
                    <strong>
                      Ganador del proyecto empresa en Laboratoria.
                    </strong>
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
                      <p className="julio">Agosto 2020</p>
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
                <h5 className="experienciaJapan">
                  <mark
                    style={{
                      background: "rgb(111 66 193 / 71%)",
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                    Experiencia GAV
                  </mark>
                </h5>
                <p
                  className="comoToda mt-4
                "
                >
                  El Proyecto GAV, tien como objetivo <strong>brindar una solución a los usuarios por medio de la inclusión y gamificación.</strong> Esto quiere decir que debe ser accesible y legible para todo tipo de usuarios y explicar claramente las implicancias del virus Covid-19 de manera que su entendimiento sea didáctico.
                  
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className=" desdeAqui ">
                 Para esto, realicé una investigación enfocada en usuarios reales con el fin de descubrir hallazgos que permitieran crear el contenido de la página.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ctnExpJapan container row col-sm-12 ">
          <div className="container col-sm-12 col-md-10">
            <div className="row">
              <div className=" col-sm-10 col-md-6">
                <h5 className="experienciaJapan">
                  <mark
                    style={{
                      background: "rgb(165 73 187 / 51%)",
                      color: "rgba(89, 89, 89, 1)",
                    }}
                  >
                    Investigación con Usuarios
                  </mark>
                </h5>
                <p
                  className="comoToda mt-4
                "
                >
                  En base al contexto de pandemia, realicé una encuesta <strong>enfocada a padres o tutores de niños entre 4 a 9 años</strong>, rango etario que se tomó como hallazgo dentro de la investigación. Si bien, nuestros usuario directos son los padres o tutores, el objetivo principal es que ellos puedan guiar a los niños en el uso de la página. 
                  
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className=" desdeAqui ">
                 Aquí se presentó un gran desafío que tenía que ver con 
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
                    A algunos clientes les resulta difícil decidir al momento de
                    elegir un plato
                  </strong>
                </p>
                <p className="cambian col-md-12">
                  <strong>
                    Cambian su pedido varias veces antes de finalizarlo
                  </strong>
                </p>
              </div>

              <div className=" ctnQuien col-sm-12 col-md-9">
                <p className=" col-md-12 quien">
                  Quien se enfrenta a situación directamente es el mesero,
                  tomando en cuenta que hasta ese momento utilizaría lápiz y
                  papel para anotar la información del pedido. Esto supone una
                  gran dificultad.
                </p>
                <p className="col-md-12 cliente">
                  Si el cliente tiende a cambiar de decisión, no es posible que
                  el mesero anote y tache reiteradamente, produciendo confusión
                  en el resumen del pedido y generando otro problema, el tiempo
                  en que este llegaría a cocina y si sería legible para el chef,
                  al momento de preparar la comida.
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
              <img
                className="img-fluid jp "
                src={japanCarousel}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid jp" src={mesero} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="img-fluid jp " src={pedidos} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-sm-12">
          <div className="ctnresult container col-sm-12 col-md-10">
            <h5 className=" que">¿Qué te gustó de este proyecto?</h5>
            <p className="col-sm-12 textQue">
              Lo que más me gustó de este proyecto, fue poder darle una
              identidad visual al producto. Fue un desafío poder encontrar una
              imagen representativa y a la vez legible y eficaz. Finalmente creo
              que el resultado superó mis propias espectativas.
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
                  <Card.Title className="cardTittle">
                    Recetas Unimarc
                  </Card.Title>
                  <Card.Text
                    style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                    className="cardText"
                  >
                    Rediseño de la sección de recetas correspondiente a la
                    plataforma web Unimarc. Proyecto ganador "Hackaton"
                    Laboratoria
                  </Card.Text>
                  <Link to="">
                    {" "}
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
export default JapanQueen;

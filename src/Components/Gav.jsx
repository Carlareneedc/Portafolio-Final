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
import gamificacion from "../img/gamificacion.png"

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
                  El Proyecto GAV, tiene como objetivo{" "}
                  <strong>
                    brindar una solución a los usuarios por medio de la
                    inclusión y gamificación.
                  </strong>{" "}
                  Esto quiere decir que debe ser accesible y legible para todo
                  tipo de usuarios y explicar claramente las implicancias del
                  virus Covid-19 de manera que su entendimiento sea didáctico.
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className=" desdeAqui ">
                  Para esto, realicé una investigación enfocada en usuarios
                  reales con el fin de descubrir hallazgos que permitieran crear
                  el contenido de la página.
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
                    ¿Cómo gamificar información del covid-19 a niños entre 4 a 9
                    años?
                  </strong>
                </p>
                <p className="gav col-md-12">
                  <strong>¿De qué manera generar contenido inclusivo?</strong>
                </p>
              </div>

              <div className=" ctnQuien col-sm-12 col-md-9">
                <p className=" col-md-12 quien">
                  El contexto de la pandemia generó cambios en los hábitos de
                  todas las personas en el mundo, pero aún más en la vida de los
                  niños. Es difícil para ellos llegar a entender las
                  sus consecuencias, considerando que son graves y no
                  se deben tomar a la ligera. El desafío en este caso es
                  explicar por ejemplo, por qué no pueden abrazar a sus amigos,
                  ir al colegio o ver a sus familiares.
                </p>
                <p className="col-md-12 cliente">
                  Por otro lado considerar que en base al rango etario de estos
                  niños, hay muchos de ellos que no saben leer ni escribir, por
                  ende no podrán comprender información escrita. Así mismo poder
                 incluir a personas con capacidades diferentes y también
                  dificultades para acceder a WiFi.
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
                  En base al contexto de pandemia, realicé una encuesta{" "}
                  <strong>
                    enfocada a padres o tutores de niños entre 4 a 9 años
                  </strong>
                  , rango etario que se tomó como hallazgo dentro de la
                  investigación. Si bien, nuestros usuario directos son los
                  padres o tutores, el objetivo principal es que ellos puedan
                  guiar a los niños en el uso de la página. 
                </p>
                <p className="eldesafio">El desafío en base a a los usuarios, también se relaciona con la posibilidad de darle solución al problema planteado anteriormente y poder incorporar la inclusión. Para esto se definieron usuarios indirectos, los que no acceden por si mismos a la página, sin embargo pueden conocer su contenido.</p>
                <p className="textopro">
                  <strong>Personas con capacidades diferentes.</strong> En este caso, se consideran a personas que tengan algún tipo de discapacidad visual como daltonismo o disminución de la visión.
                </p>
                <p className="mesero">
                  <strong>Niños que no saben leer ni escribir.</strong> serán guiados por sus padres en el acceso al contenido.
                </p>
               
              </div>
              <div className=" col-md-6 ">
                <img src={gamificacion} className="gam" alt="gam" />
              </div>
              <div className="ctngav row ">
          <div className="container col-sm-12 col-md-12">
            <div className="row ">
              <div className=" col-sm-12 col-md-6">
                
                <p
                  className="comoToda mt-4
                "
                >
                  
              Por medio de la investigación y considerando los usuarios declarados anteriormente, hubieron importantes hallazgos que permitieron generar una solución efectiva. Estos hallazgos, por un lado, se relacionan directamente con los que los padres de este rango etario de niños declararon. Entre estos, <strong>la necesidad de crear hábitos, poder explicar lo que significa el virus de manera didáctica.</strong>
            
              </p>

              
              </div>

              <div className="col-md-6">
                
                <p className=" entreestos ">No generar más confusión con más información y también mostrar que podría existir una salida y una mejora. Por otro lado, encontrar la manera de poder hacer que el contenido pudiera llegar a nuestros usuarios indirectos.</p>
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
              
              <p className="porotro"> La solución final fue crear una interfaz desarrollada para <strong>desktop y mobile</strong>, considerando que nuestros usuarios pueden tener acceso a un computador, sin embargo en el presente el acceso a un teléfono es más generalizado. El diseño de la página hace referencia a un tablero de juego donde el usuario puede elegir a qué sección acceder, en cada una existe material explicativo sobre el virus y su viaje por el mundo, como un cuento que puede ser relatado. </p><p className="cadaseccion">Cada sección también contiene imágenes alusivas al tema, caricaturas, audios y videos que corresponden a la serie de <strong>"Puma espuma y el escuadrón prevención"</strong>. Este material audiovisual <strong>soluciona el problema relacionado con los usuarios que poseen capacidades diferentes.</strong> Juegos y actividades para realizar en casa, además de material descargable, <strong>solucionando el problema relacionado al acceso limitado a wifi.</strong></p>
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

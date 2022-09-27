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
import { Link } from "react-router-dom";
import { Card, Button, CardDeck } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import FooterPage from "./Footer";
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";
import Edfin from "../img/edfinanciera.png";
import figmap from "../img/figmapan.png";
import figmados from "../img/fg.png";
/* import japanCarousel from "../img/pantallainicio.png";
import mesero from "../img/vistamesero.png";
import pedidos from "../img/pedidos.png"; */
import portal from "../img/portal.png";

import "../styleCSS/JapanQueen.css";

import edresultuno from "../../src/img/edresult1.png";
import edresultdos from "../../src/img/edresult2.png";
import edresultres from "../../src/img/edresult3.png";
import edresultcuatro from "../../src/img/edresult4.png";
import tango from "../img/tango.png"
import migrante from "../img/migrante.png";
/* import unimarc from "../img/unimarc.png"; */

class EdFinanciera extends React.Component {
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
                  <Link to="">
                    {" "}
                    <MDBNavLink
                      className=""
                      style={{ color: "rgba(89, 89, 89, 1)" }}
                      to=""
                    >
                      Proyectos
                    </MDBNavLink>
                  </Link>
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
                    Re diseño y transformación digital del programa de educación financiera
                    diseñada para las mujeres
                    pertenecientes al Programa Familia de <strong>FOSIS</strong>, a cargo de
                    <strong> SATORI</strong> en conjunto con el <strong>Instituto de Estudios Peruanos.</strong>
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
                  El mayor desafío en este proyecto, tiene que ver con el{" "}
                  <strong>re diseño y transformación digital.</strong> Este
                  programa se realizaba de forma presencial en distintas
                  ciudades de Chile con usuarias y usuarios que participaban de
                  los cursos y talleres en general del FOSIS. La presencialidad era lo que más se valoraba de este taller, poniendo así un gran nivel de complejidad en su transformación.
                
                </p>
              </div>

              <div className="col-sm-12 col-md-6">
                <p className=" desdeAqui ">
                  Desde la premisa de lo presencial y considerando además que
                  nos encontramos en el segundo año de pandemia, se planteo la
                     relevancia de desarrollar y diseñar una plataforma para poder llegar a
                    más usuarios y <strong>elevar la alfabetización digital.</strong>
             
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
                    Transformación digital de un programa presencial.
                  </strong>
                </p>
                <p className="cambian col-md-12">
                  <strong>
                    Nuestras usuarias tienen un bajo nivel de alfabetización digital y
                    tecnológico.
                  </strong>
                </p>
              </div>

              <div className=" ctnQuien col-sm-12 col-md-9">
                <p className=" col-md-12 quien">
                  La importancia de realizar una transformación digital que no
                  solo pueda llegar a más usuarias, si no que la usabilidad sea
                  lo suficientemente amigable para que dichas usuarias puedan
                  encontrarle valor a este programa que cambiaría de una
                  experiencia presencial a digital, con todo lo que esto
                  implica.
                </p>
                <p className="col-md-12 cliente">
                  Lograr conectar desde la empatía con estas usuarias y
                  comprender de qué manera sería posible llegar a ellas y
                 
                  entregar un <strong>producto que fuera limpio y centrado en el
                    usuario en cuanto a usabilidad,
                  </strong>{" "}
                  además de ir a la par con la tecnología en estos tiempos,
                  logrando convertirse un caso de éxito.
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
                  El proceso de investigación en este proyecto, partió desde lo
                  cualitativo. Se realizaron entrevistas de usuario a algunas
                  participantes del curso presencial, junto con entrevistas a
                  consejeras que eran quienes las acompañaban en los procesos de
                  aprendizaje.
                </p>
                <p className="textopro">
                  Considerando los hallazgos conseguidos en esta investigación,
                  se definió la importancia de lograr mantener el interés de las
                  usuarias considerando todo lo que{" "}
                  <strong>
                    se perdería de la experiencia presencial y lo que se podría
                    ganar desde lo digital.
                  </strong>
                </p>
                <p className="mesero">
                  Desde aquí el paso a seguir fue realizar un benchmark para
                  conocer si existían competencias directas o casos de éxito que
                  se pudieran tomar como referencia, considerando las diferentes
                  fortalezas que estos pudieran tener. En base a los
                  descubrimientos hechos en el benchmark, se pudo establecer que
                 
                    no  <strong>existían muchas aplicaciones de educación financiera
                    específicamente enfocadas en mujeres
                  </strong>{" "}
                  y que además, partieran de una base simple, que no tuvieran
                  enfoque en negocios, bitcoins, ganancias en bolsas de valor,
                  etc.
                </p>
                <p className="chef">
                  Como base para comenzar el proceso de construcción y diseño de
                  este proyecto, se propone una estrategia basada en Design
                  Sprint en el que cada semana se fueron desarrollando los
                  contenidos y soluciones para cada pantalla, todo esto basado
                  en los dolores de las usuarias y sus necesidades. Como
                  resultado se plantea crear un MVP que luego se convertiría en
                  un piloto que se probaría con 500 usuarias para luego lograr
                  su implementación formal el año 2022.
                </p>
              </div>
              <div className=" col-md-6 ">
                <img src={figmap} className="humans" alt="humans" />

                <img src={figmados} className="humans" alt="humans" />
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
                La propuesta de valor que se desarrolla durante el proyecto como
                solución a los problemas planteados, se relaciona con el diseño
                e implementación de una <strong>App mobile,</strong>{" "}
                considerando que la mayoría de nuestras usuarias poseen
                teléfonos celulares, no así computadores o notebooks. El acceso
                a internet y en general a la tecnología es limitado para ellas,
                por ende es necesario que puedan acceder al programa por medio
                de un instrumento útil, conocido y fácil de usar. El programa
                consta de 4 módulos en que se les explica y propone ejercicios
                que tienen que ver con educación financiera pero desde un
                enfoque familiar y acotado, es decir, partir por casa. El tono
                de comunicación que se utiliza es cercano en función de
                facilitar el entendimiento y lograr que los contenidos sean
                comprensibles, sobre todo con un tema que puede sonar tan
                complicado como la economía.
              </p>
              <p className="segun">
                Otro tema importante a considerar, fue el uso de emojis y
                personajes alusivos al programa. De este modo, se vuelve a
                remarcar la importancia de la cercanía y de poder evitar que se
                vuelva un contenido tedioso y que la visualidad no aporte en
                este sentido.
              </p>
            
              <p className="segun">
                El programa fue testeado con las usuarias, las que tuvieron muy
                buena acogida y entendimiento, recalcando que el programa
                efectivamente les ha ayudado con los temas financieros, pero que
                además, han podido acercarse mucho más a la tecnología. Lo más
                valorado fue el diseño y la sensación de cercanía que generó.
              </p>
              <p className="segun">
              
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
              <a target="_blank" href="https://www.figma.com/proto/cln81QGH4oe4QpxqrIyNQA/MVP-EF?node-id=986%3A3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=986%3A3&show-proto-sidebar=1">
                {" "}
                <img
                  className="img-fluid jp "
                  src={edresultuno}
                  alt="First slide"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://edufinancierafosis.com/invitation ">
                {" "}
                <img
                  className="img-fluid jp "
                  src={edresultdos}
                  alt="First slide"
                />
              </a>
            </Carousel.Item>
            
            <Carousel.Item>
              <a target="_blank" href="https://edufinancierafosis.com/invitation ">
                <img
                  className="img-fluid jp "
                  src={edresultres}
                  alt="Third slide"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a target="_blank" href="https://edufinancierafosis.com/invitation ">
                <img
                  className="img-fluid jp "
                  src={edresultcuatro}
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
              Lo que más me gustó de este proyecto, fue el desafío de la transformación digital. Además creo que la importancia de los dolores de las usuarias era el foco de este proyecto, lograr que efectivamente ellas pudieran acceder a la educación financiera y darles mayor valor por el hecho de estar 100% enfocado en mujeres de escasos recursos y la manera en que de a poco se fueron acercando a la tecnología. Si bien no es una app que por el momento tenga un enfoque de negocios, creo firmemente que en próximas iteraciones, podría ser un muy importante proyecto para privados.
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
                    Construcción y corrección de Landing para la campaña Cyber
                    Monday en Mercado Libre y Portal Inmobiliario.
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
                <Card.Img variant="top" src={tango} />
                <Card.Body>
                  <Card.Title className="cardTittle">Tango Rent</Card.Title>
                  <Card.Text
                    style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                    className="cardText"
                  >
                    Sitio de venta y arriendo de propiedades 100% on line.
                  </Card.Text>
                  <Link to="/Gav">
                    <Button
                      variant="#FF3C38"
                      style={{
                        marginTop: "3.6rem",
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
                <Card.Img className="imgUni" variant="top" src={migrante}/>
                <Card.Body>
                  <Card.Title className="cardTittle">
                    Migrante
                  </Card.Title>
                  <Card.Text
                    style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                    className="cardText"
                  >
                    Diseño de plataforma nacional e internacional de simulación de créditos para migrantes.
                  </Card.Text>
                  <Link to="/Gav">
                    {" "}
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
            </CardDeck>
          </div>
        </div>
        <FooterPage />
      </div>
    );
  }
}
export default EdFinanciera;

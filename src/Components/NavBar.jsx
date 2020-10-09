import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBView,
  MDBBadge, 
  MDBContainer
} from "mdbreact";
import { Card, Button, CardDeck } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import logo from "../img/logo.png";
import contacto from "../img/contacto.png";
import retrato from "../img/retrato.png";
import japan from "../img/proyectouno.png";
import gav from "../img/gav.png";
import unimarc from "../img/unimarc.png";

class FullPageIntroWithFixedNavbar extends React.Component {
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
                    <img className="" src={contacto} alt="imgcontacto" />
                  </MDBNavbarBrand>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView className="fondo_especie ">
            <div className="flex-center ctn">
              <div className="row">
                <div className="col-sm-12 col-md-5 mt-0">
                  <img className=" retrato" src={retrato} alt="imgretrato" />
                </div>

                <div className="textoPresentacion  col-sm-12 col-md-6 ">
                  <h5 className="hola ">
                    Hola, soy{" "}
                    <mark
                      style={{
                        background: "rgb(254 212 116 / 57%)",
                        borderRadius: "10px 17px 17px 10px",
                        paddingRight: "0.8rem",
                        paddingTop: "0rem",
                        paddingBottom: "0rem",
                      }}
                    >
                      <mark
                        style={{
                          background: "#FED474",
                          borderRadius: "10px 17px 17px 10px",
                          paddingRight: "0.8rem",
                          paddingTop: "0rem",
                          paddingBottom: "0rem",
                        }}
                      >
                        <mark
                          style={{
                            background: "rgb(255 88 51 / 37%)",
                            borderRadius: "10px 17px 17px 10px",
                            paddingRight: "0.8rem",
                            paddingTop: "0rem",
                            paddingBottom: "0rem",
                          }}
                        >
                          <mark
                            style={{
                              background: "rgba(220, 21, 21, 0.21)",
                              borderRadius: "10px 17px 17px 10px",
                              color: "rgba(89, 89, 89, 1)",
                              paddingTop: "0rem",
                              paddingBottom: "0rem",
                            }}
                          >
                            <span className="carla">Carla</span>
                          </mark>
                        </mark>
                      </mark>
                    </mark>
                  </h5>
                  <p className="vivoen">
                    Vivo en Santiago, Chile.UX/UI Designer autodidacta.
                  </p>
                  <p className="soyUna">
                    Soy una entusiasta investigadora, solucionadora de problemas
                    y amante de la vida social
                  </p>
                </div>
              </div>
            </div>
          </MDBView>
        </header>
        <h5 className="proyectos">
          <mark
            style={{
              background: "rgba(220, 21, 21, 0.23)",
              color: "rgba(89, 89, 89, 1)",
            }}
          >
            Proyectos
          </mark>
        </h5>
        <div className=" container col-md-10 flex-center">
          <CardDeck>
            <Card
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
                <Card.Title className="cardTittle">Recetas Unimarc</Card.Title>
                <Card.Text
                  style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                  className="cardText"
                >
                  Rediseño de la sección de recetas correspondiente a la
                  plataforma web Unimarc. Proyecto ganador "Hackaton"
                  Laboratoria
                </Card.Text>
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
              </Card.Body>
            </Card>
          </CardDeck>
          {/*<Card
            style={{
              width: "25vw",
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
                App para restaurantes que se origina como solución a la gestión
                de pedidos, eliminando el uso de comandas y toma de ordenes a
                mano.
              </Card.Text>
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
            </Card.Body>
          </Card>
          <Card style={{
              width: "25vw",
              borderRadius: "20px 20px 0px 0px",
              border: "none",
            }}>
            <Card.Img variant="top" src={gav} />
            <Card.Body>
              <Card.Title className="cardTittle">GAV</Card.Title>
              <Card.Text
                style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                className="cardText"
              >
                Sitio gamificado en donde se entrega información sobre el
                covid-19. Desarrollado para padres y tutores de niños entre 4 a
                7 años.
              </Card.Text>
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
            </Card.Body>
          </Card>
          <Card style={{
              width: "25vw",
              borderRadius: "20px 20px 0px 0px",
              border: "none",
            }}>
            <Card.Img variant="top" src={unimarc} />
            <Card.Body>
              <Card.Title className="cardTittle">Recetas Unimarc</Card.Title>
              <Card.Text
                style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.1em" }}
                className="cardText"
              >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
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
            </Card.Body>
              </Card>*/}
              
        </div>
        
     <div className=" container contTags ">
          <h5 className="tePuedo"><mark style={{
              background: "rgba(220, 21, 21, 0.23)",
              color: "rgba(89, 89, 89, 1)",
            }}>Te puedo ayudar con esto</mark></h5>
          
          <div className="tags row col-md-12">
          
            <p className="tagUno">Reseacrh</p>
            <p className="tagDos">Benchmark</p>
            <p  className="tagTres">sketching</p>
            
            <p  className="tagCuatro">Wireframing</p>
            <p  className="tagCinco">Prototyping</p>
            <p className="tagSeis">Testing</p>
          
        </div>
        </div>
              {/*<div className="tags">
              <p style={{background:"rgba(37, 222, 178, 0.3)", borderRadius:"25px", paddingTop:"0.8rem", height:"6vh",width:"10vw"}}>Research</p>
              <p style={{background:"rgba(37, 222, 178, 0.3)", borderRadius:"25px", paddingTop:"0.8rem", height:"6vh",width:"10vw"}}>Benchmark</p>
              <p style={{background:"rgba(37, 222, 178, 0.3)", borderRadius:"25px", paddingTop:"0.8rem", height:"6vh",width:"10vw"}}>Sketching</p>
              <p style={{background:"rgba(37, 222, 178, 0.3)", borderRadius:"25px", paddingTop:"0.8rem", height:"6vh",width:"10vw"}}> Wireframing</p>
              <p style={{background:"rgba(37, 222, 178, 0.3)", borderRadius:"25px", paddingTop:"0.8rem", height:"6vh",width:"10vw"}}>Prototyping</p>
              <p style={{background:"rgba(37, 222, 178, 0.3)", borderRadius:"25px", paddingTop:"0.8rem", height:"6vh",width:"10vw"}}> Testing</p>
           
            </div>*/}
                  
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;

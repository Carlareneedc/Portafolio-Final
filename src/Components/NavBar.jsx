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
} from "mdbreact";
import {Card, Button} from 'react-bootstrap'
import { BrowserRouter as Router } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../styleCSS/NavBar.css";
import logo from "../img/logo.png";
import puntos from "../img/puntos.png";
import contacto from "../img/contacto.png";
import retrato from "../img/retrato.png";


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
            <div className="container flex-center ">
              <div className="row">
                <div className="col-sm-12 col-md-5 mt-0">
                  <img className=" retrato" src={retrato} alt="imgretrato" />
                </div>

                <div className="textoPresentacion  col-sm-12 col-md-7 ">
                  <h5 className="hola ">
                    Hola, soy{" "}
                    <mark style={{ background: "rgb(254 212 116 / 57%)", borderRadius: "10px 17px 17px 10px", paddingRight:"0.8rem", paddingTop:"0rem", paddingBottom:"0rem"}}>
                    <mark style={{ background: "#FED474", borderRadius: "10px 17px 17px 10px", paddingRight:"0.8rem", paddingTop:"0rem", paddingBottom:"0rem"}}>
                    <mark style={{ background: "rgb(255 88 51 / 37%)", borderRadius: "10px 17px 17px 10px",paddingRight:"0.8rem", paddingTop:"0rem", paddingBottom:"0rem" }}>
                    <mark
                      style={{
                        background: "rgba(220, 21, 21, 0.21)",
                        borderRadius: "10px 17px 17px 10px",
                        color: "rgba(89, 89, 89, 1)",
                        paddingTop:"0rem",
                        paddingBottom:"0rem"
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
        <div className="container flex-center">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

</div>
      </div>
    );
  }
}

export default FullPageIntroWithFixedNavbar;

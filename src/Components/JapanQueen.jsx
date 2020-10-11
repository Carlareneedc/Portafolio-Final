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

                <p className=" col-sm-12 japanEs">
                  Japan Queen es una app web diseñada para restaurantes, que se
                  origina como solución a la gestión de pedidos por medio de una
                  interfaz simple y amigable, evitando el antiguo uso de
                  comandas y toma de ordenes a mano.
                </p>
                <div className="">
                  <div className=" col-sm-12 col-md-6  float-left">
                    {" "}
                    <h5 className="rolText ">Rol</h5>
                    <p className="ux">UX/UI Designer</p>{" "}
                    <h5 className=" rolText">Actividades</h5>
                    <div className="container">
                      <div className="row tagsJapan">
                    <p className="uxR"><mark style={{background:"rgba(255, 150, 126, 1)", borderRadius:"25px", padding:"0.5rem"}}>UX Research</mark></p>
                    <p className="proto"><mark style={{background:"rgba(254, 214, 123, 0.9)", borderRadius:"25px", padding:"0.5rem 1.5rem", marginLeft:"1rem"}}>Prototipo</mark></p>
                    <p className="ui"><mark style={{background:"rgba(235, 135, 147, 1)", borderRadius:"25px", padding:"0.5rem 1rem"}}>Diseño UI</mark></p>
                    </div>
                    </div>
                  </div >
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
      </div>
      
    );
  }
}
export default JapanQueen;

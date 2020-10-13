import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import git from "../img/git.png"
import linkedin from "../img/linkedin.png"
import contact from "../img/contact.png"
import "../styleCSS/Footer.css"

const FooterPage = () => {
  return (
    <MDBFooter style={{background:"#2C948D"}} className="font-small pt-4 mt-4">
      
     
      
     <MDBCol >
            <div className="">  
            
            <a target="_blank" href="https://github.com/Carlareneedc"><img className="git ml-2" src={git} alt="git" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/carladiazc/"><img className="in ml-2" src={linkedin} alt="in" /></a>
            <a href="mailto:carla.renee.diazc@gmail.com"><img className="contact ml-2" src={contact} alt="contact" /></a>
            </div>
            <div style={{background:"#2C948D", fontFamily:"Merriweather", fontSize:"1.1em", fontWeight:"300"}} className="  py-3">
       
       <h5 className="editado" > Editado con amor y magía por <strong>Carla Díaz 🔮</strong> </h5>
    
     </div>
           
            </MDBCol>
      
    </MDBFooter>
  );
}

export default FooterPage;
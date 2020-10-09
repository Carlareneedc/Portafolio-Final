import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import git from "../img/git.png"
import linkedin from "../img/linkedin.png"
import contact from "../img/contact.png"
import "../styleCSS/Footer.css"

const FooterPage = () => {
  return (
    <MDBFooter style={{background:"#2C948D"}} className="font-small pt-4 mt-4">
      
     
      
     <MDBCol fluid className="">
            <div className="">  
            <img className="git ml-2" src={git} alt="git" />
            <img className="in ml-2" src={linkedin} alt="in" />
            <img className="contact ml-2" src={contact} alt="contact" />
            </div>
            <div style={{background:"#2C948D", fontFamily:"Merriweather", fontSize:"1.1em", fontWeight:"300"}} className="  py-3">
       
       <h5 className="editado" > Editado con amor y magía por <strong>Carla Díaz 🔮</strong> </h5>
    
     </div>
           
            </MDBCol>
      
    </MDBFooter>
  );
}

export default FooterPage;
import React from "react";
//import image from "../IMG_8664.jpg"
import image from "../images/IMG_0797.jpg";
import emaillogo from "../images/email1_logo.png"
import iglogo from "../images/linklogo.jpg"

//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../fontawesome"


function Info(){
    return(
        <div className="info--main">
            <img src={image} alt="test pic" className="info--image"/>
            <h3 className="info--name">Omokhepe Imobu</h3>
            <h5 className="info--desc">Frontend Developer</h5>
            
            <h6 className="info--site">omokhepe.website</h6>
           <div >
                <button>
                    <img src={emaillogo} alt="email logo" className="info--emailpix"/>
                    Email
                </button>
                <button className="info--social">
                    <img src={iglogo} alt="IG logo" className="info--igpix"/>
                    LinkedIn
                </button>
           </div>
        </div>
       
    )
}

export default Info
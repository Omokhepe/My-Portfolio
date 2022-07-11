import React from "react";
import twitterLogo from "../images/twitter1_logo.png";
import facebooklogo from "../images/facebook_logo.jpg";
import iglogo from "../images/insta_ logo.png";
import linkedin from "../images/linklogo.jpg";

function Footer(){
    return(
        <div className="footer--page">
            <div className="footer--inner">
            <img src={twitterLogo} alt="twitter logo" className="footer--twitter"/>
            <img src={facebooklogo} alt="facebook logo" className="footer--fb" />
            <img src={iglogo} alt="IG logo" className="footer--ig"/>
            <img src={linkedin} alt="linkedin logo" className="footer--in"/>
            </div>
        </div>
    )
}

export default Footer
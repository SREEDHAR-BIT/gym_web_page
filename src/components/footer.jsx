import React from "react";
import './footer.css';
import Github from '../assets/github.png';
import Insta from '../assets/instagram.png';
import Logo from '../assets/logo.png';
import Linkdin from '../assets/linkedin.png';

const Footer=()=>{
    return(
        <div className="footer-c">
            <hr />
            <div className="footer">
                <img src={Github} alt="" />
                <img src={Insta} alt="" />
                <img src={Linkdin} alt="" />
            </div>
            <div className='Logo-f'>
                <img src={Logo} alt="" />
            </div>
            <div className="shree">
                <span>Shree</span>
                <span> Creations</span>
            </div>
            
        </div>
    )
}

export default Footer
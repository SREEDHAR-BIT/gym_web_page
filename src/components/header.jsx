import React, { useState } from "react";
import './header.css';
import Logo from '../assets/logo.png'
import Bars from '../assets/bars.png'
// import {Link} from 'react-scroll'


const Header =() =>{

    // const mobile=window.innerWidth<=768 ? true : false;
    // const [menuOpened, setMenuOpened]=useState(false);
    return(
        <div className="header"> 
         <img  className="logo" src={Logo} alt="logo" />
        {/* {menuOpened===false && mobile===true ? (
        <div
        onClick={()=>setMenuOpened(true)} */}
        {/* >
            <img src={Bars} alt="" className="bars" />
        </div>  */}
        
       {/* ) : ( */}      
            <ul className="list">
            <nav><a href=""><li> Home</li></a></nav>
            <nav><a href="#Programs"><li>Programs</li></a></nav>
            <nav><a href="#Reasons"><li>Why us</li></a></nav>
            <nav><a href="#Plans"><li>Plans</li></a></nav>
            <nav><a href="#testimonials"> <li>Testimonals</li></a></nav>
        </ul>
        </div>
    );
};

export default Header;
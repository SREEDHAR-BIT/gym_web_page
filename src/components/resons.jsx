import React from "react";
import './resons.css';
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";
import Adidas from "../assets/adidas.png";
import Nb from "../assets/nb.png";
import Nike from "../assets/nike.png";
import Tick from "../assets/tick.png";
import { SassColor } from "sass";


const Reasons=()=>{
    return(
        <div className="Reasons" id="Reasons">
            <div className="left-r">
                <img src={Image1} alt="img1" />
                <img src={Image2} alt="img2" />
                <img src={Image3} alt="img3" />
                <img src={Image4} alt="img4" />
            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div>
                    <span className="stroke-text">why</span>
                    <span> choose us</span>
                </div>

                <div className="details-r">
                    <div>
                        <img src={Tick} alt=""></img>
                        <span>OVER 140+ EXPERT COACHES</span>
                    </div>
                    <div>
                        <img src={Tick} alt=""></img>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={Tick} alt=""></img>
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={Tick} alt=""></img>
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span style={{color:"gray"}}> OUR PARTNERS</span>
                <div className="partners">
                    <img src={Nike} alt="" />
                    <img src={Adidas} alt="" />
                    <img src={Nb} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons
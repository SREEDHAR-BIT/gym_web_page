import React from "react";
import './hero.css'
import Header from "./header";
import Heart from '../assets/heart.png';
import Hero_img from '../assets/hero_image.png';
import Hero_img_back from '../assets/hero_image_back.png';
import Colories from '../assets/calories.png';
import NumberCounter from 'number-counter'

import {delay, motion} from 'framer-motion'

const Hero =() =>{
    const transition={type:'spring',duration:3}
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header/>

                <div className="the-best-ad">
                    <motion.div 
                    initial={{left:'238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition, type:'tween'}}
                    > </motion.div>
                    <span>The best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>

                    <div>
                        <span>Ideal Body</span>
                    </div>

                    <div>
                        <span>In here we will help you yo shape and build your body and live up your life to fullest.</span>
                    </div>
                </div>
 
                <div className="figures">
                    <div>
                        <span><NumberCounter end={140} start={100} delay='5' preFix="+"/></span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={900} delay="5" preFix="+" /></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} preFix='+'/></span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-button">
                    <button className="btns">Get Started</button>
                    <button className="btns">Learn More</button>
                </div>


            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>


                <motion.div className="heart-rate"
                initial={{right:'-10rem'}}
                whileInView={{right:'0rem'}}
                transition={transition}>
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate </span><span> 116 bpm</span>
                </motion.div>
                <img className="hero-img" src={Hero_img} alt="hero_img" />
                <motion.img 
                initial={{right:'15rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
                className="hero-back" src={Hero_img_back} alt="hero back" />
            </div>
            <motion.div className="calories"
            initial={{right:'30rem'}}
            whileInView={{right:'42rem'}}
            transition={transition}>
                <img src={Colories} alt="colories" />
                <span>Calories burned</span>
                <span>220 kcal</span>
            </motion.div>
        </div>
    )
}

export default Hero
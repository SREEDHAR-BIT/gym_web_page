import React, { useState } from "react";
import './testimonials.css'
import {testimonialsData} from '../data/testimonialsData'
import Right from '../assets/rightArrow.png';
import Left from '../assets/leftArrow.png';
import { motion } from "framer-motion";

const Testimonials=()=>{

    const[Selected, setSelected]=useState(0);
    const tlength=testimonialsData.length;
    const transition={type:'spring',durattion:5};

    return(
        <div className="Testimonials" id="testimonials">
            <div className="left-t">
                <span>Testimonials </span>
                <span className="stroke-text">What they </span>
                <span>say about us</span>
                <motion.span
                key={Selected}
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1,x:0}}
                transition={transition}>
                    {testimonialsData[Selected].review}
                </motion.span>
                <span style={{margin:'0 0 0 0rem'}}>
                {testimonialsData[Selected].status}
                </span>
                <span>
                    <span style={{color:'orange', margin:'0 0 0 0rem'}}>
                        {testimonialsData[Selected].name}
                    </span>
                </span>
            </div>
            <div className="right-t">
                <motion.div
                initial={{opacity:0, x:-100}}
                transition={{...transition, durattion:4}}
                whileInView={{opacity:1, x:0}}
                ></motion.div>
                <motion.div
                initial={{opacity:0, x:100}}
                transition={{...transition,duration:2}}
                whileInView={{opacity:1,x:0}}>

                </motion.div>
                <motion.img 
                key={Selected}
                initial={{opacity:0,x:100}}
                whileInView={{opacity:1,x:0}}
                transition={{...transition,type:'tween'}}
                src={testimonialsData[Selected].image} alt="" />
                <div className="Arrows">
                    <img 
                    onClick={()=>{
                        Selected==0
                        ? setSelected(tlength-1)
                        : setSelected((prev)=>prev-1);
                    }}
                     src={Left} alt="" />
                    <img 
                    onClick={()=>{
                        Selected==tlength-1
                        ? setSelected(0)
                        : setSelected((prev)=>prev+1);
                    }}
                    src={Right} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
import React from "react";
import './programs.css'
import {programsData} from "../data/programsData";
import RightArrow from "../assets/rightArrow.png";

const Programs=()=>{
    return(
        <div className="Programs" id="Programs">
            <div className="Programs-header">
                <span className="stroke-text">Explore our</span>
                <span> Programs </span>
                <span className="stroke-text">to shape you</span>
            </div>

            <div className="Programs-catogory">
                {programsData.map((programs)=>(
                    <div className="catogory">
                        {programs.image}
                        <span>{programs.heading}</span>
                        <span>{programs.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="RightArrow" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs
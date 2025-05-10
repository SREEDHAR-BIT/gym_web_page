import React from "react";
import './plans.css';
import {plansData} from '../data/plansData'
import Tick from '../assets/whiteTick.png';

const Plans=()=>{
    return(
        <div className="Plans"  id="Plans">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="header-p" style={{gap:'2rem'}}>
                <span className="stroke-text">READY TO START </span>
                <span> YOUR JOURNRY </span>
                <span className="stroke-text"> NOW WITH US</span>
            </div>
            <div className="card">
                {plansData.map((plans, i)=>(
                    <div className="plan" key={i}>
                        {plans.icon}
                        <span> {plans.name}</span>
                        <span>$ {plans.price} </span>

                        <div className="features">
                            {plans.features.map((feature,i)=>(
                                <div className="feature">
                                    <img src={Tick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits   ~> </span>
                            <button className="btnss">Join Now</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Plans
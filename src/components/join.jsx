import React, { useRef } from "react";
import './join.css'
import emailjs from '@emailjs/browser';

const Join=()=>{
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_d8q1yvm', 'template_9u80hc6', form.current, {
            publicKey: '3k99vHdYIBokvSgJ2',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <div className="join" id="join">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span> <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>

            </div>
            <div className="right-j">
                <form ref={form} className="email" onSubmit={sendEmail}>
                    <input type="email" name="user-email" placeholder="Enter your email adderss"/>
                    <button className="join-btn">Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join;
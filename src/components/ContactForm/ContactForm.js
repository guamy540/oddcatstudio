import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contactform.css'
import Topimage from './Contactimagetop'
import C6 from "../../images/HeroCarousel/C6.gif"
import ReCAPTCHA from 'react-google-recaptcha'
import { useState } from 'react'

const ContactForm = () => {
   const recaptchaKey = "6Lcl2PgeAAAAAJyMBH6IBNI96N2PH6T35jmiGVK1";

    function sendEmail(e){
        if (!isVerified){e.preventDefault();
            alert('Please verify that you are a human.')
        }
        else{
            e.preventDefault();
            emailjs.sendForm(
                'service_4ahsf2q', 
                'template_2t3vxpq', 
                e.target, 
                "dcF86sVQDcg-rCBo-"
                ).then(res=>{
                    console.log(res)
                }).catch(err=>console.log(err));
                alert('Thanks for reaching out! We will be in contact with you shortly.')
                setTimeout(function () {window.location.reload();}, 10)
        }
    }

    const[isVerified, setVerified] = useState(false);

    function verifyCallback(e){
        setVerified(true)
    }
  
    return (
        <div>
            <Topimage/>
        <div className="contactContainer">
            <div className='contactImageContainer'>
            <img src={C6} className='c6' alt="cash app and venmo accepted"/>
            </div>
         <div className='contactTextContainer'>
          <h1 className='contactHeader'>Contact Us</h1>
          <form className='contactRow' onSubmit={sendEmail}>

              <label>Name</label>
              <input type="text" name="name" className="form-control"/>

              <label>Email</label>
              <input type="email" name="user_email" className="form-control"/>

              <label>Message</label>
              <textarea name='message' rows='4' className="form-control"/>

              <ReCAPTCHA
                sitekey={recaptchaKey}
                onChange={verifyCallback}
              />

              <input type='submit' value='Send' className="form-control btn btn-primary"/>
          </form>
          </div>
        </div>
        </div>
  )
}

export default ContactForm

import React from 'react'
import '../styles/Contact.css'
import {DotLottieReact} from '@lottiefiles/dotlottie-react'
import SlideIn from './SlideIn';

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b4d78d14-721c-4e9b-8860-5c93718f88db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return (
    <>
    <h1 className='contact-head'>Get In Touch</h1>
    <div className='contact'>
        <div className='lottie-wrapper'>
            <DotLottieReact
                src='/connect.json'
                loop
                autoplay
                
            />
        </div>
        <SlideIn>
                <form className='contact-form' onSubmit={onSubmit}>
                <div className='contact-tittle'> Contact Me</div>
                    <div className='input-box'>
                        <label style={{fontSize:'20px'}}>First Name</label>
                        <input
                            name='firstname'
                            type='text'
                            placeholder='First Name'
                            className='input'
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <label style={{fontSize:'20px'}}>Last Name</label>
                        <input
                            name='lastname'
                            type='text'
                            placeholder='Last Name'
                            className='input'    
                        />
                    </div>
                    <div className='input-box'>
                        <label style={{fontSize:'20px'}}>Enter your Email</label>
                        <input
                            name='email'
                            type='email'
                            placeholder='Enter your Email'
                            className='input'
                            required
                        />
                    </div>
                    <div className='input-box'>
                        <label style={{fontSize:'20px'}}>Your Message</label>
                        <textarea
                            name='description'
                            type='text'
                            placeholder='Your Message'
                            className='input desc'
                            required
                        ></textarea>
                    </div> 
                    <button className='contact-btn' type='submit'>Connect</button>
                    <p className='result'>{result}</p>
                        
                </form>
            
        </SlideIn>
        
    </div>
    </>
  )
}

export default Contact
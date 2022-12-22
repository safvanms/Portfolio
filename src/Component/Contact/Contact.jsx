import React , {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';



export default function Contact() {

     const form = useRef();

     const [done , setDone] = React.useState(false)

     const sendEmail = (e) => {
       e.preventDefault();
   
       emailjs.sendForm('service_hveae9e', 'template_h0pt7ew', form.current, 'xu8Kam8NiXOUBMS0s')
         .then((result) => {
             setDone(true);
         }, (error) => {
         });
     };



  return (
    <div className="contact-form" id='contact'>
     <div className="w-left">
          <div className="awesome">
               <span>Get in touch</span>
               <span>Contact me</span>
               <div
                className="blur s-blur1"
                style={{background:"#ABF1FF94"}}
                ></div>
          </div>
     </div>

     <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
               <input type='text' name='user-name' className='user' placeholder='Name' required/>
               <input type='email' name='user-email' className='user' placeholder='Email' required/>
               <textarea name='message' className='user' placeholder='Message' required/>
               <input type='submit' value='Send' className='button btns' />
               <span>{done && "Thanks for contacting me :)"}</span>
               <div 
               className="blur c-blur1"
               style={{background: 'var(--purple)'}}
               ></div>

          </form>
     </div>

    </div>
  )
}

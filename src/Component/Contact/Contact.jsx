import React , {useRef, useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';




export default function Contact() {

     const form = useRef();

     const [done , setDone] = useState(false)
     const [clicked , setClicked]= useState(false)



     const sendEmail = (e) => {
       e.preventDefault();
       setClicked(true)
       emailjs.sendForm('service_hveae9e', 'template_vivhlag', form.current, '3WioZUouk2DZQ6kQE')
         .then((result) => {
             setDone(true);
             e.target.reset();
         }, (error) => {
         });
     };

     const styles ={
          btn : {
          width : '150px',
          height : '35px',
          borderRadius:"10px",
          border : 'none'
          },
          spn:{
               marginTop:"-15px",
               fontSize : "22px"
          }
     }



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
          <form ref={form} onSubmit={sendEmail}  >
               <input type='text' name='user-name' className='user' placeholder='Your Name'  required/>
               <input type='email' name='user-email' className='user' placeholder='Your Email'   required/>
               <textarea name='message' className='user' placeholder='Message...'   required/>
               {!clicked ? <input  type='submit' value='Send' className='button btns' /> : <button style={styles.btn} disabled="true" > Sent</button> }  
               <span style={styles.spn}>{done && "Thanks for contacting me 😊"}</span>
               <div 
               className="blur c-blur1"
               style={{background: 'var(--purple)'}}
               ></div>

          </form>
     </div>

    </div>
  )
}

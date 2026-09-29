import "./css-file/contact.css";
import { motion } from "motion/react";
import hero from "./assets/hero-image.avif"

export function Contact(){
    return(
        <section id="contact" className="contact">
           <motion.div 
           initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            transition={{duration: 1, ease: "anticipate"}}
            viewport={{once: true}}
           className="contact-left">
              <div className="contact-head">
                <p>Come say hello</p>
              </div>

              <div className="contact-h">
                <h1>Visit Us Today</h1>
              </div>

              <div className="contact-paragraph">
                <p>Drop in for everyday phone essentials, connectivity, entertainment, and a refreshing break.</p>
              </div>

              <div className="contact-main">

                <div className="contact-all-first">
                    {/* <img src="" alt="" /> */}
                    <p>Gadamayo hayin gada</p>
                </div>

                <div className="contact-all-no">
                    {/* <img src="" alt="" /> */}
                    <a href="tel:+2349117266829">+234 911 736 6829</a>
                </div>
                
                <div className="contact-all-whatsapp">
                    {/* <img src="" alt="" /> */}
                     <a href="https://wa.me/qr/PL5B3ZUAXH5QD1" target="blank">Chat with us on WhatsApp</a>
                </div>
                <div className="contact-all-days">
                    {/* <img src="" alt="" /> */}
                    <p>Mon–Sat, 7:00 AM–9:00 PM</p>
                </div>
                <div className="contact-all-email">
                    {/* <img src="" alt="" /> */}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mikailamohammad23@gmail.com"
                    target="_blank"
                   rel="noopener noreferrer"
>mikailamohammad23@gmail.com</a>
                </div>
              </div>
                
                <div className="contact-btn">
                    <a href="https://wa.me/qr/PL5B3ZUAXH5QD1" target="blank">
                        Contact Us 
                    </a>
                </div>

           </motion.div>

           <motion.div
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            transition={{duration: 1, ease: "anticipate"}}
            viewport={{once: true}}
           className="contact-right">
              <img style={{
                width: "100%", height: "100%",
                objectFit: "fill"
              }} src={hero} alt="" />
           </motion.div>
        </section>
    )
}
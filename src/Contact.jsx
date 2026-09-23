import "./css-file/contact.css";
import { motion } from "motion/react";

export function Contact(){
    return(
        <section id="contact" className="contact">
           <motion.div 
           initial={{opacity: 0, y: 10, scale: 0.7}} whileInView={{opacity: 1, y: -10, scale: 1}}
            transition={{duration: 0.2, ease: "backIn"}}
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

                <div className="contact-all">
                    {/* <img src="" alt="" /> */}
                    <p>Gadamayo hayin gada</p>
                </div>

                <div className="contact-all">
                    {/* <img src="" alt="" /> */}
                    <a href="09117366829">+234 911 736 6829</a>
                </div>
                
                <div className="contact-all">
                    {/* <img src="" alt="" /> */}
                     <a href="#">Chat with us on WhatsApp</a>
                </div>
                <div className="contact-all">
                    {/* <img src="" alt="" /> */}
                    <p>Mon–Sat, 7:00 AM–9:00 PM</p>
                </div>
                <div className="contact-all">
                    {/* <img src="" alt="" /> */}
                    <a href="#">mikailamohammad23@gmail.com</a>
                </div>
              </div>
                
                <div className="contact-btn">
                    <a href="#">
                        Contact Us →
                    </a>
                </div>

           </motion.div>

           <motion.div
           initial={{opacity: 0, y: 10, scale: 0.7}} whileInView={{opacity: 1, y: -10, scale: 1}}
            transition={{duration: 0.2, ease: "backIn"}}
           className="contact-right">
              
           </motion.div>
        </section>
    )
}
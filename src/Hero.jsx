import "./css-file/hero.css"
import locationImage from "./assets/location.svg";
import heroImage from "./assets/hero-image.avif";

export const Hero = () => {
    return(<>
       <div className="main-hero">
            <div className="style-box1"></div>
            <div className="style-box2"></div>    
        </div>

   
        {/* <div className="hero-section">
            <div className="titiles-and-image">

            <div className="titiles">
            <div className="hero-head">
            Your everyday essentials hub
            </div>

           <div className="hero-h">
            <h1>Charge up. Connect. Chill.</h1>
           </div>

        <div className="hero-p">
          <p>Phone charging, quality accessories, data, entertainment, and cold drinks — all in one friendly neighborhood spot.</p>
        </div>

        <div className="hero-buttons">
            <button className="hero-button1">Explore Services</button>
            <button className="hero-button2">Contact Us</button>
        </div>

        <div className="location">
            <img style={{
                width: "30px"
            }} src={locationImage} alt="location" />
            <p>Conveniently close to you</p>
        </div>        
    </div>

          <div className="hero-image">
          <img style={{
            width: "100%", height: "100%", borderRadius: "20px"
          }} src={heroImage} alt="" />
          <div className="image-details">
                <p>One easy stop</p>
                <p>Stay powered & refreshed</p>
            </div>
         </div>

    
     </div>
     </div> */}

     <section className="hero">
      <div className="hero-title">
         <div className="hero-head">
            Your everyday essentials hub
        </div>

        <div className="hero-h">
            <h1>Charge up. Connect. Chill.</h1>
        </div>

        <div className="hero-p">
          <p>Phone charging, quality accessories, data, entertainment, and cold drinks — all in one friendly neighborhood spot.</p>
        </div>

        <div className="hero-buttons">
            <button className="hero-button1">Explore Services</button>
            <button className="hero-button2">Contact Us</button>
        </div>

        <div className="location">
            <img style={{
                width: "30px"
            }} src={locationImage} alt="location" />
            <p>Conveniently close to you</p>
        </div>

      </div>
       <div className="hero-images">
           <img style={{
            width: "100%", height: "100%", borderRadius: "20px"
          }} src={heroImage} alt="" />
          <div className="image-details">
                <p className="green-p">One easy stop</p>
                <p>Stay powered & refreshed</p>
            </div>
       </div>

     </section>
      </>
    )
}
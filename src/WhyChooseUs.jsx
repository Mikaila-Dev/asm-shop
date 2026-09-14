import "./css-file/why-choose-us.css";

import affordable from "./assets/affordable.svg";
import fast from "./assets/fast.svg"
import friend from "./assets/friend.svg";
import reliable from "./assets/reliable.svg";
import location from "./assets/location-2.svg"
export function WhyChooseUs(){
return(
    <section className="why-choose-us">
        <div className="why-choose-us-head">
           <p>Why locals choose us</p>
        </div>


        <div className="why-choose-us-h">
           <h1>Why Choose Us</h1>
        </div>

        <div className="why-choose-us-p">
           <p>We make daily essentials feel easy: quick help, dependable service, and a genuinely welcoming stop.</p>
        </div>

        <div className="main-why-choose-us">
            <div className="fast">
                <div className="why-choose-us-svg">
                   <img style={{
                    width: "40px"
                   }} src={fast} alt="fast" />
                </div>
                <div className="why-title">
                    <h4>Fast Service</h4>
                </div>
                <div className="why-paragraph">
                    <p>Quick service, less waiting. Get what you need and get on with your day.</p>
                </div>
            </div>

            <div className="reliable">
                <div className="why-choose-us-svg">
                    <img style={{
                    width: "40px"
                   }} src={reliable} alt="reliable" />
                </div>
                <div className="why-title">
                    <h4>Reliable</h4>
                </div>
                <div className="why-paragraph">
                <p>A service you can count on, with consistent care every time.</p>
                </div>
            </div>

            <div className="affordable">
                <div className="why-choose-us-svg">
                    <img style={{
                    width: "40px"
                   }} src={affordable} alt="affordable" />
                </div>
                <div className="why-title">
                    <h4>Affordable Prices</h4>
                </div>
                <div className="why-paragraph">
                 <p>More value, less spending, with fair prices across the essentials.</p>
               </div>
            </div>

            <div className="friendly">
                <div className="why-choose-us-svg">
                    <img style={{
                    width: "40px"
                   }} src={friend} alt="friend" />
                </div>
                <div className="why-title">
                    <h4>Friendly Customer Service</h4>
                </div>
                <div className="why-paragraph">
                 <p>You’re always welcome here. Expect respectful, helpful service.                </p>
</div>
            </div>

            <div className="convenient">
                <div className="why-choose-us-svg">
                    <img style={{
                    width: "40px"
                   }} src={location} alt="location" />
                </div>
                <div className="why-title">
                    <h4>Convenient Location</h4>
                </div>
                <div className="why-paragraph">
                    <p>Everything you need, close by, in one easy neighborhood stop.</p>
                 </div>
                </div>

        </div>
    </section>
)
}
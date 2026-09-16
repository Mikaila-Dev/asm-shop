import "./css-file/how-it-work.css"
export function HowItWork () {
    return(
        <section className="how-it-work">
            <div className="how-it-work-head">
                <p>Simple and easy</p>
            </div>

            <div className="how-it-work-h">
                <h1>How It Works</h1>
            </div>

            <div className="how-it-work-main">
            

                <div className="how-containers">
                    <span className="how-it-work-line"></span>
                    <div className="how-number">01</div>
                    <div className="how-h4">
                        <h4>01 — Visit Us</h4>
                    </div>

                    <div className="how-paragraph">
                        <p>Stop by whenever you need a quick essential.</p>
                    </div>
                </div>
                
                <div className="how-containers">
                    <div className="how-number">02</div>
                    <div className="how-h4">
                        <h4>02 — Choose What You Need</h4>
                    </div>

                    <div className="how-paragraph">
                        <p>Pick your product, service, or refreshment.</p>
                    </div>
                </div>

                <div className="how-containers">
                    <div className="how-number">03</div>
                    <div className="how-h4">
                        <h4>03 — Get Served</h4>
                    </div>

                    <div className="how-paragraph">
                        <p>Get friendly help and be on your way.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
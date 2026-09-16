import "./css-file/people-say.css"

export function CustomersSay(){
    return(
        <section className="customer-say">
            <div className="customer-say-head">
                <p>Community notes</p>
            </div>

            <div className="customer-say-h">
                <h1>What Our Customers Say</h1>
            </div>

            <div className="customer-say-main">
                <div className="customer-say-containers">\
                   <div className="say-image">
                       <p>★★★★★</p>
                    {/* should be image */}
                   </div>

                   <div className="say-paragraph">
                    <p>“I got my charger and data sorted in just a few minutes. It’s such a useful place to have nearby.”</p>
                   </div>

                   <div className="say-name">
                    <h4>Amina Yusuf</h4>
                   </div>
                </div>

                
                <div className="customer-say-containers">\
                   <div className="say-image">
                       <p>★★★★★</p>
                    {/* should be image */}
                   </div>

                   <div className="say-paragraph">
                    <p>“I got my charger and data sorted in just a few minutes. It’s such a useful place to have nearby.”</p>
                   </div>

                   <div className="say-name">
                    <h4>Amina Yusuf</h4>
                   </div>
                </div>

                
                <div className="customer-say-containers">\
                   <div className="say-image">
                       <p>★★★★★</p>
                    {/* should be image */}
                   </div>

                   <div className="say-paragraph">
                    <p>“I got my charger and data sorted in just a few minutes. It’s such a useful place to have nearby.”</p>
                   </div>

                   <div className="say-name">
                    <h4>Amina Yusuf</h4>
                   </div>
                </div>

                
               


            </div>
        </section>
    )
}
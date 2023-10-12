import React from "react";
import '../pagesCss/Home.css'
import NavBar from "./NavBar";
import '../pagesCss/Nav.css'
import Footer from "./Option/Footer";
import Content from "./content";

function Home() {
    return (
        <div>
            <section className="header">
            <NavBar/>
                <div className="text-box">
                    <h1>ตำบลตำไทย</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id aperiam
                    qui quibusdam ullam debitis! Dolorum nobis consequuntur eveniet,<br/>
                    molestiae laudantium ad qui consectetur modi nam, quaerat aspernatur
                    accusantium nemo totam.</p>
                    {/* <button class="unique-button"><a href="/1StopService"></a><span></span>Enter to E-service</button> */}
                    <a href="/1StopService" class="unique-button"><span></span>Enter to E-service</a>
                </div>
            </section>
            <Content/>
            <Footer/>
        </div>
    );
}
export default Home

//eiei
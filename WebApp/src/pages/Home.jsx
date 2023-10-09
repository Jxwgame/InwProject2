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
                    <button class="unique-button"><span></span>Enter Website</button>
                </div>
            </section>
            <Content/>
            <Footer/>
        </div>
    );
}
export default Home

//eiei
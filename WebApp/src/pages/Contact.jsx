import React from "react";
import NavBar from "./NavBar";
import '../pagesCss/Contact.css'
import Footer from "./Option/Footer";

function ContactPage(){
    return (
        <div>
            <div className="back">
                    <NavBar/>
            </div>
            <Footer/>
        </div>
    );
}
export default ContactPage;
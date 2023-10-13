import React from "react";
import '../../pagesCss/subPageNews.css'
import Footer from "./Footer";

function PageNewsSub(){

    return (
        <div>
            <div className="img-background"></div>
            <h1 style={{textAlign: 'left', marginLeft: '20vh'}}>Title News</h1>
            <br /><br />
            <div className="newsContent">
                <p style={{color: 'white'}}>Lorem Lorem ipsum dolor sit amet consectetur ad
                ipisicing elit. Consequuntur eaque ullam repudiandae necessitatibus optio 
                atque dolores saepe, illo earum impedit sunt corrupt
                i magnam minus quidem natus! Tempora maxime quaerat quidem.</p>
            </div>
            <Footer/>
        </div>
    );
}
export default PageNewsSub
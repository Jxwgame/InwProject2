import React from "react";
import '../pagesCss/NewsPage.css'
import NavBar from "./NavBar";
import { useState } from "react";

function NewsPage(){

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const updateNews = (newTitle, newContent) => {
        setTitle(newTitle);
        setContent(newContent);
    }

    return (
        <div>
            <section> 
            <div className="headerNews">
                <NavBar/>
                <h1 className="h1Header">แนะนำข่าวสาร</h1>
                <div className="slide">
                    <input type="radio" name="r" id="r1" checked/>
                    <input type="radio" name="r" id="r2"/>
                    <input type="radio" name="r" id="r3"/>
                    <div className="image-box">
                        <img src="src/image/norway.jpg" alt="pageNewSlide"/>
                    </div>
                </div>

                <div className="slide">
                    <div className="image-box">
                        <img src="src/image/city.jpg" alt="pageNewSlide"/>
                    </div>
                </div>

                <div className="slide">
                    <div className="image-box">
                        <img src="src/image/photo1.jpg" alt="pageNewSlide"/>
                    </div>
                </div>

                <div className="navigation">
                    <label htmlFor="r1"  className="barSlide"></label>
                    <label htmlFor="r2" className="barSlide"></label>
                    <label htmlFor="r3" className="barSlide"></label>
                </div>
            </div>
            </section>
            <br />
            <h1 style={{color: 'black', textAlign: 'left', marginLeft: '30vh'}}>ข่าวสาร</h1>
            <br /><br />
            <section className="ContentNews">
                <div className="blockNews">
                    <picture>
                        <img src="src/image/photo1.jpg" alt=""/>
                    </picture>

                    <div className="insideNews">
                        <h1 style={{marginBottom: '1vh'}}>Lorem, ipsum.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisic
                            ing elit. Perspiciatis soluta quibusdam, quo facere minus
                             optio quae laborum accusantium. Sunt, quam!</p>
                    </div>
                </div>

                <div className="blockNews">
                    <picture>
                        <img src="src/image/photo2.jpg" alt=""/>
                    </picture>

                        <div className="insideNews">
                            <h1 style={{marginBottom: '1vh'}}>Lorem, ipsum.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisic
                                ing elit. Perspiciatis soluta quibusdam, quo facere minus
                                optio quae laborum accusantium. Sunt, quam!</p>
                        </div>
                </div>

                <div className="blockNews">
                    <picture>
                        <img src="src/image/photo3.jpg" alt=""/>
                    </picture>

                    <div className="insideNews">
                        <h1 style={{marginBottom: '1vh'}}>Lorem, ipsum.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisic
                            ing elit. Perspiciatis soluta quibusdam, quo facere minus
                             optio quae laborum accusantium. Sunt, quam!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default NewsPage
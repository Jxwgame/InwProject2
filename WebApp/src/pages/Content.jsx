import React from "react";
import '../pagesCss/Home.css'

function Content() {
    return (
    <div>
    <section className="course">
        <h1>คณะผู้บริหารตำบลตำไทย</h1>
        <br />
        <div className="imgcontent">
            <img src="src/image/leader.jpg" alt=""/>
        </div>
        <div className="row">
            <div className="col">
                <h3>Elon</h3>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ratione, nostrum!</p>
            </div>
            <div className="col">
                <h3>Mark</h3>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Aut eius similique animi officia vitae culpa!</p>
            </div>
            <div className="col">
                <h3>Jack</h3>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi similique, veritatis sunt perspiciatis nostrum tempore.</p>
            </div>
        </div>
    </section>
            <section className="content">
            <h1>Content</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iusto distinctio aut! 
                Sunt deleniti corrupti dolorem, omnis culpa quas reprehenderit 
                dignissimos at tenetur neque optio nisi eum eligendi iusto fugiat Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Accusantium amet hic nesciunt reprehenderit non ratione. Est qui possimus ad esse fuga ex odio doloribus ut illum eum repudiandae, 
                ea totam dolores numquam suscipit magni unde sed reprehenderit neque commodi iste maxime quisquam. 
                Doloremque esse at dolorum dicta dolores tempore odio.</p>
            <div className="row"> {/* เปิดแท็ก div ใหม่ */}
                <div className="content-col">
                    <img src="src/image/photo1.jpg" alt="Photo 1"/>
                    <div className="layer">
                        <h3>Title Content</h3>
                    </div>
                </div>
                <div className="content-col">
                    <div className="layer">
                        <img src="src/image/photo2.jpg" alt="Photo 2"/>
                        <div className="layer">    
                            <h3>Title Content</h3>
                        </div>
                    </div>       
                </div>
                <div className="content-col">    
                    <img src="src/image/photo3.jpg" alt="Photo 3"/>
                    <div className="layer">
                        <h3>Title Content</h3>
                    </div>
                </div>
            </div>
        </section>

        <section class="about">
                <h4>About us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit velit 
            facere maxime quidem enim ipsa illum, <br/>beatae quo rem deleniti 
            quisquam tenetur sapiente nam. Nemo possimus laudantium et accusamus!</p>
        </section>

    </div>
    );
}
export default Content
import React from "react";
import '../pagesCss/About.css'
import Footer from "./Option/Footer";
// liligliygkli
// 231321312321
function About(){
    return (
        <div>
            <div className="tabHead"></div>
            <section className="nav2">
                <div className="links2">
                    <ul className="aboutul">
                        <li className="aboutlink">หน้าแรก</li>
                        <li className="aboutlink">เกี่ยวกับ</li>
                        <li className="aboutlink">E-Service</li>
                        <li className="aboutlink">ข่าวประชาสัมพันธ์</li>
                        <li className="aboutlink">ติดต่อ</li>
                    </ul>
                </div>
            </section>

            <div className="text-about">
                <h1 style={{marginBottom: '5vh'}}>asdasdas</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Delectus asperiores sunt molestias commodi obcaecati pariatur 
                    repellendus neque repellat incidunt vero, porro perferendis 
                    distinctio at illum quasi magni, eius omnis nesciunt, eum 
                    ratione. Minima vel culpa magni non eos aperiam quidem 
                    praesentium excepturi vitae laudantium consequuntur veniam 
                    officia nulla optio quaerat commodi harum, architecto quas 
                    iste repellat nesciunt quisquam alias fugit reiciendis? 
                    Incidunt ab asperiores nam voluptate ea iusto eum illum cum m
                    aiores nesciunt. Alias excepturi corporis rem nostrum nam dist
                    inctio harum tempore vel amet in, autem molestiae hic, cumque u
                    llam doloremque atque perspiciatis quos facilis quae aspernatur 
                    cupiditate similique. Atque?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, fugiat explic
                    abo! Perspiciatis exercitationem, earum corrupti sed voluptatum minima atqu
                    e voluptatem doloribus quod alias. Ipsam nobis voluptas minus reprehenderit 
                    iure sit impedit numquam repellat praesentium alias magnam adipisci autem, ip
                    sa vitae exercitationem id vero quisquam voluptatum harum? Nisi consequuntur 
                    et quam alias ut aliquam recusandae nobis, possimus perferendis voluptate vol
                    uptas quasi aspernatur necessitatibus eius assumenda, voluptatem iste error ac
                    cusantium. Animi error culpa blanditiis iure optio voluptatem, perferendis vel
                    it asperiores saepe consequuntur, quos, dicta corrupti dolorum voluptates dol
                    oribus dignissimos autem unde hic? Repudiandae sequi 
                    architecto ea ab aliquid temporibus recusandae aliquam similique.</p>
            </div>
            <div style={{marginBottom: '10vh'}}></div>
            <Footer/>
        </div>
    );
}
export default About
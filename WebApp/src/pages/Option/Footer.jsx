import React from "react";
import '../../pagesCss/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function Footer() {
    return (
        <div className="main">
            <footer>
                <div className="rowfooter">
                    <div className="colfooter">
                        <div className="colfooter2">
                        <img src="src/image/logo.png" id="logo" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius labore eos 
                            doloremque aperiam autem expedita id omnis ipsam laboriosam sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga natus aliquid 
                            necessitatibus porro omnis temporibus maxime expedita eveniet dolores.</p>
                        </div>
                    </div>
                    
                    <div className="colfooter">
                        <h3>Address</h3>
                        <p>99/9 หมู่ 9 ถนนบำรุงราษฎร์ ตำบลพิบูลสงคราม อำเภอเมือง กรุงเทพมหานคร 10400</p>
                        <p>อาคาร kkk ชั้น 99 Lobby KKK</p>
                        <p className="email-id">ตำบลตำไทย@gmail.com</p>
                        <h4>+99 123456789</h4>
                    </div>

                    <div className="colfooter">
                        <h3>Links</h3>
                        <ul className="ulFooter">
                            <li className="liFooter" style={{cursor: 'pointer', fontSize: '14px', width: '50%'}}><a href="/">หน้าแรก</a></li> {/* จะทำให้มันเชื่อมหน้าต่างทีหลัง */}
                            <li className="liFooter" style={{cursor: 'pointer', fontSize: '14px', width: '50%'}}><a href="/about">เกี่ยวกับ</a></li>
                            <li className="liFooter" style={{cursor: 'pointer', fontSize: '14px', width: '50%'}}><a href="/newspage">ข่าวสารประชาสัมพันธ์</a></li>
                            <li className="liFooter" style={{cursor: 'pointer', fontSize: '14px', width: '50%'}}><a href="/1StopService">E-Service</a></li>
                            <li className="liFooter" style={{cursor: 'pointer', fontSize: '14px', width: '50%'}}><a href="/ContactUs">ติดต่อ</a></li>
                        </ul>

                    </div>

                    <div className="colfooter">
                        <h3 style={{fontSize: '20px'}}>Contact Us</h3>
                        <FontAwesomeIcon icon={faFacebook} style={{fontSize: '30px', marginRight: '2vh'}}/>
                        <FontAwesomeIcon icon={faInstagram} style={{fontSize: '30px', marginRight: '2vh'}}/>
                        <FontAwesomeIcon icon={faTwitter} style={{fontSize: '30px', marginRight: '2vh'}}/>
                        <FontAwesomeIcon icon={faPhone} style={{fontSize: '30px', marginRight: '2vh'}}/>
                        <FontAwesomeIcon icon={faEnvelope} style={{fontSize: '30px', marginRight: '2vh'}}/>
                        <div className="aboutFooter">
                            <h4 className="h4Footer">นโยบายความเป็นส่วนตัว</h4>
                            <h4 className="h4Footer">เงื่อนไขการใช้งาน</h4>
                            <h4 className="h4Footer">ข้อมูลลิขสิทธิ์</h4>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    );
}
export default Footer
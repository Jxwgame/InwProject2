import React from "react";
import '../pagesCss/Nav.css'

function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <img src="src/image/logo.png" alt="logo" id="logoMain"/>
                <div className="nav-links">
                    <ul>
                        <li><a href="">หน้าหลัก</a></li>
                        <li><a href="">เกี่ยวกับ</a>
                            <ul className="dropdown">
                                <li><a href="">####</a></li>
                                <li><a href="">####</a></li>
                                <li><a href="">####</a></li>
                                <li><a href="">####</a></li>
                            </ul>
                        </li>
                        <li><a href="">ข่าวสารประชาสัมพันธ์</a></li>
                        <li><a href="">E-Service</a></li>
                        <li><a href="">ติดต่อ</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default NavBar
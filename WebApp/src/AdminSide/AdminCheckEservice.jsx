import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDochub } from "@fortawesome/free-brands-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/AdminMain.css'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function AdminHelp(){
    return (
        <div>
            <HeadAdmin/>
            <div className="backgroundPage">
                <h1>คู่มือการใช้งาน</h1>
                <br /><br />
                <h1>หากพบเจอปัญหาในการใช้งานโปรดติดต่อ</h1>
                <br /><br />
                <h1>thanapat.chotirat</h1>
            </div>
        </div>
    );
}
export default AdminHelp
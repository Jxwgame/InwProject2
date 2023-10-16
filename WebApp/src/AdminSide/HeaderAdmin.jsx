import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserSecret} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import moment from "moment";
import '../pagesCss/AdminNav.css'

function HeadAdmin(){
    const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(moment().format('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className='sideAdmin' >
                <a href="/admin"><h1 style={{fontSize:'30px', padding: '20px 0', height: 'auto', display: 'flex', alignContent: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer'}}>
                    Admin</h1></a>
                <hr />
                <br />
                <div style={{display: 'flex', marginLeft: '27%', alignItems: 'center'}}>
                    <FontAwesomeIcon icon={ faClock } style={{color: 'white', paddingRight: '10px'}}/>
                    <p style={{color: 'white'}}>{currentTime}</p>
                </div>
                <ul className="ulAdmin">
                    <a href="/admin"><li className="listAdmin">Home</li></a>
                    <a href="/AdminReq"><li className="listAdmin">Request Alert</li></a>
                    <a href="/AdminComplain"><li className="listAdmin">Complain Alert</li></a>
                    <a href="/AdminOrderPlace"><li className="listAdmin">OrderPlace Alert</li></a>
                    <a href="/AdminTax"><li className="listAdmin">Tax/Bill Alert</li></a>
                    {/* <a href="/AdminManageNews"><li className="listAdmin">News Form</li></a> */}
                    <a href="/Help"><li className="listAdmin">Help</li></a>
                </ul>
            </div>
                <div className="tabAdmin">
                    <div className="adminbox">
                        <div className="adicon"><FontAwesomeIcon icon={faUserSecret}/></div>
                        <h1>AdminInwZa007</h1>
                    </div>
                </div>
        </div>
    );
}
export default HeadAdmin
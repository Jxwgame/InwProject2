import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import '../pagesCss/AdminNav.css'

function HeadAdmin(){
    return (
        <div>
            <div className='sideAdmin' >
                        <h1 style={{padding: '20px 0', height: '4.7vh', display: 'flex', alignContent: 'center', justifyContent: 'center', color: 'white'}}>Admin</h1>
                        <hr />
                        <ul className="ulAdmin">
                            <li className="listAdmin">Home</li>
                            <li className="listAdmin">Request Alert</li>
                            <li className="listAdmin">Complain Alert</li>
                            <li className="listAdmin">OrderPlace Alert</li>
                            <li className="listAdmin">Help</li>
                        </ul>
            </div>
                <div className="tabAdmin">
                    <div className="adminbox">
                        <div className="adminuser">AdminInwZa001</div>
                        <FontAwesomeIcon icon={faUserSecret}/>
                    </div>
                </div>
        </div>
    );
}
export default HeadAdmin
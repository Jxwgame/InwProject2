import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDochub } from "@fortawesome/free-brands-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/AdminMain.css'

function AdminMain(){
    return (
        <div>
            <HeadAdmin/>
            <div className="bg-admin"></div>
            <div className="content-card">
                <div className="box-text">
                    <div className="column">
                        <span className="spanAdmin">59</span>
                        <h1 style={{position: 'relative', top: '70px', right: '80px', color: 'white', fontWeight: '100', fontSize: '24px'}}>Amount Request</h1>
                        <FontAwesomeIcon icon={faDochub} style={{fontSize: '90px', color: 'hsl(0, 7%, 17%, 0.5)', position: 'relative', left: '130px', top: '-0.5vh'}}/>
                    </div>
                    <div className="column">
                        <span className="spanAdmin">60</span>
                        <h1 style={{position: 'relative', top: '70px', right: '60px', color: 'white', fontWeight: '100', fontSize: '24px'}}>Complain Request</h1>
                        <FontAwesomeIcon icon={faUser} style={{fontSize: '90px', color: 'hsl(0, 7%, 17%, 0.5)', position: 'relative', left: '130px', top: '-0.5vh'}}/>
                    </div>

                    <div className="column">
                        <span className="spanAdmin">61</span>
                        <h1 style={{position: 'relative', top: '70px', right: '80px', color: 'white', fontWeight: '100', fontSize: '24px'}}>Tax/Bill Request</h1>
                        <FontAwesomeIcon icon={faMoneyBillWave} style={{fontSize: '90px', color: 'hsl(0, 7%, 17%, 0.5)', position: 'relative', left: '130px', top: '-0.5vh'}}/>
                    </div>

                    <div className="column">
                        <span className="spanAdmin">61</span>
                        <h1 style={{position: 'relative', top: '70px', right: '60px', color: 'white', fontWeight: '100', fontSize: '24px'}}>OrderPlace Request</h1>
                        <FontAwesomeIcon icon={faLocationDot} style={{fontSize: '90px', color: 'hsl(0, 7%, 17%, 0.5)', position: 'relative', left: '130px', top: '-0.5vh'}}/>
                    </div>

                </div>
            </div> 
        </div>
    );
}
export default AdminMain
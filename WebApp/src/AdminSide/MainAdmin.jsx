import React from "react";
import '../pagesCss/Adminpage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDochub } from "@fortawesome/free-brands-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import HeadAdmin from "./HeaderAdmin";

function AdminMain(){
    return (
        <div>
            <HeadAdmin/>
            <div className="bg-admin" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(src/image/chicago.jpg)', minHeight: '50vh', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
            <div className="content-card" style={{position: 'absolute', left: '26vh', width: '86%', height: 'auto', margin: '0px 20px', alignItems: 'center'}}>
                <div className="box-text">
                    <div className="column" style={{display: 'flex', alignItems: 'center'}}>
                        <span style={{fontSize: '40px', position: 'relative', top: '10px',left: '-15vh', color: 'white', fontWeight: 'bold'}}>59</span>
                        <h1 style={{position: 'relative', top: '70px', right: '80px', color: 'white', fontWeight: '100', fontSize: '24px'}}>Amount Request</h1>
                        <FontAwesomeIcon icon={faDochub} style={{fontSize: '90px', color: 'hsl(0, 7%, 17%, 0.5)', position: 'relative', left: '130px', top: '-0.5vh'}}/>
                    </div>
                    <div className="column" style={{display: 'flex', alignItems: 'center'}}>
                        <span style={{fontSize: '40px', position: 'relative', top: '10px',left: '-15vh', color: 'white', fontWeight: 'bold'}}>60</span>
                        <h1 style={{position: 'relative', top: '70px', right: '60px', color: 'white', fontWeight: '100', fontSize: '24px'}}>Complain Request</h1>
                        <FontAwesomeIcon icon={faUser} style={{fontSize: '90px', color: 'hsl(0, 7%, 17%, 0.5)', position: 'relative', left: '130px', top: '-0.5vh'}}/>
                    </div>

                    <div className="column" style={{display: 'flex', alignItems: 'center'}}>
                        <span style={{fontSize: '40px', position: 'relative', top: '10px',left: '-15vh', color: 'white', fontWeight: 'bold'}}>61</span>
                        <h1 style={{position: 'relative', top: '70px', right: '80px', color: 'white', fontWeight: '100', fontSize: '24px'}}>Tax/Bill Request</h1>
                        <FontAwesomeIcon icon={faMoneyBillWave} style={{fontSize: '90px', color: 'hsl(0, 7%, 17%, 0.5)', position: 'relative', left: '130px', top: '-0.5vh'}}/>
                    </div>

                    <div className="column" style={{display: 'flex', alignItems: 'center'}}>
                        <span style={{fontSize: '40px', position: 'relative', top: '10px',left: '-15vh', color: 'white', fontWeight: 'bold'}}>61</span>
                        <h1 style={{position: 'relative', top: '70px', right: '60px', color: 'white', fontWeight: '100', fontSize: '24px'}}>OrderPlace Request</h1>
                        <FontAwesomeIcon icon={faLocationDot} style={{fontSize: '90px', color: 'hsl(0, 7%, 17%, 0.5)', position: 'relative', left: '130px', top: '-0.5vh'}}/>
                    </div>

                </div>
            </div> 
        </div>
    );
}
export default AdminMain
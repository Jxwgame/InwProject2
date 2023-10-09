import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

function HeadAdmin(){
    return (
        <div>
            <div className='sideAdmin' style={{width: '25vh', backgroundColor: 'hsl(16, 100%, 66%)', height: '100%', position: 'fixed', display: 'flex', flexDirection: 'column'}}>
                        <h1 style={{padding: '20px 0', height: '10vh', display: 'flex', alignContent: 'center', justifyContent: 'center', color: 'white'}}>Admin</h1>
                        <ul className="ulAdmin">
                            <li className="listAdmin">Home</li>
                            <li className="listAdmin">Request Alert</li>
                            <li className="listAdmin">Complain Alert</li>
                            <li className="listAdmin">OrderPlace Alert</li>
                            <li className="listAdmin">Help</li>
                        </ul>
            </div>
                <div className="tabAdmin" style={{width: '87.9%', position:'absolute' , left: '25vh',minHeight: '9vh', backgroundColor: 'white', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'flex-end'}}>
                    <input type="text" placeholder="Search..." style={{position: 'absolute', width: '12%', top: '35%', right: '40vh', border: 'none', height: '30px', padding: '0 5px'}}/>
                    <div className="adminbox" style={{position: 'absolute', width: '20%', color: 'black', height: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                        <h1 style={{fontSize: '24px', position: 'absolute',  left: '10vh'}}>AdminInwZa001</h1>
                        <FontAwesomeIcon icon={faUserSecret} style={{position: 'absolute', top: '15px', left: '25px', fontSize: '50px', color: 'hsl(0, 0%, 0%, 0.7)'}}/>
                    </div>
                </div>
        </div>
    );
}
export default HeadAdmin
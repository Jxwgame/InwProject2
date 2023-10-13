import React from "react";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/SubPageAdmin.css'

function AdminOrderPlace(){
    return (
        <div>
            <div>
                <HeadAdmin/>
                <div className="backgroundPage">
                    <h1>คำขอใช้สถานที่ในเขตตำบล</h1>

                </div>
            </div>
        </div>
    );
}
export default AdminOrderPlace
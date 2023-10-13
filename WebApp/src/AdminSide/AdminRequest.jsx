import React from "react";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/SubPageAdmin.css'

function AdminRequest(){
    return (
        <div>
            <div>
                <HeadAdmin/>
                <div className="backgroundPage">
                    <h1 style={{color: 'black'}}>คำร้องเรียน</h1>
                </div>
            </div>
        </div>
    );
}
export default AdminRequest
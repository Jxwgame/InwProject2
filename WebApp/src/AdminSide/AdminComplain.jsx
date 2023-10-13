import React from "react";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/SubPageAdmin.css'

function AdminComplain(){
    return (
        <div>
            <div>
                <HeadAdmin/>
                <div className="backgroundPage">
                    <h1>ร้องเรียน/ร้องทุกข์</h1>
                </div>
            </div>
        </div>
    );
}
export default AdminComplain
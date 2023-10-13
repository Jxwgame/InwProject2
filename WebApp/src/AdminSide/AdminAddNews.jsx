import React from "react";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/SubPageAdmin.css'

function AdminAddNews(){
    return (
        <div>
            <div>
                <HeadAdmin/>
                <div className="backgroundPage">
                    <h1>News Edit</h1>
                    <div className="TabBtn">
                        <button className="AdminBtn" name="Add">Add</button>
                        <button className="AdminBtn" name="Delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminAddNews
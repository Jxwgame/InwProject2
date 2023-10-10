import React from "react";
import '../../pagesCss/Check.css'

function CheckPage() {
    return (
        <div className="bodyCheck">
            <div className="check">
                <label htmlFor="" style={{fontSize: '18px', marginRight: '2vh', display: 'flex', justifyContent: 'center'}}>กรอกหมายเลขบัตรประชาชน</label>
                {/* <br />  */}
                <input type="text" placeholder=""/>
                <button className="btnnCheck">ตรวจสอบ</button>
            </div>
        </div>
    );
}
export default CheckPage
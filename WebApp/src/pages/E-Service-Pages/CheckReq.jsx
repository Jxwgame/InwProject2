import React from "react";
import '../../pagesCss/Check.css'

function CheckReq(){
    return(
        <div className="bodyCheckReq">
            <h2>การดำเนินการทั้งหมด</h2>
            <div className="sumReq">
                <div className="colreq">หมายเลขคำร้อง</div>
                <div className="colreq">ประเภท</div>
                <div className="colreq">หัวข้อ</div>
                <div className="colreq">รายละเอียด</div>
            </div>
        </div>
    );
}
export default CheckReq
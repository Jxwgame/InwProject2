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
                    <div className="AdminTableCheck">
                    <table>
                        <tr>
                            <th style={{width: '10%'}}>หมายเลขคำร้อง</th>
                            <th style={{width: '10%'}}>หน่วยงานที่ร้องเรียน</th>
                            <th style={{width: '20%'}}>เรื่องที่ร้องเรียน</th>
                            <th style={{width: '10%'}}>สถานะ</th>
                        </tr>
                        <tr>
                            <td>#65465</td>
                            <td>สำนักปลัด</td>
                            <td></td>
                            <td>ยังไม่มีสถานะ
                                <div className="TabBtnReq">
                                    <button className="AdminBtnReq" name="Accept">Accept</button>
                                    <button className="AdminBtnReq" name="Decline">Decline</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminComplain
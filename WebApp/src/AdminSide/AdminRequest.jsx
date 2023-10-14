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
                    <div className="AdminTableCheck">
                    <table>
                        <tr>
                            <th style={{width: '10%'}}>หมายเลขบัตรประชาชน</th>
                            <th style={{width: '10%'}}>ประเภท</th>
                            <th style={{width: '20%'}}>รายละเอียด</th>
                            <th style={{width: '10%'}}>สถานะ</th>
                        </tr>
                        <tr>
                            <td>132134TAAX#65465</td>
                            <td>คำร้องทั่วไป</td>
                            <td>09/11/2566</td>
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
export default AdminRequest
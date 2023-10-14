import React from "react";
import HeadAdmin from "./HeaderAdmin";

function AdminTax(){
    return (
        <div>
            <div>
                <HeadAdmin/>
                <div className="backgroundPage">
                    <h1>ภาษี</h1>
                    <div className="AdminTableCheck">
                    <table>
                        <tr>
                            <th style={{width: '10%'}}>เลขที่ใบเสร็จ</th>
                            <th style={{width: '10%'}}>ประเภทภาษี</th>
                            <th style={{width: '10%'}}>วันที่ที่ชำระเงิน</th>
                            <th style={{width: '30%'}}>รายละเอียด</th>
                            <th style={{width: '15%'}}>สถานะ</th>
                        </tr>
                        <tr>
                            <td>132134TAAX#65465</td>
                            <td>สนามกีฬา</td>
                            <td>09/11/2566</td>
                            <td>แข่งกีฬาสี</td>
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
export default AdminTax
import React from "react";
import '../../pagesCss/Check.css'

function CheckPageTax() {
    return (
        <div className="bodyBack">
        <div className="bodyCheck">
            <div className="check">
                <label htmlFor="" style={{fontSize: '18px', marginRight: '2vh', display: 'flex', justifyContent: 'center'}}>กรอกเลขที่ใบเสร็จ</label>
                {/* <br />  */}
                <input type="text" placeholder=""/>
                <button className="btnnCheck">ตรวจสอบ</button>
            </div>

        </div>
            <div className="TableCheck">
                <table>
                    <tr>
                        <th style={{width: '15%'}}>เลขที่บิลใบเสร็จ</th>
                        <th style={{width: '10%'}}>ประเภท</th>
                        <th style={{width: '10%'}}>วันที่ชำระเงิน</th>
                        <th style={{width: '15%'}}>สถานะ</th>
                    </tr>
                    <tr>
                        <td>132134TAAX#65465</td>
                        <td>คำร้องทั่วไป</td>
                        <td>09/11/2566</td>
                        <td>กำลังดำเนินการ</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default CheckPageTax
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
                    <tbody>
                        {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.type}</td>
                            <td>{item.details}</td>
                            <td>{item.status}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default CheckPageTax
import React, { useState, useEffect } from "react";
import '../../pagesCss/Check.css'

function CheckPage() {
    const [data, setData] = useState([]);

  useEffect(() => {
    // ใช้ useEffect เพื่อเรียก API และตั้งค่า state
    fetch('/api/your-endpoint')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


    return (
        <div className="bodyBack">
        <div className="bodyCheck">
            <div className="check">
                <label htmlFor="" style={{fontSize: '18px', marginRight: '2vh', display: 'flex', justifyContent: 'center'}}>กรอกหมายเลขบัตรประชาชน</label>
                {/* <br />  */}
                <input type="text" placeholder=""/>
                <button className="btnnCheck">ตรวจสอบ</button>
            </div>

        </div>
            <div className="TableCheck">
                <table>
                    <tr>
                        <th style={{width: '22%'}}>หมายเลขบัตรประชาชน</th>
                        <th style={{width: '15%'}}>ประเภท</th>
                        <th style={{width: '40%'}}>รายละเอียด</th>
                        <th style={{width: '15%'}}>สถานะ</th>
                    </tr>
                    <tr>
                        <td>1849901686165</td>
                        <td>คำร้องทั่วไป</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus ipsam, 
                            aliquid esse nihil beatae asperiores vel! Excepturi, voluptas quam, illo ipsum a
                            utem alias ut accusamus tempora voluptates repellat cumque culpa voluptatum? Nulla l
                            aborum vero, at totam quia ea enim optio reprehenderit repellendus est provident numq
                            uam eum laudantium magnam architecto.</td>
                        <td>กำลังดำเนินการ</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default CheckPage
import React, { useState, useEffect } from "react";
import '../../pagesCss/Check.css';

function CheckPageTax() {
    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        // Get the date components
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    }
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:3131/check2?text=${text}`)
      .then((response) => response.json())
      .then((responseData) => {
        if (Array.isArray(responseData.results)) {
          setData(responseData.results);
        } else {
          console.error('Invalid API response:', responseData.results);
          setData([]);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setData([]);
      });
  };

  return (
    <div className="bodyBack">
      <div className="bodyCheck">
        <div className="check">
          <label htmlFor="" style={{ fontSize: '18px', marginRight: '2vh', display: 'flex', justifyContent: 'center' }}>กรอกหมายเลขบัตรประชาชน</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="" />
          <button className="btnnCheck" onClick={fetchData}>ตรวจสอบ</button>
        </div>
      </div>
      <div className="TableCheck">
        <table>
          <thead>
            <tr>
                <th style={{width: '15%'}}>เลขที่บิลใบเสร็จ</th>
                <th style={{width: '10%'}}>ประเภท</th>
                <th style={{width: '10%'}}>วันที่ชำระเงิน</th>
                <th style={{width: '15%'}}>สถานะ</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{formattedDate(item.date)}</td>
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
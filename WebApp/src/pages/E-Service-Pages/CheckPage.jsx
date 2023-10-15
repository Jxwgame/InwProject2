import React, { useState, useEffect } from "react";
import '../../pagesCss/Check.css';

function CheckPage() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:3131/check1?text=${text}`)
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
              <th style={{ width: '22%' }}>หมายเลขคำร้อง</th>
              <th style={{ width: '15%' }}>ประเภท</th>
              <th style={{ width: '40%' }}>รายละเอียด</th>
              <th style={{ width: '15%' }}>สถานะ</th>
            </tr>
          </thead>
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

export default CheckPage;
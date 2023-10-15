// import React from "react";
// import HeadAdmin from "./HeaderAdmin";
// import '../pagesCss/SubPageAdmin.css'

// function AdminComplain(){
//     return (
//         <div>
//             <div>
//                 <HeadAdmin/>
//                 <div className="backgroundPage">
//                     <h1>ร้องเรียน/ร้องทุกข์</h1>
//                     <div className="AdminTableCheck">
//                     <table>
//                         <tr>
//                             <th style={{width: '10%'}}>หมายเลขคำร้อง</th>
//                             <th style={{width: '10%'}}>หน่วยงานที่ร้องเรียน</th>
//                             <th style={{width: '20%'}}>เรื่องที่ร้องเรียน</th>
//                             <th style={{width: '10%'}}>สถานะ</th>
//                         </tr>
//                         <tr>
//                             <td>#65465</td>
//                             <td>สำนักปลัด</td>
//                             <td></td>
//                             <td>ยังไม่มีสถานะ
//                                 <div className="TabBtnReq">
//                                     <button className="AdminBtnReq" name="Accept">Accept</button>
//                                     <button className="AdminBtnReq" name="Decline">Decline</button>
//                                 </div>
//                             </td>
//                         </tr>
//                     </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default AdminComplain


import React, { useState, useEffect } from "react";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/SubPageAdmin.css';

function AdminComplain() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Call fetchData function on component mount

  const fetchData = () => {
    fetch(`http://localhost:3131/adcheckcom`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results || []); // Set data to an empty array if responseData.results is falsy
      })
      .catch((error) => {
        console.error('Error:', error);
        setData([]); // Set data to an empty array in case of error
      });
  };

  const handleAccept = (id) => {
    fetch(`http://localhost:3131/updateStatuscom/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'ดำเนินการแล้ว' })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchData();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleDecline = (id) => {
    fetch(`http://localhost:3131/updateStatuscom/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'ปฏิเสธคำร้องนี้' })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchData();
      })
      .catch(error => {
        console.error('Error:', error);
      });      
  };

  return (
    <div>
      <HeadAdmin/>
      <div className="backgroundPage">
        <h1 style={{color: 'black'}}>ร้องเรียน/ร้องทุกข์</h1>
        <div className="AdminTableCheck">
          <table>
            <thead>
              <tr>
                <th style={{width: '10%'}}>หมายเลขคำร้อง</th>
                <th style={{width: '10%'}}>หน่วยงานที่ร้องเรียน</th>
                <th style={{width: '20%'}}>เรื่องที่ร้องเรียน</th>
                <th style={{width: '10%'}}>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.type}</td>
                  <td>{item.details}</td>
                  {/* <td>{item.details}</td> */}
                  <td>
                    {item.status}
                    <div className="TabBtnReq">
                      <button className="AdminBtnReq" onClick={() => handleAccept(item.id)} name="Accept">Accept</button>
                      <button className="AdminBtnReq" onClick={() => handleDecline(item.id)} name="Decline">Decline</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminComplain;
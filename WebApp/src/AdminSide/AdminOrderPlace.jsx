// import React from "react";
// import HeadAdmin from "./HeaderAdmin";
// import '../pagesCss/SubPageAdmin.css'

// function AdminOrderPlace(){
//     return (
//         <div>
//             <div>
//                 <HeadAdmin/>
//                 <div className="backgroundPage">
//                     <h1>คำขอใช้สถานที่ในเขตตำบล</h1>
//                     <div className="AdminTableCheck">
//                     <table>
//                         <tr>
//                             <th style={{width: '10%'}}>หมายเลขบัตรประชาชน</th>
//                             <th style={{width: '10%'}}>สถานที่ที่ต้องการจอง</th>
//                             <th style={{width: '10%'}}>วันที่ที่ต้องการจอง</th>
//                             <th style={{width: '30%'}}>รายละเอียด</th>
//                             <th style={{width: '15%'}}>สถานะ</th>
//                         </tr>
//                         <tr>
//                             <td>132134TAAX#65465</td>
//                             <td>สนามกีฬา</td>
//                             <td>09/11/2566</td>
//                             <td>แข่งกีฬาสี</td>
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
// export default AdminOrderPlace
import React, { useState, useEffect } from "react";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/SubPageAdmin.css';

function AdminOrderPlace() {
    const formattedDate = (dateString) => {
        const date = new Date(dateString);
        // Get the date components
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    }
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Call fetchData function on component mount

  const fetchData = () => {
    fetch(`http://localhost:3131/adcheckplace`)
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
    fetch(`http://localhost:3131/updateStatusplace/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'อนุมัติ' })
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
    fetch(`http://localhost:3131/updateStatusplace/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'ไม่อนุมัติ' })
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
        <h1>คำขอใช้สถานที่ในเขตตำบล</h1>
        <div className="AdminTableCheck">
            <table>
            <thead>
              <tr>
                <th style={{width: '10%'}}>เลขบัตรประชาชน</th>
                <th style={{width: '10%'}}>สถานที่ที่ต้องการจอง</th>
                <th style={{width: '10%'}}>วันที่ที่ต้องการจอง</th>
                <th style={{width: '30%'}}>รายละเอียด</th>
                <th style={{width: '15%'}}>สถานะ</th>
                <th style={{width: '20%'}}>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.type}</td>
                  <td>{formattedDate(item.date)}</td>
                  <td>{item.details}</td>
                  <td>
                    {item.status}
                    <div className="TabBtnReq">
                      <button className="AdminBtnReq" onClick={() => handleAccept(item.id)} name="Accept">Accept</button>
                      <button className="AdminBtnReq" onClick={() => handleDecline(item.id)} name="Decline">Decline</button>
                    </div>
                  </td>
                  <td>
                    <div className="note">
                      <input type="text" />
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

export default AdminOrderPlace;
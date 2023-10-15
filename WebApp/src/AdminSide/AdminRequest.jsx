// import React, { useState, useEffect } from "react";
// import HeadAdmin from "./HeaderAdmin";
// import '../pagesCss/SubPageAdmin.css';

// function AdminRequest(){
//     const [data, setData] = useState([]);

//     const fetchData = () => {
//         fetch(`http://localhost:3131/adcheck1`)
//         .then((response) => response.json())
//         .then((responseData) => {
//             if (Array.isArray(responseData.results)) {
//             setData(responseData.results);
//             } else {
//             console.error('Invalid API response:', responseData.results);
//             setData([]);
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             setData([]);
//         });
//     };
//     return (
//         <div>
//             <div>
//                 <HeadAdmin/>
//                 <div className="backgroundPage">
//                     <h1 style={{color: 'black'}}>คำร้องเรียน</h1>
//                     <div className="AdminTableCheck">
//                     <table>
//                         <thead>
//                         <tr>
//                             <th style={{width: '10%'}}>หมายเลขบัตรประชาชน</th>
//                             <th style={{width: '10%'}}>ประเภท</th>
//                             <th style={{width: '20%'}}>รายละเอียด</th>
//                             <th style={{width: '10%'}}>สถานะ</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                             {data.map((item, index) => (
//                             <tr key={index}>
//                                 <td>{item.id}</td>
//                                 <td>{item.type}</td>
//                                 <td>{item.details}</td>
//                                 <td>{item.status}
//                                     <div className="TabBtnReq">
//                                         <button className="AdminBtnReq" name="Accept">Accept</button>
//                                         <button className="AdminBtnReq" name="Decline">Decline</button>
//                                     </div>
//                                 </td>
//                             </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default AdminRequest
import React, { useState, useEffect } from "react";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/SubPageAdmin.css';

function AdminRequest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Call fetchData function on component mount

  const fetchData = () => {
    fetch(`http://localhost:3131/adcheckreq`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results || []); // Set data to an empty array if responseData.results is falsy
      })
      .catch((error) => {
        console.error('Error:', error);
        setData([]); // Set data to an empty array in case of error
      });
  };

  const handleAccept = (idr) => {
    // ส่งคำร้องขอไปยัง API endpoint เพื่ออัพเดท status เป็น 'accepted'
    fetch(`http://localhost:3131/updateStatusreq/${idr}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'ดำเนินการแล้ว' })
      })
      .then(response => response.json())
      .then(data => {
        fetchData();
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
  };

  const handleDecline = (idr) => {
    // ส่งคำร้องขอไปยัง API endpoint เพื่ออัพเดท status เป็น 'declined'
    fetch(`http://localhost:3131/updateStatusreq/${idr}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'ปฏิเสธคำร้องนี้' })
      })
      .then(response => response.json())
      .then(data => {
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
        <h1 style={{color: 'black'}}>คำร้องเรียน</h1>
        <div className="AdminTableCheck">
          <table>
            <thead>
              <tr>
                <th style={{width: '5%'}}>หมายเลขบัตรประชาชน</th>
                <th style={{width: '5%'}}>หมายเลขคำร้อง</th>
                <th style={{width: '10%'}}>ประเภท</th>
                <th style={{width: '20%'}}>รายละเอียด</th>
                <th style={{width: '10%'}}>สถานะ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.idr}</td>
                  <td>{item.type}</td>
                  <td>{item.details}</td>
                  <td>
                    {item.status}
                    <div className="TabBtnReq">
                      <button className="AdminBtnReq" onClick={() => handleAccept(item.idr)} name="Accept">Accept</button>
                      <button className="AdminBtnReq" onClick={() => handleDecline(item.idr)} name="Decline">Decline</button>
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

export default AdminRequest;

import React, { useState, useEffect } from "react";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/SubPageAdmin.css';

class Acceptbutton{
  handleAccept = (idr) => {
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
        window.location.reload()
      })
      .catch(error => {
        console.error('Error:', error);
        window.location.reload()
      });
      
  };

  handleDecline = (idr) => {
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
        window.location.reload()
      })
      .catch(error => {
        console.error('Error:', error);
        window.location.reload()
      });      
  };
}

function AdminRequest() {
  const btn1 = new Acceptbutton()
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://localhost:3131/adcheckreq`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results || []);
      })
      .catch((error) => {
        console.error('Error:', error);
        setData([]);
      });
  };

  // const handleAccept = (idr) => {
  //   // ส่งคำร้องขอไปยัง API endpoint เพื่ออัพเดท status เป็น 'accepted'
  //   fetch(`http://localhost:3131/updateStatusreq/${idr}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ status: 'ดำเนินการแล้ว' })
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       fetchData();
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
      
  // };

  // const handleDecline = (idr) => {
  //   // ส่งคำร้องขอไปยัง API endpoint เพื่ออัพเดท status เป็น 'declined'
  //   fetch(`http://localhost:3131/updateStatusreq/${idr}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ status: 'ปฏิเสธคำร้องนี้' })
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       fetchData();
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });      
  // };

  const [textarea, setTextarea]=  React.useState('')
    const handleConfirm = async(idr) => {
    const jsonData = {
        textdesc: textarea,
    }
    await fetch(`http://localhost:3131/notereq/${idr}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(jsonData)
            if(data.status === 'ok'){
                alert('success')
            }else{
                alert('fail')
            }
    })
    .catch((error) => {
        console.log(JSON.stringify(jsonData))
        console.error('Error:', error);
    });
}

  return (
    <div>
      <HeadAdmin/>
      <div className="backgroundPage">
        <h1 style={{color: 'black'}}>คำร้องเรียน</h1>
        <div className="AdminTableCheck">
          <table>
            <thead>
              <tr>
                <th style={{width: '15%'}}>เลขบัตรประชาชน</th>
                <th style={{width: '15%'}}>เลขคำร้อง</th>
                <th style={{width: '15%'}}>ประเภท</th>
                <th style={{width: '25%'}}>รายละเอียด</th>
                <th style={{width: '15%'}}>สถานะ</th>
                <th style={{width: '25%'}}>หมายเหตุ</th>
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
                      <button className="AdminBtnReq" onClick={() => btn1.handleAccept(item.idr)} name="Accept">Accept</button>
                      <button className="AdminBtnReq" onClick={() => btn1.handleDecline(item.idr)} name="Decline">Decline</button>
                    </div>
                  </td>
                  <td>
                    <div className="note">
                      <input type="text" onChange={e=> setTextarea(e.target.value)}/>
                      <button className="AdminBtnReq" onClick={() => handleConfirm(item.idr)} name="Accept">ยืนยัน</button>
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

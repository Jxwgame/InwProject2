import React, { useState, useEffect } from "react";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/SubPageAdmin.css';

class Acceptbutton{
  handleAccept = (id) => {
    fetch(`http://localhost:3131/updateStatustax/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'Paid' })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchData();
        window.location.reload()
      })
      .catch(error => {
        console.error('Error:', error);
        window.location.reload()
      });
  };
  handleDecline = (id) => {
    fetch(`http://localhost:3131/updateStatustax/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'Unpaid' })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        fetchData();
        window.location.reload()
      })
      .catch(error => {
        console.error('Error:', error);
        window.location.reload()
      });
  };
}

function AdminTax() {
  const btn1 = new Acceptbutton()
  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  }
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://localhost:3131/adchecktax`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results || []);
      })
      .catch((error) => {
        console.error('Error:', error);
        setData([]);
      });
  };

  const fetchimage = (id) => {
    fetch(`http://localhost:3131/showimage/${id}`)
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
      })
      .catch(error => console.error('Error:', error));
  };

  // const handleAccept = (id) => {
  //   fetch(`http://localhost:3131/updateStatustax/${id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ status: 'Paid' })
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       fetchData();
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // };
  // const handleDecline = (id) => {
  //   fetch(`http://localhost:3131/updateStatustax/${id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ status: 'Unpaid' })
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       fetchData();
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });      
  // };

  const [textarea, setTextarea]=  React.useState('')
    const handleConfirm = async(id) => {
    const jsonData = {
        textdesc: textarea,
    }
    await fetch(`http://localhost:3131/notetax/${id}`, {
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
        <h1>ภาษี</h1>
        <div className="AdminTableCheck">
            <table>
            <thead>
              <tr>
                <th style={{width: '10%'}}>เลขที่ใบเสร็จ</th>
                <th style={{width: '10%'}}>ประเภทภาษี</th>
                <th style={{width: '10%'}}>วันที่ที่ชำระเงิน</th>
                <th style={{width: '10%'}}>สลิป</th>
                <th style={{width: '5%'}}>สถานะ</th>
                <th style={{width: '10%'}}>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.type}</td>
                  <td>{formattedDate(item.date)}</td>
                  <td> <img height="80%" width="80%" src={item.image}/> </td>
                  <td>
                    {item.status}
                    <div className="TabBtnReq">
                      <button className="AdminBtnReq" onClick={() => btn1.handleAccept(item.id)} name="Accept">Accept</button>
                      <button className="AdminBtnReq" onClick={() => btn1.handleDecline(item.id)} name="Decline">Decline</button>
                    </div>
                  </td>
                  <td>
                    <div className="note">
                      <input type="text" onChange={e=> setTextarea(e.target.value)}/>
                      <button className="AdminBtnReq" onClick={() => handleConfirm(item.id)} name="Accept">ยืนยัน</button>
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

export default AdminTax;

import React, { useState } from 'react';
import '../../pagesCss/Form.css'

function FormOrderPlace() {
    const [selectoption, setOption] = useState("เลือกสถานที่");
    // const [otherdepartment, setDepartment] = useState("");

    // const handleSelectionChange = (event) => {
    //     const selectedValue = event.target.value;
    //     setSelection(selectedValue);
    // };

    // const handleOtherDepart = (event) => {
    //     setDepartment(event.target.value);
    // };
    const [fname, setFname]=  React.useState('')
    const [lname, setLname]=  React.useState('')
    const [citizen_id, setCiti_id]=  React.useState('')
    const [tel, setTel]= React.useState('')
    const [date, setDate]= React.useState('')
    const [booking_desc, setText]= React.useState('')



    const handleSubmit = async(event) => {
        event.preventDefault();
    const jsonData = {
        fname: fname,
        lname: lname,
        citizen_id: citizen_id,
        tel: tel,
        selectoption: selectoption,
        date: date,
        booking_desc: booking_desc,
    }


    await fetch('http://localhost:3131/formplace', {
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
                window.location = '/1StopService'
            }else{
                alert('fail')
            }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

    return (
    <div className="body">
    <div className="background">
        <form action=""onSubmit={handleSubmit}>
        <h2>คำร้องจองการใช้สถานที่</h2>
        <div className="input-text">
            <div className="contain">
            <label htmlFor="fName">ชื่อ</label>
            <label htmlFor="IdNum" id='label1' style={{marginLeft: "39%"}}>นามสกุล</label>
            </div>
            <input type="text" name="fName" id="fname" onChange={e=> setFname(e.target.value)} placeholder="กรุณากรอกชื่อของคุณ" required/>
            <input type="text" id="lname" onChange={e=> setLname(e.target.value)} placeholder="กรอกนามสกุล" required style={{}}/>
            </div>
            <div className="input-text">
                <label htmlFor="">หมายเลขบัตรประชาชน</label>
                <br />
                <input type="text" id="citi_id" onChange={e=> setCiti_id(e.target.value)} placeholder="184xxxxxxxxxx" required pattern="[0-9]{13}" title='โปรดกรอกรหัสบัตรประชาชน'/>
            </div>
        <div className="input-text">
            <label htmlFor="phone">เบอร์ติดต่อ</label>
            <br/>
            <input className="longtext" type="text" onChange={e=> setTel(e.target.value)} placeholder="08xxxxxxxx" required="กรุณากรอกเบอร์โทร"/>
        </div>
        <div className="input-text">
            <label htmlFor="">สถานที่ที่ต้องการจอง</label><br />
            <select className="selectOption" defaultValue={"เลือกสถานที่"} onChange={e=> setOption(e.target.value)}>
                <option value="" disabled>- - - - เลือกสถานที่ - - - -</option>
                <option className="listoption"value={"สนามกีฬา"}>สนามกีฬา</option>
                <option className="listoption"value={"สวนสาธารณะที่1"}>สวนสาธารณะที่ 1</option>
                <option className="listoption"value={"สวนสาธารณะที่2"}>สวนสาธารณะที่ 2</option>
                <option className="listoption"value={"หอประชุมกลาง"}>หอประชุมกลาง</option>
                <option className="listoption"value={"อื่นๆ"}>อื่นๆ</option>
        </select>
        {/* {selection === "อื่นๆ" ? (
            <>
            <input style={{marginTop: '1vh', height: '3.5vh', fontSize: '16px'}}className="longtext" type="text" placeholder="กรุณากรอกชื่อหน่วยงาน" required onChange={handleOtherDepart} value={otherdepartment}/>
            <br />
            </>
            ) : null } */}
        </div>
        <div className="input-text">
            <label htmlFor="">วันที่ต้องการจอง</label>
            <br/>
            <input type="date" onChange={e=> setDate(e.target.value)}/>
        </div>
        <label htmlFor="">รายละเอียดที่ต้องการใช้สถานที่</label><br/>
        <div className="input-content">
            <textarea className="textarea" type="text" onChange={e=> setText(e.target.value)} placeholder="..." required/>
        </div>
        <div className="btn">
                <button className='submit' type='submit' style={{marginTop: '3%'}}>ส่งคำร้อง</button>
            </div>
        </form>
    </div>
    </div>
    );
}
export default FormOrderPlace
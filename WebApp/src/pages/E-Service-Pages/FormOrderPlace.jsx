import React, { useState } from 'react';
import '../../pagesCss/Form.css'

function FormOrderPlace() {
    const [selection, setSelection] = useState("");
    const [otherdepartment, setDepartment] = useState("");

    const handleSelectionChange = (event) => {
        const selectedValue = event.target.value;
        setSelection(selectedValue);
    };

    const handleOtherDepart = (event) => {
        setDepartment(event.target.value);
    };

    return (
    <div className="body">
    <div className="background">
        <form action="">
        <h2>คำร้องจองการใช้สถานที่</h2>
        <div className="input-text">
            <div className="contain">
            <label htmlFor="fName">ชื่อ</label>
            <label htmlFor="IdNum" id='label1' style={{marginLeft: "39%"}}>นามสกุล</label>
            </div>
            <input type="text" name="fName" placeholder="กรุณากรอกชื่อของคุณ" required/>
            <input type="text" placeholder="กรอกนามสกุล" required style={{}}/>
            </div>
            <div className="input-text">
                <label htmlFor="">หมายเลขบัตรประชาชน</label>
                <br />
                <input type="text" placeholder="184xxxxxxxxxx" required pattern="[0-9]{13}" title='โปรดกรอกรหัสบัตรประชาชน'/>
            </div>
        <div className="input-text">
            <label htmlFor="phone">เบอร์ติดต่อ</label>
            <br/>
            <input className="longtext" type="text" placeholder="08xxxxxxxx" required="กรุณากรอกเบอร์โทร"/>
        </div>
        <div className="input-text">
            <label htmlFor="">สถานที่ที่ต้องการจอง</label><br />
            <select className="selectOption" onChange={handleSelectionChange} value={selection}>
                <option value="" disabled selected>- - - - เลือกสถานที่ - - - -</option>
                <option className="listoption">สนามกีฬา</option>
                <option className="listoption">หน่วยงานสาธารณะสุข</option>
                <option className="listoption">สวนสาธารณะที่ 1</option>
                <option className="listoption">สวนสาธารณะที่ 2</option>
                <option className="listoption">หอประชุมกลาง</option>
                <option className="listoption">อื่นๆ</option>
        </select>
        {selection === "อื่นๆ" ? (
            <>
            <input style={{marginTop: '1vh', height: '3.5vh', fontSize: '16px'}}className="longtext" type="text" placeholder="กรุณากรอกชื่อหน่วยงาน" required onChange={handleOtherDepart} value={otherdepartment}/>
            <br />
            </>
            ) : null }
        </div>
        <br />
        <div className="input-text">
            <label htmlFor="">วันที่ต้องการจอง</label>
            <br/>
            <input type="date"/>
        </div>
        <label htmlFor="">รายละเอียดที่ต้องการใช้สถานที่</label><br/>
        <div className="input-content">
            <textarea className="textarea" type="text" placeholder="..." required/>
        </div>
        <div className="btn">
                <button className='submit'>ส่งตำร้อง</button>
            </div>
        </form>
    </div>
    </div>
    );
}
export default FormOrderPlace
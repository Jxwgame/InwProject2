import React from 'react';
import '../../pagesCss/Form.css'

function FormOrderPlace() {
    return (
    <div className="body">
    <div className="background">
        <form action="">
        <h2>คำร้องจองการใช้สถานที่</h2>
        <div className="input-text">
            <div className="contain">
            <div className="label-container">
            <label htmlFor="fName">ชื่อ-นามสกุล</label>
            <label htmlFor="IdNum" id='label1'>หมายเลขบัตรประชาชน</label>
            </div>
            </div>
            <br />
            <input type="text" name="fName" id="" placeholder="กรุณากรอกชื่อของคุณ" required/>
            <input type="text" placeholder="เลขบัตรประชาชน" required/>
            <br />
        </div>
        <div className="input-text">
            <label htmlFor="Email" name="Email">Email</label>
            <br/>
            <input className="longtext" type="text" placeholder="abcdef@gmail.com" required/>
        </div>
        <div className="input-text">
            <label htmlFor="phone">เบอร์ติดต่อ</label>
            <br/>
            <input className="longtext" type="text" placeholder="08xxxxxxxx" required="กรุณากรอกเบอร์โทร"/>
        </div>
        <div className="input-text">
            <label htmlFor="">ที่อยู่</label><br/>
            <input className="longtext" type="text" placeholder="08xxxxxxxx" required/>
        </div>
        <div className="input-text">
            <label htmlFor="">วันที่ต้องการจอง</label>
            <br/>
            <input type="date"/>
        </div>
        <div className="input-text">
            <label htmlFor="">สถานที่ที่ต้องการจอง</label><br/>
            <input className="longtext" type="text" placeholder="สนามกีฬา" required/>
        </div>
        <div className="input-text">
            <label htmlFor="">เอกสารประกอบ</label><br/>
            <input className="boxfile" type="file" accept=""/>
        </div>
        <div className="btn">
                <button className='submit'>ยืนยัน</button>
            </div>
        </form>
    </div>
    </div>
    );
}
export default FormOrderPlace
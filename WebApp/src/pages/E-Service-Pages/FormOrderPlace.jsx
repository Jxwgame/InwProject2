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
            <label htmlFor="fName">ชื่อ</label>
            <label htmlFor="IdNum" id='label1' style={{marginLeft: "39%"}}>นามสกุล</label>
            </div>
            <input type="text" name="fName" placeholder="กรุณากรอกชื่อของคุณ" required/>
            <input type="text" placeholder="กรอกนามสกุล" required style={{}}/>
            </div>
            <div className="input-text">
                <label htmlFor="">หมายเลขบัตรประชาชน</label>
                <br />
                <input type="text" placeholder="184xxxxxxxxxx" required/>
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
            <label htmlFor="">แนบสลิปการโอน</label><br/>
            <input className="boxfile" type="file" accept="image/*" style={{marginTop: '1vh'}}/>
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
import React from "react";
import '../../pagesCss/Form.css'

function FormTax() {
    return (
    <div className="body">
    <div className="background">
        <form action="">
        <h2>ชำระค่าธรรมเนียม</h2>
        <div className="input-text">
            <div className="contain">
            <label htmlFor="fName">ชื่อ-นามสกุล</label>
            <label htmlFor="IdNum" id="label1">หมายเลขบัตรประชาชน</label>
            </div>
            <br/>
            <input type="text" name="fName" id="" placeholder="กรุณากรอกชื่อของคุณ" required/>
            <input type="text" placeholder="เลขบัตรประชาชน" required/>
            <br/>
        </div>
        <div className="input-text">
            <label htmlFor="Email" name="Email">Email</label>
            <br/>
            <input className="longtext" type="text" placeholder="abcdef@gmail.com" required/>
        </div>
        <div className="input-text">
            <label htmlFor="phone">เบอร์ติดต่อ</label>
            <br/>
            <input className="longtext" type="text" placeholder="08xxxxxxxx" required/>
        </div>
        <div className="input-text">
            <label htmlFor="">ที่อยู่</label>
            <br/>
            <input className="longtext" type="text" placeholder="08xxxxxxxx" required/>
        </div>
        <div className="input-text">
            <label htmlFor="">เลือกการชำระเงิน</label>
            <br/><br/>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label htmlFor="html">ชำระค่าธรรมเนียมขยะ</label><br/>
            <input type="radio" id="css" name="fav_language" value="CSS"/>
            <label htmlFor="css">ชำระค่าธรรมเนียมป้าย</label><br/>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
            <label htmlFor="javascript">ภาษีอื่นๆ</label><br/>
        </div>
        <br/><br/><br/>
        <div className="input-text">
            <label htmlFor="">วันที่ชำระ</label>
            <br/>
            <input type="date"/>
        </div>
            <div className="input-text">
            <label htmlFor="">แนบสลิปการชำระเงิน   </label><br/>
            <input className="boxfile" type="file" accept="image/jpeg, image/png"/>
        </div>
        <div className="btn">
            <button className='submit'>ยืนยัน</button>
        </div>
        </form>
    </div>
    </div>
    );
}
export default FormTax
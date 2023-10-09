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
            <label htmlFor="fName">ชื่อ-นามสกุลของผู้โอนตามสลิป</label>            </div>
            <br/>
            <input className="longtext" type="text" name="fName" id="" placeholder="กรุณากรอกชื่อของคุณ" required/>
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
            <label htmlFor="">รหัสบ้าน</label>
            <br/>
            <input className="longtext" type="text" placeholder="08xxxxxxxx" required/>
        </div>
        <div className="input-text">
            <label htmlFor="">เลือกการชำระเงิน</label>
            <br/><br/>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label htmlFor="html"> ชำระค่าธรรมเนียมขยะ</label><br/>
            <input type="radio" id="css" name="fav_language" value="CSS"/>
            <label htmlFor="css"> ชำระค่าธรรมเนียมป้าย</label><br/>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
            <label htmlFor="javascript"> ภาษีอื่นๆ</label><br/>
        </div>
        <br />
        <div className="input-text">
            <label htmlFor="">วันที่ชำระ</label>
            <br/>
            <input type="date"/>
        </div>
            <div className="input-text">
                <label htmlFor="">แนบสลิปการโอน</label><br/>
                <input className="boxfile" type="file" accept="image/*" style={{marginTop: '1vh'}}/>
            </div>
            <div className="input-text">
        </div>
        <div className="btn">
            <button className='submit'>ส่งคำร้อง</button>
        </div>
        </form>
    </div>
    </div>
    );
}
export default FormTax
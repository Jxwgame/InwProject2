import React from 'react';
import '../../pagesCss/Form.css'

function FormReq() {
    return (
        <div className='body'>
            <div className="background">
                <form action="">
                <h2>แบบฟอร์มคำร้อง</h2>
                <div className="input-text">
                    <div className="contain">
                    <label htmlFor="fName">ชื่อ</label>
                    <label htmlFor="IdNum" id='label1' style={{marginLeft: "39%"}}>นามสกุล</label>
                    </div>
                    <br/>
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
                    <input className="longtext" type="text" placeholder="08xxxxxxxx" required/>
                </div>
                <label htmlFor="">เรื่องที่ประสงค์ส่งคำร้อง</label>
                <div className="input-content">
                    <textarea name="textarea" id="1" required></textarea>
                </div>
                <div className="input-text">
                    <label htmlFor="">แนบรูปภาพ</label><br/>
                    <input className="boxfile" type="file" accept="image/*" style={{marginTop: '1vh'}}/>
                </div>
                <div className="input-text">
                    <label htmlFor="">ระบุพื้นที่ของปัญหา (ถ้ามี) </label>
                    <br/>
                    <input className="longtext" type="text" placeholder="ใกล้พื้นที่ xxx หมู่ x ต.Xxx"/>
                </div>
                <div className="btn">
                    <button className='submit'>ส่งคำร้อง</button>
                </div>
                </form>
            </div>
        </div>
    );
}
export default FormReq
// 55555
//33 232 1
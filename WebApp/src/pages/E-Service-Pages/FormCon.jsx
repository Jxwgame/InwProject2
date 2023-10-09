import React from 'react';
import '../../pagesCss/Form.css'

function FormCon() {
    return (
    <div className='body'>
        <div className="background">
            <form action="">
            <h2>แบบฟอร์มคำร้อง</h2>
            <div className="input-text">
                <label htmlFor="fName">ชื่อ-นามสกุลของผู้ร้องเรียน</label>
                <br/>
                <input type="text" name="fName" id="" placeholder="กรุณากรอกชื่อของคุณ" required/>
                <br/>
            </div>
            <div className="input-text">
                <label htmlFor="tel" name="tel">เบอร์ติดต่อ</label>
                <br/>
                <input className="longtext" type="tel" placeholder="08xxxxxxxx" required/>
            </div>
            <div className="input-text">
                <label htmlFor="phone">เจ้าหน้าที่ที่ต้องการร้องเรียน</label>
                <br/>
                <input className="longtext" type="text" placeholder="นายสมชาย สุดหล่อ" required/>
            </div>
            <label htmlFor="">เรื่องที่ร้องเรียน</label>
            <div className="input-content">
                <textarea id="textarea" required></textarea>
            </div>
            <div className="btn">
                <button className='submit'>ส่งคำร้อง</button>
            </div>
            <br/>
            </form>
            </div>
        </div>
    );
}
export default FormCon
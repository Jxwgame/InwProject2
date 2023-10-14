import React, { useState } from 'react';
import '../../pagesCss/Form.css'

export default function FormReq() {
    const [selection, setOption] = useState("");
    const [otherdepartment, setDepartment] = useState("");
    
    const handleOtherDepart = (event) => {
        setDepartment(event.target.value);
    };
    
    const [fname, setFname]=  React.useState('')
    const [lname, setLname]=  React.useState('')
    const [citi_id, setCiti_id]=  React.useState('')
    const [tel, setTel]= React.useState('')
    const [text, setText]= React.useState('')
    const [image, setImage]= React.useState('')



    const handleSubmit = async(event) => {
        event.preventDefault();
    const jsonData = {
        fname: fname,
        lname: lname,
        citizen_id: citi_id,
        tel: tel,
        selectoption: selection==='อื่นๆ'?otherdepartment:selection,
        request_desc: text,
        image: image,
    }


    await fetch('http://localhost:3131/formreq', {
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
        <div className='body'>
            <div className="background">
                <form action="" onSubmit={handleSubmit}>
                <h2>แบบฟอร์มคำร้อง</h2>
                <div className="input-text">
                    <div className="contain">
                    <label htmlFor="fName">ชื่อ</label>
                    <label htmlFor="label1" id='label1' style={{marginLeft: "39%"}}>นามสกุล</label>
                    </div>
                    <input type="text" id="fname" onChange={e=> setFname(e.target.value)} placeholder="กรุณากรอกชื่อของคุณ" required/>
                    <input type="text" id="lname" onChange={e=> setLname(e.target.value)} placeholder="กรอกนามสกุล" required/>
                </div>

                <div className="input-text">
                    <label htmlFor="">หมายเลขบัตรประชาชน</label>
                    <br />
                    <input type="text" citi_id="citi_id" onChange={e=> setCiti_id(e.target.value)} placeholder="184xxxxxxxxxx" required pattern="[0-9]{13}" title='โปรดกรอกรหัสบัตรประชาชน'/>
                </div>
                <div className="input-text">
                    <label htmlFor="phone">เบอร์ติดต่อ</label>
                    <br/>
                    <input className="longtext" type="text" id="tel" onChange={e=> setTel(e.target.value)} placeholder="08xxxxxxxx" required/>
                </div>

                <div className="input-text">
                    <label htmlFor="">หน่วยงานที่ต้องการร้องเรียน</label>
                    <br/>
                    <select className="selectOption" defaultValue={"เลือกหน่วยงาน"} onChange={e=> setOption(e.target.value)}>
                        <option value="" disabled selected>- - - - เลือกหน่วยงาน - - - -</option>
                        <option className="listoption"value={'แจ้งคำร้องทั่วไป สำนักปลัด'}>แจ้งคำร้องทั่วไป สำนักปลัด</option>
                        <option className="listoption"value={'แจ้งคำร้องทั่วไป กองช่าง'}>แจ้งคำร้องทั่วไป กองช่าง</option>
                        <option className="listoption"value={'แจ้งซ่อมถนน ไหล่ทาง สะพาน'}>แจ้งซ่อมถนน ไหล่ทาง สะพาน</option>
                        <option className="listoption"value={'แจ้งซ่อมท่อระบายน้ำ'}>แจ้งซ่อมท่อระบายน้ำ</option>
                        <option className="listoption"value={'แจ้งคำร้องทั่วไป กองคลัง'}>แจ้งคำร้องทั่วไป กองคลัง</option>
                        <option className="listoption"value={'แจ้งคำร้องทั่วไป กองศึกษา'}>แจ้งคำร้องทั่วไป กองศึกษา</option>
                        <option className="listoption"value={'แจ้งขอจำหน่ายสินค้าในที่สาธารณะ'}>แจ้งขอจำหน่ายสินค้าในที่สาธารณะ</option>
                        <option className="listoption"value={'แจ้งขอทำการโฆษณา'}>แจ้งขอทำการโฆษณา</option>
                        <option className="listoption"value={'แจ้งขอประกอบกิจการที่เป็นอันตรายต่อสุขภาพ'}>แจ้งขอประกอบกิจการที่เป็นอันตรายต่อสุขภาพ</option>
                        <option className="listoption"value={'แจ้งขอประกอบกิจการรับทำการเก็บขนส่งปฏิกูลมูลฝอย'}>แจ้งขอประกอบกิจการรับทำการเก็บขนส่งปฏิกูลมูลฝอย</option>
                        <option className="listoption"value={'แจ้งขอรับบริการใช้รถกู้ภัยฉุกเฉิน'}>แจ้งขอรับบริการใช้รถกู้ภัยฉุกเฉิน</option>
                        <option className="listoption"value={'แจ้งขอรัสนับสนุนตัดกิ่งไม้'}>แจ้งขอรัสนับสนุนตัดกิ่งไม้</option>
                        <option className="listoption"value={'แจ้งคำร้องทั่วไป กองสาธารณสุข'}>แจ้งคำร้องทั่วไป กองสาธารณสุข</option>
                        <option className="listoption"value={'ขอสนัสนุนรถบรรทุกน้ำสำหรับทำความสะอาด'}>ขอสนัสนุนรถบรรทุกน้ำสำหรับทำความสะอาด</option>
                        <option className="listoption"value={'ขอสนัสนุนรถบรรทุกน้ำสำหรับอุปโภค บริโภค'}>ขอสนัสนุนรถบรรทุกน้ำสำหรับอุปโภค บริโภค</option>
                        <option className="listoption"value={'ขอสนับบสนุนรถตักดิน'}>ขอสนับบสนุนรถตักดิน</option>
                        <option className="listoption"value={'ขอสนับสนุนรถบรรทุกน้ำ สำหรับดันท่อระบายน้ำ'}>ขอสนับสนุนรถบรรทุกน้ำ สำหรับดันท่อระบายน้ำ</option>
                        <option className="listoption"value={'อื่นๆ'}>อื่นๆ</option>
                    </select>
                    {selection === "อื่นๆ" ? ( 
                    <input style={{marginTop: '1vh', height: '3.5vh', fontSize: '16px'}}className="longtext" type="text" placeholder="กรุณากรอกชื่อหน่วยงาน" required onChange={handleOtherDepart} value={otherdepartment}/>
                ) : null }
                </div><br /><br />
                <label htmlFor="">เรื่องที่ประสงค์ส่งคำร้อง</label>
                <div className="input-content">
                    <textarea name="textarea" id="text" onChange={e=> setText(e.target.value)} required></textarea>
                </div>
                <div className="input-text">
                    <label htmlFor="">แนบรูปภาพ (ถ้ามี) </label><br/>
                    <input className="boxfile" type="file" id="image" onChange={e=> setImage(e.target.value)} accept="image/*" style={{marginTop: '1vh'}}/>
                </div>
                <div className="btn">
                    <button className='submit' type='submit'>ส่งคำร้อง</button>
                </div>
                </form>
            </div>
        </div>
    );
}
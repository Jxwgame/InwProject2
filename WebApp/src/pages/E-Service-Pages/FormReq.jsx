import  React from 'react';
import '../../pagesCss/Form.css'

export default function FormReq() {
    const [fname, setFname]=  React.useState('')
    const [lname, setLname]=  React.useState('')
    const [citi_id, setCiti_id]=  React.useState('')
    const [mail, setMail]= React.useState('')
    const [tel, setTel]= React.useState('')
    const [text, setText]= React.useState('')
    const [image, setImage]= React.useState('')
    const [text2, setText2]= React.useState('')
    const handleSubmit = async(event) => {
        event.preventDefault();
    const jsonData = {
        fname: fname,
        lname: lname,
        ci_id: citi_id,
        mail: mail,
        tel: tel,
        text: text,
        image: image,
        text2: text2
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
                    <br/>
                    <input type="text" id="fname" onChange={e=> setFname(e.target.value)} placeholder="กรุณากรอกชื่อของคุณ" required/>
                    <input type="text" id="lname" onChange={e=> setLname(e.target.value)} placeholder="กรอกนามสกุล" required style={{}}/>
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
                    <select className="selectOption">
                        <option value="" disabled selected>- - - - เลือกหน่วยงาน - - - -</option>
                        <option className="listoption">หน่วยงานตำรวจ</option>
                        <option className="listoption">หน่วยงานสาธารณะสุข</option>
                        <option className="listoption">หน่วยงานราชการ</option>
                        <option className="listoption">หน่วยงานดับเพลิง</option>
                        <option className="listoption">หน่วยงานกรมทางหลวงชนบท</option>
                        <option className="listoption">อื่นๆ</option>
                    </select>
                </div>

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
import React from "react";
import '../../pagesCss/Form.css'

function FormTax() {
    const [selection, setOption] = React.useState("");
    
    const [fname, setFname]=  React.useState('')
    const [lname, setLname]=  React.useState('')
    const [citi_id, setCiti_id]=  React.useState('')
    const [tel, setTel]= React.useState('')
    const [house_id, setH_id]= React.useState('')
    const [tax_id, setT_id]= React.useState('')
    const [date1, setDate]= React.useState('')
    const [image, setImage]= React.useState('')



    const handleSubmit = async(event) => {
        event.preventDefault();
    const jsonData = {
        citizen_fname: fname,
        citizen_lname: lname,
        citizen_id: citi_id,
        citizen_tel: tel,
        house_id: house_id,
        tax_id: tax_id,
        selectoption: selection,
        tax_date: date1,
        tax_image: image,
    }


    await fetch('http://localhost:3131/formtax', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
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
        <form action="" onSubmit={handleSubmit}>
        <h2>ชำระค่าธรรมเนียม</h2>
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
            <input className="longtext" type="text" id='tel' onChange={e=> setTel(e.target.value)} placeholder="08xxxxxxxx" required/>
        </div>
        <div className="input-text">
            <label htmlFor="">รหัสบ้าน</label>
            <br/>
            <input className="longtext" type="text" id="house_id" onChange={e=> setH_id(e.target.value)} placeholder="08xxxxxxxx"/>
        </div>
        <div className="input-text">
            <label htmlFor="">เลขที่ใบเสร็จ</label>
            <br />
            <input type="text" id="tax_id" onChange={e=> setT_id(e.target.value)} placeholder="" required/>
        </div>
        <div className="input-text">
            <label htmlFor="">เลือกการชำระเงิน</label>
            <br/><br/>
            <input type="radio" id="html" name="fav_language" value={"ชำระค่าธรรมเนียมขยะ"} onChange={e=> setOption(e.target.value)}/>
            <label htmlFor="html"> ชำระค่าธรรมเนียมขยะ</label><br/>
            <input type="radio" id="css" name="fav_language" value={"ชำระค่าธรรมเนียมป้าย"} onChange={e=> setOption(e.target.value)} />
            <label htmlFor="css"> ชำระค่าธรรมเนียมป้าย</label><br/>
            <input type="radio" id="javascript" name="fav_language" value={"ภาษีอื่นๆ"} onChange={e=> setOption(e.target.value)}/>
            <label htmlFor="javascript"> ภาษีอื่นๆ</label><br/>
        </div>
        <br />
        <div className="input-text">
            <label htmlFor="">วันที่ชำระ</label>
            <br/>
            <input type="date" id="date" onChange={e=> setDate(e.target.value)}/>
        </div>
            <div className="input-text">
                <label htmlFor="">แนบสลิปการโอน</label><br/>
                <input className="boxfile" type="file" id="image" onChange={e=> setImage(e.target.value)} accept="image/*" style={{marginTop: '1vh'}}/>
            </div>
        <div className="btn">
            <button className='submit' type="submit">ส่งคำร้อง</button>
        </div>
        </form>
    </div>
    </div>
    );
}
export default FormTax
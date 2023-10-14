import React, { useState } from 'react';
import '../../pagesCss/Form.css'


function FormCon() {
    const [selection, setOption] = useState("")
    // const [otherdepartment, setDepartment] = useState("");

    // const handleSelectionChange = (event) => {
    //     const selectedValue = event.target.value;
    //     setSelection(selectedValue);
    // };
    
    // const handleOtherDepart = (event) => {
    //     setDepartment(event.target.value);
    // };

    const [textarea, setTextarea]=  React.useState('')
    const handleSubmit = async(event) => {
        event.preventDefault();
    const jsonData = {
        selectoption: selection,
        textdesc: textarea,
    }
    await fetch('http://localhost:3131/formcomplain', {
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
                // window.location = '/1StopService'
            }else{
                alert('fail')
            }
    })
    .catch((error) => {
        console.log(JSON.stringify(jsonData))
        console.error('Error:', error);
    });
}
    return (
    <div className="body">
        <div className="" style={{width: '80vh'}}>
            <form action=""onSubmit={handleSubmit}>
            <h2 style={{textAlign: 'center', marginBottom: '5vh', fontSize: '26px'}}>แบบฟอร์มร้องทุกข์</h2>
            <div className="input-text">
                <label htmlFor="department">หน่วยงานที่ต้องการร้องเรียน</label>
                <br/>
                    <select className="selectOption" defaultValue={"เลือกหน่วยงาน"} onChange={e=> setOption(e.target.value)} >
                        <option value="" disabled>- - - - เลือกหน่วยงาน - - - -</option>
                        <option className="listoption"value={"สำนักปลัด"}>สำนักปลัด</option>
                        <option className="listoption"value={"กองช่าง"}>กองช่าง</option>
                        <option className="listoption"value={"กองคลัง"}>กองคลัง</option>
                        <option className="listoption"value={"กองศึกษา"}>กองศึกษา</option>
                        <option className="listoption"value={"สาธารณสุข"}>สาธารณสุข</option>
                        <option className="listoption"value={"อื่นๆ"}>อื่นๆ</option>
                </select>
                {/* {selection === "อื่นๆ" ? (  //เลือกอื่นๆ มีปัญหาถ้าเลือกอื่นๆแล้วต้องเพิ่มหน่วยงานใน department
                    <input style={{marginTop: '1vh', height: '3.5vh', fontSize: '16px'}}className="longtext" type="text" placeholder="กรุณากรอกชื่อหน่วยงาน" required onChange={handleOtherDepart} value={otherdepartment}/>
                ) : null } */}
            </div>
            <br />
            <label htmlFor="" >เรื่องที่ร้องเรียน</label>
            <div className="input-content">
                <textarea id="textarea" onChange={e=> setTextarea(e.target.value)}></textarea>
            </div>
            <div className="btn" style={{marginTop: '3%'}}>
                <button className='submit' type='submit'>ส่งคำร้อง</button>
            </div>
            <br/>
            </form>
            </div>
        </div>
    );
}
export default FormCon
import React, { useState } from 'react';
import '../../pagesCss/Form.css'

function FormCon() {
    const [selection, setSelection] = useState("");
    const [otherdepartment, setDepartment] = useState("");

    const handleSelectionChange = (event) => {
        const selectedValue = event.target.value;
        setSelection(selectedValue);

    };
    
    const handleOtherDepart = (event) => {
        setDepartment(event.target.value);
    };

    return (
    <div className="body">
        <div className="" style={{width: '80vh'}}>
            <form action="">
            <h2 style={{textAlign: 'center', marginBottom: '5vh', fontSize: '26px'}}>แบบฟอร์มร้องทุกข์</h2>
            <div className="input-text">
                <label htmlFor="department">หน่วยงานที่ต้องการร้องเรียน</label>
                <br/>
                    <select className="selectOption" onChange={handleSelectionChange} value={selection}>
                        <option value="" disabled selected>- - - - เลือกหน่วยงาน - - - -</option>
                        <option className="listoption">หน่วยงานตำรวจ</option>
                        <option className="listoption">หน่วยงานสาธารณะสุข</option>
                        <option className="listoption">หน่วยงานราชการ</option>
                        <option className="listoption">หน่วยงานดับเพลิง</option>
                        <option className="listoption">หน่วยงานกรมทางหลวงชนบท</option>
                        <option className="listoption">อื่นๆ</option>
                </select>
                {selection === "อื่นๆ" ? ( 
                    <input style={{marginTop: '1vh', height: '3vh', fontSize: '16px'}}className="longtext" type="text" placeholder="กรุณากรอกชื่อหน่วยงาน" required onChange={handleOtherDepart} value={otherdepartment}/>
                ) : null }
            </div>
            <br />
            <br />
            <label htmlFor="" >เรื่องที่ร้องเรียน</label>
            <div className="input-content">
                <textarea id="textarea" ></textarea>
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
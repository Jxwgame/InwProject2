import React, { useState } from 'react';
import '../pagesCss/OneStopService.css'
import NavBar from './NavBar';
import FormCon from './E-Service-Pages/FormCon';
import FirstPage from './E-Service-Pages/firstpage';
import FormReq from './E-Service-Pages/FormReq';
import FormTax from './E-Service-Pages/FormTax';
import FormOrderPlace from './E-Service-Pages/FormOrderPlace';

function OneStopService() {

    const [currentPage, setCurrentPage] = useState('first');

    const changePage = (page) => {
        setCurrentPage(page);
    }
    return (
    <div>
        <section className="header2">
            <NavBar/>
            <section className="nav-links">
                <div className="container">
                    <ul className="Tab">
                        <ul className="Tab2">
                            <li onClick={() => changePage('first')}>หน้าแรก</li>
                            <li onClick={() => changePage('check')}>ตรวจสอบการดำเนินการ</li>
                        </ul>
                        <li onClick={() => changePage('req')}>แบบฟอร์มคำร้องทั่วไป</li>
                        <li onClick={() => changePage('con')}>แบบฟอร์มร้องทุกข์</li>
                        <li onClick={() => changePage('tax')}>ชำระค่าธรรมเนียม</li>
                        <li onClick={() => changePage('orderplace')}>ร้องขอการใช้สถานที่</li>
                    </ul>
                </div>
            </section>
        </section><br />
        <div className="switch">
            <section className='props'>
                {currentPage === 'first' && <FirstPage/>}
                {currentPage === 'con' && <FormCon/>}
                {currentPage === 'req' && <FormReq/>}
                {currentPage === 'tax' && <FormTax/>}
                {currentPage === 'orderplace' && <FormOrderPlace/>}
            </section>
        </div>
    </div>
    );
}
export default OneStopService
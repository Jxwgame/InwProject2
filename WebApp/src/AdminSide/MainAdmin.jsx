import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDochub } from "@fortawesome/free-brands-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import HeadAdmin from "./HeaderAdmin";
import '../pagesCss/AdminMain.css'

function AdminMain(){
    const [count, setCount] = useState('');
    const [count2, setCount2] = useState('');
    const [count3, setCount3] = useState('');
    const [count4, setCount4] = useState('');
    useEffect(() => {
        fetchData()
        fetchData2()
        fetchData3()
        fetchData4()
    },[]);
    const fetchData = async() => {
    await fetch(`http://localhost:3131/countreq`)
    .then(response => response.json())
    .then(data => {
        setCount(data.results[0].cntreq);
        console.log(data.results[0].cntreq)
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
  };
  const fetchData2 = async() => {
      await fetch(`http://localhost:3131/countcom`)
      .then(response => response.json())
      .then(data => {
          setCount2(data.results[0].cntcom);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    };
    const fetchData3 = async() => {
        await fetch(`http://localhost:3131/counttax`)
        .then(response => response.json())
        .then(data => {
            setCount3(data.results[0].cnttax);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    };
    const fetchData4 = async() => {
      await fetch(`http://localhost:3131/countplace`)
      .then(response => response.json())
      .then(data => {
          setCount4(data.results[0].cntplace);
      })
      .catch(error => {
          console.error('Error fetching data: ', error);
      });
    };
    return (
        <div>
            <HeadAdmin/>
            <div className="bg-admin"></div>
            <div className="content-card">
                <div className="box-text">
                    <div className="column">
                        <a href="/AdminReq">
                        <span className="spanAdmin">{count}</span>
                        <h1 style={{position: 'relative', top: '35%', right: '15%', color: 'white', fontWeight: '100', fontSize: '24px'}}>Amount Request</h1>
                        <FontAwesomeIcon icon={faDochub} style={{fontSize: '70px', color: 'hsl(0, 0%, 100%, 0.2)', position: 'relative', left: '60%', top: '-0.5vh'}}/>
                        </a>
                    </div>
                    <div className="column">
                        <a href="/AdminComplain">
                        <span className="spanAdmin">{count2}</span>
                        <h1 style={{position: 'relative', top: '35%', right: '15%', color: 'white', fontWeight: '100', fontSize: '24px'}}>Complain Request</h1>
                        <FontAwesomeIcon icon={faUser} style={{fontSize: '70px', color: 'hsl(0, 0%, 100%, 0.2)', position: 'relative', left: '55%', top: '-0.5vh'}}/>
                        </a>
                    </div>

                    <div className="column">
                        <a href="/AdminTax">
                        <span className="spanAdmin">{count3}</span>
                        <h1 style={{position: 'relative', top: '35%', right: '27%', color: 'white', fontWeight: '100', fontSize: '24px'}}>Tax/Bill Request</h1>
                        <FontAwesomeIcon icon={faMoneyBillWave} style={{fontSize: '70px', color: 'hsl(0, 0%, 100%, 0.2)', position: 'relative', left: '55%', top: '-0.5vh'}}/>
                        </a>
                    </div>

                    <div className="column">
                        <a href="/AdminOrderPlace">
                        <span className="spanAdmin">{count4}</span>
                        <h1 style={{position: 'relative', top: '35%', right: '15%', color: 'white', fontWeight: '100', fontSize: '24px'}}>OrderPlace Request</h1>
                        <FontAwesomeIcon icon={faLocationDot} style={{fontSize: '70px', color: 'hsl(0, 0%, 100%, 0.2)', position: 'relative', left: '55%', top: '-0.5vh'}}/>
                        </a>
                    </div>

                </div>
            </div> 
        </div>
    );
}
export default AdminMain
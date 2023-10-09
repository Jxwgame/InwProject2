import React from "react";
import HeadAdmin from "./HeaderAdmin";
import { useState } from "react";
import '../pagesCss/RequestTable.css'

function RequestAdmin(){

    const [tableData, setTableData] = useState([]);
    
    const addRow = () => {
        const newRow = { Req_id: '123', Date: '2023-10-05', Req_Type: "Type", Describtion: "Description", Id_num: "x-xxxxxxxx-xxx-x" };
        setTableData([...tableData, newRow]);
    }

    const delRow = (index) => {
        const deleteRow = [...tableData];
        deleteRow.splice(index, 1);
        setTableData(deleteRow)
    }

    return (
        <div>
            <HeadAdmin/>
            <div style={{position: 'absolute', backgroundColor: 'white', width: '87%', height: '100%', left: '25vh', top: '10vh'}}>
                <h1 style={{textAlign: 'left', position: 'absolute', left: '10px', top: '10px', fontWeight: '200'}}>Request Table</h1>
                <div className="table" style={{overflowX: 'auto', overflowY: 'auto'}}>
                    <div className="headTable" style={{display: 'grid', gridTemplateColumns: '0.2fr 0.2fr 0.2fr 1fr 0.19fr'}}>
                        <div className="id" style={{width: 'auto', textAlign: 'center', fontSize: '20px', marginBottom: '1vh'}}>Req_id
                        </div>
                        <div className="date" style={{textAlign: 'center', fontSize: '20px', marginBottom: '1vh'}}> Date</div>
                        <div className="type" style={{textAlign: 'center', fontSize: '20px', marginBottom: '1vh'}}>Req_Type</div>
                        <div className="cont" style={{textAlign: 'center', fontSize: '20px', marginBottom: '1vh'}}>Describtion</div>
                        <div className="id num" style={{textAlign: 'center', fontSize: '20px', marginBottom: '1vh'}}>Id_num</div>
                    </div>

                    {tableData.map((row, index) => (
                        <div key={index} className="rowData" style={{display: 'grid', gridTemplateColumns: '0.2fr 0.2fr 0.2fr 1fr 0.19fr'}}>
                            <div className="id" style={{textAlign: 'center', fontSize: '20px', border: '1px solid black'}}>{row.Req_id}</div>
                            <div className="date" style={{textAlign: 'center', fontSize: '20px', border: '1px solid black'}}>{row.Date}</div>
                            <div className="type" style={{textAlign: 'center', fontSize: '20px', border: '1px solid black'}}>{row.Req_Type}</div>
                            <div className="cont" style={{textAlign: 'left', fontSize: '20px', border: '1px solid black', paddingLeft: '10px'}}>{row.Describtion}</div>
                            <div className="id num" style={{textAlign: 'center', fontSize: '20px', border: '1px solid black'}}>{row.Id_num}</div>
                        </div>
                    ))}

                </div>

                <button onClick={addRow}>Add Row</button>
                <button onClick={delRow}>DeleteRow</button>
            </div>
        </div>
    );
}
export default RequestAdmin

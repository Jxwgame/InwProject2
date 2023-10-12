import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
var jsonParser = bodyParser.json()
var app = express()

app.use(cors())

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'manager_1'
})

/* insert data reference
app.post('/register', jsonParser, function (req, res, next) {
  connection.execute(
    'INSERT INTO employee (department_id, emp_fname, emp_lname, emp_password, emp_tel) VALUES (?,?,?,?,?)',
    [req.body.department_id, req.body.emp_fname, req.body.emp_lname, req.body.emp_password, req.body.emp_tel],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', message: err })
        return
      }
      res.json({ status: 'ok' })
    }
  )
})
*/

//หน้า login
app.post('/login', jsonParser, function (req, res, next){
  connection.execute(
    'SELECT * FROM employee WHERE emp_fname=?',
    [req.body.emp_fname],
    function (err, employee, fields) {
      if (err) {res.json({ status: 'error', message: err }); return }
      if(employee.length == 0) {res.json({ status: 'error', message: 'no user found' }); return }
      if(req.body.emp_password == employee[0].emp_password){
        res.json({status: 'ok', message: 'login success'})
      }else{
        res.json({status: 'error', message: 'login failed'})
      }
    }
  )
})


//form request
//คำสั่งที่ใช้เทส postman api ==> "citizen_fname": "ปิยธานี",
                          // "citizen_lname": "สร้อยทอง",
                          // "citizen_id": "1114",
                          // "citizen_tel": "0917118771",
                          // "request_type": "แจ้งซ่อมไฟฟ้าสาธารณะ",
                          // "request_date": "2021/10/11",
                          // "request_desc": "ขอใช้ใจแลกเบอร์โทรได้ไหม",
                          // "request_image": "null"
app.post('/formreq', jsonParser, async function (req, res, next) {
  connection.execute(
    'SELECT * FROM citizen WHERE citizen_id = ?',
    [req.body.citizen_id],
    function(err, results) {
      if (err) {
        res.json({status: 'error', msg: err});
        return;
      }
      // ถ้ามี citizen_id อยู่แล้วในตาราง citizen
      if (results.length > 0) {
        connection.execute(
          'SELECT * FROM request_type WHERE request_type = ?',
          [req.body.request_type],
          function(err, results) {
            if (err) {
              res.json({status: 'error', msg: err});
              return;
            }
            if (results.length > 0) {
                connection.execute(
                  'INSERT INTO request (citizen_id, request_desc, request_image) VALUES(?,?,?)',
                  [req.body.citizen_id, req.body.request_desc, req.body.request_image],
                  function(err) {
                    if(err) {
                      res.json({status: 'error', msg: err});
                      return;
                    }
                    res.json({status: 'ok'});
                  }
                );
            }else{ //ในกรณีที่ request_type เป็นอื่นๆ
              connection.execute(
                //เพิ่มเซ็ตค่ากรณีอื่นๆ department_id = 6
                'INSERT INTO request (request_type, citizen_id, request_desc, request_image, department_id) VALUES(?,?,?,?,6)',
                [req.body.request_type, req.body.citizen_id, req.body.request_desc, req.body.request_image, department_id],
                function(err) {
                  if(err) {
                    res.json({status: 'error', msg: err});
                    return;
                  }
                  res.json({status: 'ok'});
                }
              );
            }
          })
      } else {
            connection.execute(
              'insert into citizen (citizen_fname, citizen_lname, citizen_id, citizen_tel) values(?,?,?,?)',//?,?,?,?,?,?,?,?
              [req.body.citizen_fname, req.body.citizen_lname, req.body.citizen_id, req.body.citizen_tel],
              function(err) {
                  if(err){
                      res.json({status: 'error', msg: err})
                      return
                  }else{
                    // connection.execute(
                    // 'insert into request (request_type, citizen_id, request_desc, request_image) values(?,?,?,?)',
                    // [req.body.request_type, req.body.citizen_id, req.body.request_desc, req.body.request_image],
                    // function(err) {
                    //   if(err){
                    //     res.json({status: 'error', msg: err})
                    //     return
                    //   }
                    //     res.json({status:'ok'})
                    // })
                    connection.execute(
                      'SELECT * FROM request_type WHERE request_type = ?',
                      [req.body.request_type],
                      function(err, results) {
                        if (err) {
                          res.json({status: 'error', msg: err});
                          return;
                        }
                        if (results.length > 0) {
                            connection.execute(
                              'INSERT INTO request (citizen_id, request_desc, request_image) VALUES(?,?,?)',
                              [req.body.citizen_id, req.body.request_desc, req.body.request_image],
                              function(err) {
                                if(err) {
                                  res.json({status: 'error', msg: err});
                                  return;
                                }
                                res.json({status: 'ok'});
                              }
                            );
                        }else{ //ในกรณีที่ request_type เป็นอื่นๆ
                          connection.execute(
                            //เพิ่มเซ็ตค่ากรณีอื่นๆ department_id = 6
                            'INSERT INTO request (request_type, citizen_id, request_desc, request_image, department_id) VALUES(?,?,?,?,6)',
                            [req.body.request_type, req.body.citizen_id, req.body.request_desc, req.body.request_image, department_id],
                            function(err) {
                              if(err) {
                                res.json({status: 'error', msg: err});
                                return;
                              }
                              res.json({status: 'ok'});
                            }
                          );
                        }
                      })
                  }
              }
            );
      }
    }
  )
})


//ฟอร์มร้องทุกข์ FormCon
app.post('/formcomplain', jsonParser, async function (req, res, next) {
  connection.execute(
    'SELECT * FROM department WHERE (department_name) = ?',
    [req.body.department_name],
function(err,results) {
      if(err){
        res.json({status: 'error', msg: err})
        return
      }
      if (results.length > 0) {
        const departmentID = results[0].department_id;
        connection.execute(
          'insert into complain (complain_desc, department_id) values(?,?)',
          [req.body.complain_desc, departmentID],
          function(err) {
            if(err){
              res.json({status: 'error', msg: err})
              return
            }
              res.json({status:'ok'})
          })
      }else{
        res.json({status: 'error', msg: 'ไม่พบหน่วยงาน'});
      }
    }
  )
})

//formTax
app.post('/formtax', jsonParser, async function (req, res, next) {
  connection.execute(
    'SELECT * FROM citizen WHERE citizen_id = ?',
    [req.body.citizen_id],
    function(err, results) {
      if (err) {
        res.json({status: 'error', msg: err});
        return;
      }
      if (results.length > 0) {
        connection.execute(
          'INSERT INTO tax (tax_id, tax_date, tax_type, tax_bill) VALUES(?,?,?,?)',
          [req.body.tax_id, req.body.tax_date, req.body.tax_type, req.body.tax_bill],
          function(err) {
            if(err) {
              res.json({status: 'error', msg: err});
              return;
            }
            res.json({status: 'ok'});
          }
        );
      } else {
            connection.execute(
              'insert into citizen (citizen_fname, citizen_lname, citizen_id, citizen_tel, house_id) values(?,?,?,?,?)',//?,?,?,?,?,?,?,?
              [req.body.citizen_fname, req.body.citizen_lname, req.body.citizen_id, req.body.citizen_tel, req.body.house_id],
              function(err) {
                  if(err){
                      res.json({status: 'error', msg: err})
                      return
                  }else{
                    connection.execute(
                      'INSERT INTO tax (tax_id, tax_date, tax_type, tax_bill) VALUES(?,?,?,?)',
                      [req.body.tax_id, req.body.tax_date, req.body.tax_type, req.body.tax_bill],
                      function(err) {
                        if(err) {
                          res.json({status: 'error', msg: err});
                          return;
                        }
                        res.json({status: 'ok'});
                      }
                    )
                  }
              }
            );
      }
    }
  )
})

//form order place
app.post('/formplace', jsonParser, async function (req, res, next) {
  await connection.execute(
    'SELECT * FROM citizen WHERE citizen_id = ?',
    [req.body.citizen_id],
    function(err, results) {
      if (err) {
        res.json({status: 'error', msg: err});
        return;
      }
      if (results.length > 0) { //เจอว่ามีบัตรปชชซ้ำ
        const citizenID = results[0].citizen_id;
        connection.execute(
          'SELECT * FROM public_buildings WHERE building_name = ?',
          [req.body.building_name],
          function(err, results) {
            if (err) {
              res.json({status: 'error', msg: err});
              return;
            }
            if (results.length > 0) { //เจอว่ามีสถานที่ตามที่กำหนด
              const buildingID = results[0].building_id;
              connection.execute(
                'INSERT INTO booking (booking_date, booking_desc, citizen_id, building_id) VALUES(?,?,?,?)',
                [req.body.booking_date, req.body.booking_desc, citizenID, buildingID],
                function(err) {
                  if(err) {
                    res.json({status: 'error', msg: err});
                    return;
                  }
                  res.json({status: 'ok'});
                }
              );
            } else {
              res.json({status: 'error', msg: 'ไม่พบสถานที่'});
            }
          }
        )
      } else { //ไม่เจอบัตรปชชซ้ำ (คนใหม่)
        connection.execute(
          'insert into citizen (citizen_fname, citizen_lname, citizen_id, citizen_tel) values(?,?,?,?)',//?,?,?,?,?,?,?,?
          [req.body.citizen_fname, req.body.citizen_lname, req.body.citizen_id, req.body.citizen_tel],
          function(err) {
              if(err){
                  res.json({status: 'error', msg: err})
                  return
              }else{
                connection.execute(
                  'SELECT * FROM public_buildings WHERE building_name = ?',
                  [req.body.building_name],
                  function(err, results) {
                    if (err) {
                      res.json({status: 'error', msg: err});
                      return;
                    }
                    if (results.length > 0) { //เจอว่ามีสถานที่ตามที่กำหนด
                      const buildingID = results[0].building_id;
                      connection.execute(
                        'INSERT INTO booking (booking_date, booking_desc, citizen_id, building_id) VALUES(?,?,?,?)',
                        [req.body.booking_date, req.body.booking_desc, req.body.citizen_id, buildingID],
                        function(err) {
                          if(err) {
                            res.json({status: 'error', msg: err});
                            return;
                          }
                          res.json({status: 'ok'});
                        }
                      );
                    } else {
                      res.json({status: 'error', msg: 'ไม่พบสถานที่'});
                      }
                  }
                )
              }
            }
          );
        }
      }
    )
  }
)


app.listen(3131, function () {
  console.log('CORS-enabled web server listening on port 3131')
})
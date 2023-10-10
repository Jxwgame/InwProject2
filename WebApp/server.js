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
  database: 'mydb'
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

//request test
app.post('/formreq', jsonParser, async function (req, res, next) {
  connection.execute(
    'insert into reqtest (fname, lname, ci_id, mail, tel, text, image, text2) values(?,?,?,?,?,?,?,?)',
    [req.body.fname, req.body.lname, req.body.ci_id, req.body.mail, req.body.tel, req.body.text, req.body.image, req.body.text2],
    function(err) {
        if(err){
            res.json({status: 'error', msg: err})
            return
        }
        res.json({status:'ok'})
    }
  );
})

app.listen(3131, function () {
  console.log('CORS-enabled web server listening on port 3131')
})
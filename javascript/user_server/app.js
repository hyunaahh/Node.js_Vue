require('dotenv').config({path:'./db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit:'50mb'
}));

app.listen(3000, ()=>{
    console.log('server start!');
})

//전체조회
app.get('/users', async(req, res)=>{
    let list = await mysql.query('userList');
    res.send(list);
})


//단건조회
app.get('/users/:user_id', async(req, res)=>{
    let data = req.params.user_id;
    let list = await mysql.query('userInfo', data);
    res.send(list[0]);
})

//등록
app.post('/users', async(req, res)=>{
    let data = req.body.param;
    let result = await mysql.query('userInsert', data);
    res.send(result);
})

// 수정
app.put('/users/:user_id', async(req, res)=>{
    let datas = [req.body.param, req.params.user_id];
    let result = await mysql.query('userUpdate', datas);
    res.send(result);
})

//삭제
app.delete('/users/:user_id', async(req, res) => {
    let data = req.params.user_id;
    let result = await mysql.query('userDelete', data);
    res.send(result);
})


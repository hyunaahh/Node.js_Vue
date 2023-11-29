// 서버
require('dotenv').config({path :'./db/mysql.env'}) // 여기가 메인이니까 일로왔음 
const express = require('express');
const app = express(); //서버역할해줄 instance 생성
const mysql = require('./db.js'); //db파일 불러오기~ => module



app.use(express.json({
    limit : '50mb' // 넘어오는 데이터 양 제한걸기
}));

//실행 : listen 콜백함수라 위치 크게 상관없음
app.listen(3000, ()=>{
    console.log('server start');
})


//라우팅 
    //db와 연결이 필요한 곳에서 어떤 쿼리문 실행할건지 알려주면 됨
    //db.js에 있는 const query 함수 불러온거임.
    //Rest방식 -> 경로 통일! 

//전체조회
app.get('/customers', async(req, res) =>{
    let list = await mysql.query('customerList');
    res.send(list); // 목록조회
});

//단건조회
app.get('/customers/:id', async(req, res)=>{
    let data = req.params.id;
    let result = await mysql.query('customerInfo', data);
    res.send(result[0]); //select 절에 대한 결과는 1건이든 n건이든 배열로 돌아오니까! 제한을 걸어주는게 좋음 => 한건! 객체로넘어오는구나 인식
})


//등록 : set - 객체! 
app.post('/customers', async(req, res)=>{
    let data = req.body.param; //post로 오면 request의 body로 접근! > param(필드)으로 넘어온 key값으로 넘어옴
    let result = await mysql.query('customerInsert', data);
    res.send(result);
});

//수정 - 경로에 수정하고자하는 값 들어오니깐 => 넘겨주는 data : 배열 필요(sql에서 ?가 2개이상), set절 ?에는 객체요구(컬럼), id=?일때 어느컬럼이랑 매칭되는지는 쿼리문에 잇으니까
app.put('/customers/:id', async(req, res)=>{
    let datas = [req.body.param, req.params.id];  //req객체가 이미 갖고 있는 body(post, put에서 사용), params(경로에오는건 params가 처리)
    let result = await mysql.query('customerUpdate', datas);
    res.send(result);
})

//삭제 - put이랑 같은 방식! 객체가 아니어도 되는 이유는 id라고 정해져있으니까. 딱히 set 없음
app.delete('/customers/:id', async(req, res)=> {

    let data = req.params.id; //body에는 없는 data니까!
    let result = await mysql.query('customerDelete', data);
    res.send(result);
})

    // 포스트맨으로 했었음
const express = require('express');
const app = express();

const getData = async() => {
    return await fetch('./db.json')
    .then(result => result.json())
    .then()
}

let db = getData();

//라우팅 등록 app.메소드(경로, 경로통해요청들어올떄어떻게대응처리할지 handler-req,res => 선언) 
app.get('/',(req, res)=>{
    res.send('Server Connect'); // 사용자쪽에 응답보내기~
});

app.get('/posts', (req,res)=> {
    res.send(db['posts']);
})







//서버 동작시키기(포트번호지정, ) 
    //*ip 이런 건 다 고정이고, 포트는 내가 결정 가능. 다른프로그램이 사용하지않는 포트로.. 한프로그램에하나만..  
app.listen(3000, ()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000'); //포트번호 3000으로 줬다ㅕㅁㄴ 경로도 이렇게 될걸..
});
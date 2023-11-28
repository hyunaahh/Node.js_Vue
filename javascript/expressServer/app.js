const fs = require('fs'); 
const express = require('express');

    const userRouter = require('./user.js'); //라우터 - 경로기반 해당파일 지정 

const app = express();

    app.use('/user', userRouter); //use 메소드 기반 - 라우터 전체 도메인 모아줌. 라우터 등록! 각 라우터 별로 도메인 등록해야함. use는 라우팅이랑은 관련 x
    app.use('/public', express.static('image')); // 정적 , expressserver 안에 image폴더라서 이래적음. images대신에 pulic을 쓰는거
    //직접적으로 error 다루고자한다면 따로 function 등록해야함! - 에러 처리하기~
    app.use(function(err, req, res, next){
        res.status(500).json({statusCode: res.statusCode, errMessage : err.message }) // 500에러 => 제이슨으로 보냄 .statusCode는 500이됨.
    });

    app.get('/error',(req,res,next)=> {
        next(new Error('Process Fail Check Data!'));
    })

const jsonFile = fs.readFileSync('db.json'); 
const jsonData = JSON.parse(jsonFile); 

//전체조회 : select문 역할 하는 거! => 사용자가 요청한 data 돌려줌
    //where이 null or 값 o : 상관 x . if문 기반 제한된 조건안에서 값  반환.
const getData = (target, where) => {
    let data = jsonData[target]; //target: post(배열), comments(배열), profile - key값!
    if(Array.isArray(data)){ //profile은 배열이 아니므로(object임) for~of에서 동작 x . => 배열인지 아닌지 check 하기 위해서 있는 for문!
        let list = data;
        for(let obj of list){
            data = obj;
        }
    }
    return data;
}


let db = getData();


//라우팅 등록 app.메소드(경로, 경로통해요청들어올떄어떻게대응처리할지 handler-req,res => 선언) 
app.get('/',(req, res)=>{
    res.send('Server Connect'); // 사용자쪽에 응답보내기~
});


app.get('/posts', (req, res) => {
    let data = getData('posts'); //getData(지금 조회하고자하는 대상값)
    res.send(data);

})

//콜론 기반 해당위치의 무슨 변수로 받는지 선언하는 거! '/~/:경로에 붙어서 넘어오는 값! '
app.get('/posts/:id',(req, res)=>{
    let data = getData('posts', req.params.id) //req.body(바디라는 필드로 접근), 바디 외 쿼리스트링이나 경로에는 req.params이용해서 해당 변수값  가져옴
    res.json(data);
})


 // comments : 배열   - id라는 조건 걸 수 있음! 
app.get('/comments', (req, res) => {
    let data = getData('comments');
    res.send(data);
})

app.get('/comments/:id', (req, res) => {
    let data = getData('comments', req.params.id);
    res.send(data);
})

//profile : 배열 x 객체 하나임! - 조건 걸 수 X
app.get('/profile', (req, res) => {
    let data = getData('profile');
    res.send(data);
})


//라우트(route) - 하나의 경로에 대해서 한꺼번에 각 메소드에 따른 개별적인 경로처리! (매번 이방식 쓰진 말쟈.. , 필요에 따라서 n가지만 쓸 수도 있고.. )
app.route('/emps')
    .get((req, res)=>{
        res.send('사원 전체조회')
    })
    .post((req, res)=>{
        res.send('사원 등록')
    })
    .put((req, res)=>{
        res.send('사원 수정')
    })
    .delete((req, res)=>{
        res.send('사원 삭제')
    })





//서버 동작시키기(포트번호지정, ) 
    //*ip 이런 건 다 고정이고, 포트는 내가 결정 가능. 다른프로그램이 사용하지않는 포트로.. 한프로그램에하나만..  
app.listen(3000, ()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000'); //포트번호 3000으로 줬다ㅕㅁㄴ 경로도 이렇게 될걸..
});
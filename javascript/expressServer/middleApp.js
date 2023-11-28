//서버
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();

//미들웨어(내장)
    //parser : body가 가진 거 적절하게 변환해주는 작업
    //content-type이 뭐냐에따라서 parser 다름 => 적절하게 parser등록되면 알아서함

// application/www-form-urlencoded : 기본으로 사용하는 content-type
const defaultParser = express.urlencoded({extended : false }); 
// application/json
const jsonParser = express.json(); 

app.use(defaultParser); //경로상관없이 해당 서버가 갖고있는 모든 라우터에 적용

//1번 (* post니까 body)
app.post('/info', (req, res)=> {
    res.send('welcome, ' + req.body.name); 
})

//2번 = 라우터별로 등록 : 미들웨어 순서 다양하게 조합 가능.
app.post('/message', jsonParser, (req, res)=>{
    res.send('MSG,' + req.body.message); 
})

        //name, message : 보낼 떄 어떤 이름으로 보낼지 내가 결정하는거~ 




//실행시키기!
app.listen(5000, ()=> {
    console.log('server start!');
})

//get없으니까 브라우저로 접근못해서 boomerang으로 할거임~

// 세션이 가진 정보 객체(Express-session) 기반으로 해서 설정함! - 위에 require session한거 그거.
let sessionSetting = session({
    secret : 'secret key',  //session사용 -암호화할 때 쓰이는 기본 키 (필수로 줘야됨 아무값이나 가능.)
    resave : false,  //새로 저장하는부분에서 변경사항이 없어도 다시 저장할건지 말건지 
    saveUninitialized : true,  //저장소에 강제로 값 저장할건지 말건지
    cookie : {
        httpOnly : true,  // true : 해당쿠키정보 js에서 사용 불가. 통신 상으로만 접근! 
        secure : false,  // true: client 쪽에서 https (http x)에서만 정보 주고받을 수 있도록 보안 ↑
        maxAge : 60000 // 쿠키 유지기간
    }
});
//위에서 만들어진 정보 use 이용해서 넣어줌
app.use(sessionSetting);




//cors: 서버에 대해서 설정하기 - 접속할 도메인, 오리진 허용하는 거 => 외부랑 데이터 주고받는 경우 多
const corsOptions = {
    origin : 'http://192.168.0.46:5500',  //같은 pc라도 포트 다르면 다른걸로 인식 (cmd : ipconfig), origin : page쪽 주소
    optionsSuccessStatus : 200  // 레거시브라우저! - 최신버전말고 이미 오래된 브라우저에서 인식할 떄 상태코드 변경해서 인식할 수 있도록 설정해주는거. 
}

app.use(cors(corsOptions));




app.get('/', (req, res)=>{
    res.send(req.session); //session정보 확인하고자할땐 request! 
});

//정보 넣으려면 => 저장! (post는 브라우저에서 안됨 포스트맨으로 가라~ )
app.post('/login', (req,res)=>{
    const {id, pwd } = req.body;
    req.session.user = id;  // session.id 금지! 고유값(session이 가진 id값) 건드려서 오류난당.. 
    req.session.pwd = pwd;
    //save 메소드로 저장! 
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/'); // redirect 메인으로 넘어가게 처리했음
    })
})

//삭제! 
app.get('/logout', (req,res)=>{
    req.session.destroy(); // destroy : 종료!  객체 삭제할때 사용 - session 정보 삭제!
    req.redirect('/');
})



const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

// -- npm install multer

//multer는  저장소 만들어줘야함! 
//해당폴더는 미리 있어야함 > 폴더 :uploads 생성! 
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'uploads/'); //어떤경로로 처리할건지
    },
    //file기반으로 해서 랜덤값 + 사용자가준원래파일이름
    filename : function(req, file, cb){
        //사용자가 등록한 파일명은 중복가능성↑ -> 유니크한 랜덤값(날짜로 준거뿐임 or 시간, 아예 랜덤) 주기 - 그 이름 그대로 사용안하려고하는거임
        cb(null, new Date().valueOf() + path.basename(file.originalname) ) 
    }
});

//이 정보 갖고 있는 multer 인스턴스 만드는 법! 
const upload = multer({storage : storage});

//파일 업로드 - single(단일 - 어떤이름으로받을지만), array(여러건 - 이름,최대크기제한)
//html : input name = 'avatar' 됨! 이름 정확히 매칭되어야 끌고온다. ★enctype="multipart/form-data" - multipart : 멀티미디어같은경우 힘드니까 걍 보내버림. 파일별도인코딩x 그대로 보냄
app.post('/profile', upload.single('avatar'), (req, res)=>{
    console.log(req.file); //middelware가 돌아서 파일을 분리시킴. body에 같이 없음,  single :file / array: files
    console.log(req.body); // 그 외 텍스트값이나 나머지값은 body 기반으로 따로 접근해야함.
});

app.post('/photos', upload.array('photos',12),(req, res)=>{
    for(let file of req.files){
        console.log(file);
    }
})


//실행
app.listen(5000, ()=>{
    console.log('server start!');
})

//multer.html
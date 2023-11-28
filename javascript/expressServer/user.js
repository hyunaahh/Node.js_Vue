const express = require('express');
const router = express.Router(); //조각화시킨거.. blog 하나에 파일 쫘라락 . mail 

//라우터에 등록하고자하는 data 추가~ 추가~ : router 별도 구분 => 특정 기능에 따라 구분.
router.get('/',( req, res)=>{
    res.send('회원정보조회');
});

router.post('/', ( req, res)=>{
    res.send('회원 등록');
});

router.put('/', ( req, res)=>{
    res.send('회원 정보 수정');
});

router.delete('/', ( req, res)=>{
    res.send('회원 삭제');
});



module.exports = router; // 해당파일의 끝! 이 뒤에 코드 들어가면 안됨! (return,반환 하는 부분 - 이거 필요함! 처음에 먼저 쓰는거 추천~) 


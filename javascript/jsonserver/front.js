//터미널 하나 더 새로 열기! 

//■ Rest방식

//전체조회 - post (fetch는 get 기반으로 하니까... )
fetch('http://localhost:3000/posts')
.then(res => res.json())
.then(data => console.log('list', data))
.catch(err => console.log(err));

//단건조회 - /기준으로 내가 조회하고자하는 대상의 정보 넘겨주면 됨. rest는 ?물음표 가 빠진당..(ex. id, title 이런거 다 빠지고)
fetch('http://localhost:3000/posts/1')
.then(res => res.json())
.then(data => console.log('info', data))
.catch(err => console.log(err));

//**등록 
// fetch('http://localhost:3000/posts',{
//     method: 'post',
//     headers : {
//         'content-type' : 'application/json' // 정해진값! 통신규약임.
//     },
//     //stringify에 객체로 데이터 집어넣음 - 내가가진 객체를 json 타입으로 변환! JSON.stringify 얘랑 컨텐트타입 ~~~ .json이랑 같이 움직이는거임.
//     body : JSON.stringify({
//         userId:2,
//         id:4,
//         title : 'have a nice day',
//         body :  'reprehenderit molestiae ut ut quas totam\n' +
//         'nostrum rerum est autem sunt rem eveniet architecto'
//     })
// })
// .then(res => res.json())
// .then(result => console.log('insert', result));

//수정 : 단건조회+등록 결합형태. 경로& body 에 수정하고자하는 대상 적어줘야함. method는 put!
fetch('http://localhost:3000/posts/4',{
    method: 'put',
    headers : {
        'content-type' : 'application/json' // 정해진값! 통신규약임.
    },
    //stringify에 객체로 데이터 집어넣음 - 내가가진 객체를 json 타입으로 변환! JSON.stringify 얘랑 컨텐트타입 ~~~ .json이랑 같이 움직이는거임.
    body : JSON.stringify({
        userId:3,
        id:4,
        title : 'Hello, World',
        body :  'reprehenderit molestiae ut ut quas totam\n' +
        'nostrum rerum est autem sunt rem eveniet architecto'
    })
})
.then(res => res.json())
.then(result => console.log('update', result));


//삭제 : body 없당..
fetch('http://localhost:3000/posts/4',{
    method : 'delete'
})
.then(res => res.json())
.then(result => console.log('delete', result));


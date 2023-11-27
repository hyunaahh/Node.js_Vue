const fs = require('fs');

const data = ' Hello, world! ';
// Sync : 동기식으로 해당 파일의 데이터를 쓰겠다.
fs.writeFileSync('./sample.txt', data, 'utf8');

//위에꺼 비동기방식으로!  동기화하지않고 처리하는 방법
// fs.writeFile('./sampe.txt', data, 'utf8', (err)=>{
//     if(err){
//         throw err;
//      }
//     console.log('파일쓰기 완료! ')
// });





//비동기 - 순서보장x
fs.readFile('./sample.txt', 'utf8', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
})



//한글다루는 인코딩기준 utf8.. 인코딩중요하당..... 
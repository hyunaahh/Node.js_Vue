const mysql = require('mysql'); //모듈불러와서 접근
const sql = require('./db/sql.js'); 
//require('dotenv').config({path :'./db/mysql.env'}) //변수사용x. 환경변수(process.env-node내장객체)에 내가 사용하고자 하는 변수 등록하게함 > main이 되는 app.js로 옮겼음! 

//connection pool : for 안정적 통신! => 실제로 사용하기 전(=sql문 사용 전)에 db에 대한 정보 들고 서버가 db와 통신 시도 > 응답오면 길 여러개 미리 뚫어놓음(예약해놓는.. )
// 코드내부에선 계정정보 open X = > 분리시켜야됨
//process 도는 동안만 유효
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST, //localhost or 127 ~~~ 
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,  //어느 db의 테이블인지에 대한 정보
    connectionLimit: process.env.MYSQL_LIMIT  //connection 최대 몇개?! -적절하게 설정해줘라
})



//전달하는 메소드
//pool.query('sql문(?사용가능)', '(조건(?)이 있을 경우)값', (callback함수: 에러메세지err, 쿼리문실행결과result))의 return이 실질적 결과.


//db는 외부니까 통신하려면 promise 사용(비동기)
//alias 필드 지정 - sql안에 어떤 쿼리문 불러올지 알려줌. values가 없는 이유는 지금 전체조회니까 따로 값(value ) 줄게 없었음
//query는 callback함수로 처리하니까. -> promise로 다라라락 처리
//alias라는 변수를 기반으로 (동적으로 필드값을 넘겨줄수 있으니까) 객체한테 전달하는거라서 [alias] 이렇게! 
const query = async(alias, values) => {
    return new Promise((resolve, reject) => {
         pool.query(sql[alias], values, (err, results)=>{
            if(err){
                console.log(err);
                reject({err}); //promise의 결과에 대한 처리
            }else{
                resolve(results); //promise의 결과에 대한 처리 
            }
        })
    })
};

const getData = async()=>{
    console.log(await query('customerList'));
};

getData();


module.exports = {
    query
}
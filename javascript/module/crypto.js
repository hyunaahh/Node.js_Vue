const crypto = require('crypto'); // 크립토 외부라이브러리라서 require로 불러옴 
const data = 'pw1234';

//1. 일반적 방법
//동일데이터지만 다르게 나옴... ㅇㅅㅇ 표현하는 진수가 달라서.. 
let encData = crypto.createHash('sha512') 
                    .update(data) //update(원본데이터)
                    .digest('base64'); // digest : 64진수 - 표현방식 
console.log(encData);


encData = crypto.createHash('sha512')
                .update(data)
                .digest('hex'); // hex:16진수
console.log(encData);






//2. salting
// byte  단위의 랜덤 바이트 
const createSalt = () => {
    return new Promise((resolve, reject)=>{
        crypto.randomBytes(64, (err, buf) => {   // 64바이트 단위의 랜덤 값 만들어냄. 
            if(err) reject(err) ;
            resolve (buf.toString('base64'));   // base64: 인코딩기준
        })
    })
}

const createCryptoPassword = async (plainPassword) => {
    const salt = await createSalt(); //salt 역할 해줄 data 생성

    // 이를 기반으로 암호화 작업 - pbkdf2 메소드사용 : 몇번 반복시켜서 값 틀어버렸음 이거써서.. 
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err, key)=>{
            if(err) reject(err)
            resolve({password : key.toString("base64"), salt})
        }) 
    })
}

const cryptoPassword = async() => {
    encData = await createCryptoPassword(data);
    console.log(encData);
}


//함수 실행하기! 
cryptoPassword();
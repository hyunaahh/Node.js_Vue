// 함수 선언식- 외부라이브러리에서 사용, 선언 위치 상관없이 어디서든 자유롭게 사용. 밑에 배치되어야.. 언제든 덮어쓸 수 있음.
function hello(name){
 return "hello, " + name;
}

let arrHello = (name) => {return "Hello," + name;}
//매개변수 하나면 괄호도 뻄, 실행코드가 return 한줄이면 이렇게 생략 가능.!
arrHello = name => "Hello," + name;



//함수 표현식 - const 기반 진행. 많이 씀. 해당함수가 사용되기 전에 선언되어야 함. 위쪽에 배치돼야.. => 매개변수로 함수 그 자체 넘겨줄 수있음.
const message = function(msg){
    return "msg " + msg;
}

function hello(msg){
    return "msg, hello : " + msg;
}

console.log(hello("world"));

let arrMessage = (msg) => {return "msg : " + msg;}
arrMessage = msg => "msg : " + msg;
//매개변수 없거나 두개이상일 떄 () 필요함, 실행하는것 하나 아니면 역시 {}필요! 
arrMessage = () => {
    let today = new Date().getDay();
    console.log("오늘 날짜 ", today)
}
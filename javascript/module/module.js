// 본격적으로 프로세스작성전에 require 선언하기! 
// 상대경로방식(자바랑 다름!) : ./ (같은 폴더or 프로젝트 안에 있는 파일일때!),  ../(상위폴더일 때)

//내부 존재하는 것 중에  특정 대상만 불러왔음(5개 중에 2가지만 쓴 상태임). require은 무조건 객체가 반환됨. => " objectDestructing! " 
const { add, minus } = require('./calculator'); 
console.log(add(10,25));
console.log(minus(25,3));

const process = require('process');

console.log(process.env); 

//★env(환경변수) : 객체 

//key값으로.. 가져오면 됨 : .key값
console.log(process.env.JAVA_HOME); 

const os = require('os'); //function(함수) 형태로 많이 갖고 있음. = > 추출해야해서.. 
console.log(os);
console.log(os.cpus()); // 'cpu 코어 정보' 호출
console.log(os.tmpdir());  // 임시저장경로 
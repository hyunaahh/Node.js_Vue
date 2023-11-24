let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDay();

// `: 줄바꿈 허용! => 내부 줄바꿈 표현시 줄바꿈허용 (*jsp에선 XX)
let msg = `${year}년 
${month}월
${day}일`;

console.log(msg);


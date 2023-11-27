const path = require('path'); //내장이니까 require로 가져옴

console.log('== 절대경로');
console.log(__filename); //☆ 파일 절대경로
console.log(__dirname); //폴더 절대 경로
console.log(path.dirname(__filename)); //위에꺼랑 같은 결과 나옴
console.log('실제파일명 : %s', path.basename(__filename)); //파일자체에 대한 정보만 원한다면 basename 사용 - 마지막경로에 대한 정보 반환(파일명)
console.log('확장자 :', path.extname(__filename)); //확장자 정보


let pathList = process.env.PATH.split(path.delimiter); //PATH:여러개값 하나문자여로 인식=> split으로 잘라냈음 (PATH가 가진 변수 기반으로)
console.log(path.delimiter, pathList);
console.log('');
console.log(path.sep, pathList[0].split(path.sep)); // 실제경로sep가 갖고 있음. 하나의 경로 기반으로 잘라본거임.
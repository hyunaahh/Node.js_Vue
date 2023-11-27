const defaultNum = 1;

function add(num1, num2){
    return num1 + num2;
}

function minus(num1, num2){
    return num1 - num2;
}

function multi(num1, num2){
    return num1 * num2;
}


function divide(num1, num2){
    return num1 / num2;
}



//exports : 내보내고자하는 형태를 "객체"형태로 정의함. 파일안의 모든 대상 or 특정대상 내보냄 or 외부내부함수 구분하기도 함.
// key가 변수명이랑 같을 땐 굳이 두번 key:value 안쓰고 하나로 묶어서 씀! (divide : divide)

// 'require' 로 받음! : module.exports = {}
module.exports = {
    defaultNum,
    add,
    minus,
    multi,
    divide 
}


// 'import' 로 받음! : export default {}
// export default {

// }
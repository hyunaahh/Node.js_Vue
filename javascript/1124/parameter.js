//최소한의 기능 (기본값으로) 보장! : Default function paramter

function printMsg(msg='메세지입력해', to = ''){
    console.log(msg);
}

printMsg('Have a Nice day');
printMsg();
printMsg(null);
printMsg(''); 



//Rest Parameter - 사용자가 몇개 넣을지 모르니까 그만큼 매개변수 만들수 없음 -> 나머지연산자로 한꺼번에 담을 수 있따. 배열형태로! 
//나머지 연산자에서 for of 많이 씀 
function sum(x, y, ...args){
    let result = x+y;
    console.log(args.length);
    for(let num of args){
        result += num
    }
    return result;
}
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
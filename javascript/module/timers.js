const timeout = setTimeout(()=>{
    let today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth()+1)).slice(-2);
    let day = ('0' + today.getDay()).slice(-2);
    console.log(`${year}년 ${month}월 ${day}일`);
}, 1000);

let count = 0;
const interval = setInterval(()=>{
    console.log('interval %d', count++);
    if(count == 5 ){
    clearInterval(interval); // 밖에서 사용해도 상관 x. interval 중지시킴 ! clear-
    }
}, 1000)

//setImmediate는 콜백함수니까.. 밖에 있는게 먼저 나오고 안에 있는게 나옴. 진짜 즉시실행대상이 아니라는거 주의하기! (콜백함수들 중에서는 우선순위 but 보장 x)
const immediate = setImmediate(()=>{
    console.log('즉시 실행 요청');
})
console.log('마지막 코드');

//큐(Queue) : 선입선출..먼저드간애가 먼저 나옴.! 
//이벤트루프 - parse
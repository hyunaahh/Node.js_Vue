//특정 값 초기값(-1000)주는 것도 가능. num에 차례로 숫자 들어옴
let nums = [50, 15, 39, 555, 6, 804];
let total = nums.reduce((sum, num)=> {
    return sum + num;
},-1000);

console.log(total);
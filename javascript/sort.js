//문자일떈 걍 sort
let names = ["Hong", "Kang", "Adward", "Lee"];
names.sort(); // 알파벳 기준 오름차순으로! 
console.log(names);
names.reverse(); // 내림차순
console.log(names);

//숫자일땐 콜백함수로 해줘야 제대로됨 a-b>0 안바뀌고 a-b<0 일때 바뀜
let nums = [40, 100, 1, 5, 25, 10];
nums.sort(); // 콘솔-  기준이 unicode라서 : [ 1, 10, 100, 25, 40, 5 ] = > 따라서 배열 값이 문자가 아니면 별도로 해줘야됨.
console.log(nums);
//순환하면서 계속 값 비교중.. 
nums.sort((a,b)=> {
    return a-b;
})
console.log(nums);


nums.reverse();
console.log(nums); // 콘솔 : [ 5, 40, 25, 100, 10, 1 ]


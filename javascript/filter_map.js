let words = ['spray', 'limit', 'elite','exuberant', 'paresent'];

//이렇게 확인 해보기! 콜백함수뭘가져오는지 모르겠다면 요렇게
let rlt = words.filter(function(a,b,c,d){
    console.log(a,b,c,d);
    })


let result = words.filter(function(word, idx, ary){
        return word.length > 6;
        })
    
console.log(result);
console.log(words, result); //filter는 원본데이터를 살려둔다! vs sort는 원본 데이터를 변경함.



//map - 배열길이자체는 유지! (filter은 x) 배열 구성하는 값들(id, name)이 변경됨.
let users = [
    {
        id : 100, 
        name : 'Hong',
    },
    {
        id : 200, 
        name : 'Kang',
    },
    {
        id : 300, 
        name : 'Lee',
    }
    
]

//기존데이터에 추가안하고 새로운 객체 만드는 이유 : 객체는 복사(동일한형태 내부 값 복사) 개념x
//return 되는 대상을 따로 모으는게 map 
//기존 객체값에 값을 넣어버리면 원본 데이터가 변경되어버림! 그래서 주의해라.. 

result = users.map(function(user){
return{
    id : user.id,
    name : user.name,
    grade : user.id == 200?'VIP' : '일반'
    }
});

console.log(users, result);


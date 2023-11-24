//destructure, destructing (구조분해할당) **영어로 기억하기!
let obj ={
    id: 100,
    name: "hong",
    birth : "1999-12-25"
}

//이름만 필요하다면 - 변수선언 : 특정객체(obj)에 있는 해당 이름의 property(name) *let {중괄호} = 객체값 
let { id,name, age } = obj;
console.log(id, name, age);



    // 외부에서 특정 module 불러오기 위한 문법ㅇ로.. 
    module.export = {
        object:{},
        method : function(){}
    }

    let {object, method} = module;


//배열은 변수가 없고 인덱스만 있으니까 변수는 알아서걍 정하면 됨,  인덱스순서대로 값이 부여됨!! ** let [대괄호] = 배열
//nice 건너뛰고 monday 못 받음. 순서 잘 기억하고 사용해야한다
let array = ['Hello', 'Nice', 'Monday'];
let [x, y] = array;
console.log(x,y);

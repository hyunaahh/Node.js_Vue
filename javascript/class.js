class Human {

        //필드, 생성자, 메소드 - java 
        //let ssn; let name; let age

    //js : 생성자 내부에서 필드 생성
    //_ 붙이면 암묵적으로 숨겨진 필드라고 생각해달라는거.. 건들지말라고 
    constructor(){
        this._ssn;
        this._name='Hong';
        this._age;
    }


    //필드의 권한에 따라 getter, setter 추가 - get과 set은 하나의 기능을 가짐.
    //자유롭게 읽고 쓸려면 get, set 설정
    //get : 필드에 readonly를 걸어버림. => get 필드명(){}
    set ssn(ssn){
        this._ssn = ssn;
    }

    get ssn(){
        return this._ssn;
    }

    set name(name){
        this._name = name;
    }


    get name(){
        return this._name;
    }

    set age(age){
        this._age = age;
    }


    get age(){
        return this._age;
    }


    //메소드 - function 뺴고
    getInfo(){
        console.log(this._ssn, this._name, this._age);
    }

}

let hu = new Human();
hu.ssn = '990520';
hu.name = 'Kang';
hu.age = 25;

hu.getInfo();
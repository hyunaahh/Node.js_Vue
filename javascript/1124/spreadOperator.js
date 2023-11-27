let array = [1,2,3];
let string = "Hello";
//[1,2,3,"H","e","l","l","o"] 하나씩 끄집어내서 하나로만들기
    //let newArray = [];
    //이렇게도 가능은 하지만... 
    // for(let value of array){
    //     newArray.push(value);
    // }

    // for(let value of string){
    //     newArray.push(value);
    // }

    // console.log(newArray);

//펼침연산자! ... 붙이면 내부값을 개별적으로 
let newArray2 = [array, ...string];
console.log(newArray2);

let newArray = [...array, ...string];
console.log(newArray);
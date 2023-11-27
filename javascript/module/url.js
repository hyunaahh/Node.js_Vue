const url = require('url');

let legercy = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(legercy); // **query = 단순문자열... 로 나옴.. 



//url 클래스 만드는 방법도 있음.. (요걸로 기억해.. )
let whatwg = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(whatwg);
console.log(whatwg.searchParams); //**searchParams : s내부값 꺼낼때 편하게 작업 가능.. 기본제공data 많다.. 
console.log(whatwg.searchParams.get('query'));
function webServerConnect(){
   return fetch('https://jsonplaceholder.typicode.com/posts/1',{
        headers : {
            'Cache-Control' : 'no-cache'
        }
})
.then(response => response.json()) 

}


//await 쓰려면 바깥에 async(비동기작업임을 알려줌) 써줘야 함 ! (**await 지우고 함 콘솔 찍어보고 차이 보기! )
async function getJSONData(){
    const result = await webServerConnect();
   console.log(result);
}
getJSONData();
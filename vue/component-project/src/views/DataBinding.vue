<template>
    <div>
        <h1> {{ title + '!!!' }} </h1> <!-- template 문법: 태그 사이에 이중 중괄호 쓰면 {{ javascript 영역이 된다! }, 가벼운 연산 표기 하기 좋음-->
        <h2 v-bind:name="'sample'" v-text="title" /> <!-- v-text 속성(단방향)에 접근하는 고유 directive , property랑 연관시키는 거에서 끝! // 나머지 속성은 v-bind:name="''" -->
        <p v-html = "tagList"/> <!-- html tag 직접 제어하는 v-html : tag(<strong>)인식하게 할려면 얘 써야함.-->
        <p v-text = "tagList"/>
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{ typeof valueModel }} </p>
        <input type="number" v-model.lazy="numberModel" > <!-- type=number로 정의만 해주면 수식어(v-model.number) 안붙여도 숫자로 처리 됨 -->
        <!-- <input v-model.number="numberModel"> -->
        <p>{{ 10000 + numberModel }} </p>
        <select v-model="selectModel"> 
            <option value="summer">여름</option> 
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel }}</p>
        <textarea v-model="textModel"/> <!-- 지가 이미 출력 하는애니까 -->
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
        <p> {{ chData }} </p>
        <div>
            <input type="checkbox" value="서울" v-model="city">서울
            <input type="checkbox" value="대구" v-model="city">대구
            <p> {{city}}</p>
        </div>
    </div>
</template>


<script>
    //이 component 객체 생성 - 이 파일 실행하면 내보내고자하는 대상 정의. =>  이 안에 component 속성 정의함
    export default {
        //data : return 타입 "객체"로!  ( & 함수 기반 정의(return전에 작업가능!) )
        data(){
            return {
                //사용하고자하는 변수 정의하면 됨! 
                title : 'Hello, Vue.js', //초기값 줘도되고 안줘도 되고( null, 공백도 가능! )
                tagList : '<strong>Today is ... </strong>',
                valueModel : 'Korea',
                numberModel : 0,
                selectModel : 'winter', //공백주면 암껏도 선택 안되고 첫번쨰 옵션이 display됨
                textModel : '집에가고싶어요',
                chData : '',
                city : ''
                
            }
        }

    }
</script>
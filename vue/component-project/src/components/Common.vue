<template>
    <div></div>
 
</template>


<script>
    //component 는 '객체'라서 export default로 객체 반환! 
    export default {
        //component는 자신이 객체에 가진 정보만 다룰 수 있음! - components(배열) : 자식 component 넣는 곳! 
        components : [],

        // data, computed가 내부적으로 가진 값 PROPERTY(= component가 가진 변수(값) )
        data(){
            return {
             today : new Date()
            }
        },

        // data속성의 property 기반해서 => 연산값 : 읽는거만 가능! 직접적으로 computed에 정의된거  수정불가! 하려면 data 속성을 수정해야한다! 
        computed : {
            AfterYear(){
                return this.today.setFullYear(this.today.getFullYear() + 1);
            }
        },


        // OPTION(속성)
        //해당 component가 가진 eventhandler , 기능을 수행하는 함수 여기에 등록!... 여기서 쓴거만 쓸 수 있음 !
        methods : {
         
        },

        // (computed랑 유사하게 동작하지만 성격 마니 다름.) data 속성의 property 내부에 저장하고 변경 감시함. => property가 변했을 떄 내가 해야하는 행동들을 정의한다.
        watch : {},


        //Lifecyle Hook

        created() {},

        
        mounted() {}

    }

</script>


<style>

</style>
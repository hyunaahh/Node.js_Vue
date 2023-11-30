<template>

    <div>
        <label><input type="text" v-model="msg"></label>
        <p> {{ msg }} </p>
    </div>
</template>


<script>
    export default  {
        name : 'VueComponent', 
        //component가 관리하는 property : input, p태그와 연결
        data(){
            return{
                msg : '2023-11-30' //위에 input이랑 연결되있는 애
            }
        }
    }
</script>

<!-- 여기서만 style 적용하고 싶으면! : style 제한! - scoped -->
<style scoped> 
    p{
        background-color : burlywood;
    }
</style>
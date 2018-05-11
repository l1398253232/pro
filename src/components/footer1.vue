<template>
    <div class="footer">
        <router-link to='/Main'>首页</router-link>
        <router-link to='/tab1'>分类</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 40px;
        background: yellow;
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .footer a{
        display: inline-block;
        flex: 1;
        text-align: center;
        justify-content: center;
    }
</style>

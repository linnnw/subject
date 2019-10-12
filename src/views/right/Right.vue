<template>
    <div class="right">
        <div class="head">
            <span class="line"></span>
            <i class="fas fa-home"></i>



            <div class="message">
                <i class="far fa-bell"></i>
                <span>7</span>
            </div>
            <div class="user">
                <img src="../../assets/images/user.svg" alt="">
                Administrator
                <i class="fas fa-angle-down"></i>
            </div>
            <div class="exit"><i class="fas fa-sign-out-alt"></i>退出</div>

        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "Right"
    }
</script>

<style scoped>
    .right {
        /*width: 100%;*/
        color: #737577;

    }
    .head {
        position: relative;
        height: 50px;
        border-bottom: 1px solid #F6F6F6;
    }
    .line {
        content: "";
        position: absolute;
        left: 35px;
        top: 20px;
        background-color: #737577;
        width: 15px;
        height: 2px;
    }
    .line::after {
        content: "";
        position: absolute;
        left: 0;
        top: 5px;
        background-color: #737577;
        width: 100%;
        height: 2px;
    }
    .line::before {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        background-color: #737577;
        width: 100%;
        height: 2px;
    }
    .fa-home {
        position: absolute;
        font-size: 14px;
        top: 18px;
        left: 95px;
    }
    .exit {
        position: absolute;
        right: 25px;
        top: 20px;
        font-size: 14px;
    }
    .user {
        position: absolute;
        top: 20px;
        right: 125px;
        font-size: 14px;
    }
    .user img {
        position: absolute;
        left: -35px;
        top: -7px;
    }
    .message {
        position: absolute;
        top: 20px;
        right: 315px;
    }
    .message span {
        /*display: block;*/
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #f10;
        position: absolute;
        top: -6px;
        right: -6px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 15px;
    }
</style>

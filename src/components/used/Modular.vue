<template>
    <div id="modular">
        <div>
            <div class="title" ref="title" @click="telescopic">
                <slot name="title"></slot>
                <div v-show="!flag"><i class="fas fa-angle-right"></i></div>
                <div v-show="flag"><i class="fas fa-angle-down"></i></div>
            </div>
            <div class="content" ref="ul" >
                <slot name="details"></slot>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modular",
        data() {
            return {
                flag: false,
            }
        },
        props: {
            path: String,
            id: String
        },
        methods: {
            telescopic() {

                this.flag = !this.flag
                if(this.flag) {
                    this.$refs.ul.style.height = '153px'
                    this.$refs.title.style.color = '#137DD1'
                    this.$router.replace(this.path) //跳转

                }else {
                    this.$refs.ul.style.height = '0'
                    this.$refs.title.style.color = '#fff'
                }


            }
        }
    }
</script>

<style scoped>
    #modular {
        moz-user-select: -moz-none;
        -moz-user-select: none;
        -o-user-select:none;
        -khtml-user-select:none;
        -webkit-user-select:none;
        -ms-user-select:none;
        user-select:none;
        color: #fff;
    }
    .title {
        cursor: pointer;
        padding-left: 40px;
        background-color: #293448;
        height: 50px;
        width: 200px;
        line-height: 50px;
        box-sizing: border-box;
    }
    .content {
        height: 0;
        overflow: hidden;
        transition: all .3s;
        background-color: #212B37;
        width: 200px;
        /*box-shadow: 0px 1px 2px rgba(33,43,55,.5);*/
    }
    .content .li {
        padding-left: 40px;
        box-sizing: border-box;
        margin: 25px 0;
    }
    .modular .fa-angle-right,
    .modular .fa-angle-down {
        position: absolute;
        right: 5px;
        top: 17px;
    }
</style>

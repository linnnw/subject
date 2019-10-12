<template>
    <div id="left">
        <div>
            <h1>系统测试</h1>
        </div>
        <ul>
            <li>
                <Modular id="1" class="modular"  path="/other">
                    <div slot="title">
                        <i class="fas fa-desktop"></i>
                        <span>人员管理</span>
                    </div>
                </Modular>
            </li>
            <li>
                <Modular id="2" class="modular"  path="/other">
                    <div slot="title">
                        <i class="fas fa-random"></i>
                        <span>考勤管理</span>

                    </div>
                </Modular>
            </li>
            <li>
                <Modular id="3" class="modular"  path="/other">
                    <div slot="title">
                        <i class="fas fa-chart-bar"></i>
                        <span>工资管理</span>

                    </div>
                </Modular>
            </li>
            <li>
                <Modular id="4" class="modular"  path="/other">
                    <div slot="title">
                        <i class="fas fa-yen-sign"></i>
                        <span>安全管理</span>

                    </div>
                </Modular>
            </li>
            <li>
                <Modular id="5" class="modular" path="/table">
                    <div slot="title">
                        <i class="fas fa-plug"></i>
                        <span>日常工作</span>

                    </div>
                    <div slot="details">
                        <div class="li">代办工作</div>
                        <div class="li">我发起的工作</div>
                        <div class="li">我办过的工作</div>
                    </div>
                </Modular>
            </li>
            <li>
                <Modular id="6" class="modular"  path="/other">
                    <div slot="title">
                        <i class="fas fa-cog"></i>
                        <span>系统管理</span>

                    </div>
                </Modular>
            </li>
        </ul>
    </div>
</template>

<script>
    import Modular from '../../components/used/Modular'
    export default {
        name: "Left",
        data() {
            return {
                isFlag: false
            }
        },
        components: {
            Modular
        }

    }
</script>

<style scoped>
    #left {
        /*width: 207px;*/
        height: 100vh;
        background-color: #293448;
        overflow: auto;
    }
    ::-webkit-scrollbar{      /*上下滑动不显示进度条*/
        display:none;
    }
    #left h1 {
        text-align: center;
        color: #fff;
    }
    #left li {
        padding-left:2px;
        border: 2px solid #242F43;
        position: relative;
    }

    .fa-desktop,
    .fa-random,
    .fa-chart-bar,
    .fa-yen-sign,
    .fa-plug,
    .fa-cog {
        position: absolute;
        left: 10px;
        top: 18px;
        font-size: 14px;
    }

</style>

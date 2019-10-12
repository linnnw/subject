<template>
  <div id="app">
    <Left class="left"></Left>
    <Right class="right"></Right>
  </div>
</template>

<script>
import Left from './views/left/Left'
import Right from './views/right/Right'
export default {
  name: 'app',
  components: {
    Left,
    Right
  }
}
</script>

<style>
@import "assets/css/normalize.css";
@import "assets/css/animate.css";
#app {
  display: flex;
}
 .left {
   min-width: 207px;
 }
  .right {
    width: 100%;
  }

</style>

<template>
  <div id="app">
    <common-bar/>
    <div class="container">
      <common-top />
      <div class="wrapper">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import commonBar from './common/common-nav'
  import commonTop from './common/common-top'
  export default {
    name: 'app',
    components: {
      commonBar,
      commonTop
    }
  }
</script>
<style>
  body {
    background-color: #282d2f;
  }
  #app {
    display: flex;
  }
  .container {
    min-height: 922px;
    width: calc(100% - 240px);
  }
  .wrapper {
    background-color: #3a4144;
    height: 100%;
    padding: 20px;
  }
  .content {
    background-color: #fff;
    padding: 20px 15px;
  }
</style>

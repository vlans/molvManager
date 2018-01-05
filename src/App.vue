<template>
  <div id="app">
    <common-top @resize="resize" :initResize="initResize"/>
    <div class="molv-con">
      <common-bar class="bar" :class="{posi: resizeWidth}" :resize="resizeWidth"/>
      <div class="container" :class="{consi: resizeWidth}">
        <div class="wrapper">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import commonBar from './common/common-nav'
  import commonTop from './common/common-top'
  export default {
    name: 'app',
    data () {
      return {
        resizeWidth: false,
        initResize: false
      }
    },
    created () {
      if (window.innerWidth > 1020) {
        return
      }
      this.resizeWidth = true
      this.initResize = true
    },
    methods: {
      resize (v) {
        this.resizeWidth = v
      }
    },
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
  .posi {
    left: -240px!important;
  }
  .consi {
    margin-left: 0!important;
    width: 100%!important;
  }
  #app:after {
    clear: both;
    content: '';
    display: block;
  }
  .molv-con:after {
    display: block;
    content: '';
    clear: both;
  }
  .bar {
    position: absolute;
  }
  .bar, .container {
    transition: all 0.4s ease-in-out;
    float: left;
    left: 0;
  }
  .container {
    position: relative;
    margin-left: 240px;
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

<template>
  <div class="com_top">
    <p class="logo_content" :class="{resize: resize}">
      <img src="../assets/logo.png" alt="" class="logo">
    </p>
    <div class="top-con" :class="{resize: resize}">
      <div class="am-fl am-icon-list top-menu" @click="menuSize"></div>
      <div class="sign">
        <span class="text_wel">欢迎您{{user ? ',' + user.user.username : ''}}</span>
        <span>
          <i class="am-icon-sign-out"></i>
          退出
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top',
    props: ['initResize', 'userInfo'],
    watch: {
      initResize (v) {
        this.resize = v
      },
      userInfo: {
        deep: true,
        handler (v) {
          this.user = v
        }
      }
    },
    data () {
      return {
        resize: this.initResize,
        clickResize: this.initResize,
        user: ''
      }
    },
    created () {
      this.resizeWindow()
    },
    methods: {
      menuSize () {
        this.clickResize = !this.clickResize
        this.$emit('resize', this.clickResize)
      },
      resizeWindow () {
        window.addEventListener('resize', (e) => {
          if (e.target.innerWidth < 1020) {
            this.resize = true
            this.$emit('resize', true)
          } else {
            this.resize = false
            this.$emit('resize', false)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .resize {
    width: 100%!important;
  }
  .logo_content {
    min-width: 240px;
    float: left;
    background-color: #282d2f;
  }
  .top-con {
    width: calc(100% - 240px);
    float: left;
  }
  .sign {
    color: #cfcfcf;
    font-size: 14px;
    text-align: right;
  }
  .text_wel {
    padding: 0 16px;
  }
  .sign span {
    display: inline-block;
    text-align: center;
    min-width: 78px;
    cursor: pointer;
  }
  .sign span:hover {
    color: #fff;
  }
  .top-menu {
    color: #cfcfcf;
    font-size: 22px;
    border-right: 1px solid #282d2f;
    padding-right: 22px;
    padding-left: 22px;
  }
  .top-menu:hover {
    background-color: #282d2f;
    color: #fff;
    cursor: pointer;
  }
  .com_top {
    background-color: #2f3638;
    min-height: 56px;
    padding-right: 20px;
    line-height: 56px;
  }
  .com_top:after {
    clear: both;
    content: '';
    display: block;
  }

</style>

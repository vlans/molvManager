<template>
  <div class="com_top">
    <div class="am-fl am-icon-list top-menu"></div>
    <div class="sign">
      <span class="text_wel">欢迎您,admin</span>
      <span>
        <i class="am-icon-sign-out"></i>
        退出
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top'
  }
</script>

<style scoped>
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
    height: 56px;
    padding-right: 20px;
    line-height: 56px;
  }

</style>

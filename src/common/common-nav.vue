<template>
  <div>
    <div class="user_content">
      <p class="user_avator">
        <img :src="user && user.user.avatar" alt="">
      </p>
      <p class="user_name">
        <i class="am-icon-circle-o am-text-success"></i>
        {{user ? user.user.username : ''}}
      </p>
    </div>
    <el-menu class="nav-bar" :collapse="isCollapse" background-color="#282d2f" text-color="#868E8E" active-text-color="#fff" :router="true" :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title">
          <i class="am-icon-home slider slider-home"></i>
          <span>首页管理</span>
        </template>
        <el-menu-item-group>
          <a href="http://120.79.33.51/admin/banner">
            <el-menu-item  index="1-1">
              <i class="am-icon-angle-right slider"></i>
              <span>banner管理</span>
            </el-menu-item> 
          </a>
          <a href="http://120.79.33.51/admin/theme">
            <el-menu-item index="1-2">
              <i class="am-icon-angle-right slider"></i>
              <span>主题管理</span>
            </el-menu-item>
          </a>
          <a href="http://120.79.33.51/admin/index/destination">
            <el-menu-item index="1-3">
              <i class="am-icon-angle-right slider"></i>
              <span>目的地管理</span>
            </el-menu-item>
          </a>
          <a href="http://120.79.33.51/admin/notopen">
            <el-menu-item index="1-4">
              <i class="am-icon-angle-right slider"></i>
              <span>经典路书管理</span>
            </el-menu-item>
          </a>
          <a href="http://120.79.33.51/admin/index/tip">
            <el-menu-item index="1-5">
              <i class="am-icon-angle-right slider"></i>
              <span>锦囊管理</span>
            </el-menu-item>
          </a>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="am-icon-tree slider slider-tree"></i>
          <span>目的地管理</span>
        </template>
        <el-menu-item-group>
          <a href="http://120.79.33.51/admin/destination">
            <el-menu-item index="2-1">
              <i class="am-icon-angle-right slider"></i>
              <span>目的地列表</span>
            </el-menu-item>
          </a>
          <a href="http://120.79.33.51/admin/destination?lv=1">
            <el-menu-item index="2-2">
              <i class="am-icon-angle-right slider"></i>
              <span>省份列表</span>
            </el-menu-item>
          </a>
          <a href="http://120.79.33.51/admin/destination?lv=2">
            <el-menu-item index="2-3">
              <i class="am-icon-angle-right slider"></i>
              <span>城市列表</span>
            </el-menu-item>
          </a>
          <a href="http://120.79.33.51/admin/destination?lv=3">
            <el-menu-item index="2-4">
              <i class="am-icon-angle-right slider"></i>
              <span>景点列表</span>
            </el-menu-item>
          </a>
          <a href="http://120.79.33.51/admin/destinationsComment">
            <el-menu-item index="2-5">
              <i class="am-icon-angle-right slider"></i>
              <span>评论管理</span>
            </el-menu-item>
          </a>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="am-icon-lightbulb-o slider slider-0"></i>
          <span>锦囊管理</span>
        </template>
        <el-menu-item-group>
          <a href="http://120.79.33.51/admin/tips">
            <el-menu-item index="3-1">
              <i class="am-icon-angle-right slider"></i>
              <span>锦囊列表</span>
            </el-menu-item>
          </a>
          <a href="http://120.79.33.51/admin/tipsComments">
            <el-menu-item index="3-2">
              <i class="am-icon-angle-right slider"></i>
              <span>评论管理</span>
            </el-menu-item>
          </a>
          <a href="http://120.79.33.51/admin/tipsError">
            <el-menu-item index="3-3">
              <i class="am-icon-angle-right slider"></i>
              <span>纠错管理</span>
            </el-menu-item>
          </a>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="am-icon-motorcycle slider slider-motorcycle"></i>
          <span>路书管理</span>
        </template>
        <el-menu-item-group>
          <a href="http://120.79.33.51/admin/journeys">
            <el-menu-item index="4-1">
              <i class="am-icon-angle-right slider"></i>
              <span>路书管理</span>
            </el-menu-item>
          </a>
        </el-menu-item-group>
      </el-submenu>
      <a href="http://120.79.33.51/admin/notopen">
        <el-menu-item index="4">
          <i class="am-icon-share-alt slider slider-alt"></i>
          <span slot="title">社区管理</span>
        </el-menu-item>
      </a>
      <el-submenu index="6">
        <template slot="title">
          <i class="am-icon-shopping-cart slider slider-cart"></i>
          <span>商城管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/list">
            <i class="am-icon-angle-right slider"></i>
            <span>商品管理</span>
          </el-menu-item>
          <el-menu-item index="/order">
            <i class="am-icon-angle-right slider"></i>
            <span>订单管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <a href="http://120.79.33.51/admin/users">
        <el-menu-item index="7">
          <i class="am-icon-user slider"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      </a>
      <a href="http://120.79.33.51/admin/staffs">
        <el-menu-item index="8">
          <i class="am-icon-user slider"></i>
          <span slot="title">员工管理</span>
        </el-menu-item>
      </a>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'bar',
    props: ['userInfo'],
    watch: {
      userInfo: {
        deep: true,
        handler (v) {
          this.user = v
        }
      }
    },
    data () {
      return {
        isCollapse: false,
        user: ''
      }
    }
  }
</script>

<style>
  .el-menu-item:hover {
    color: #fff!important;
  }
  .el-menu-item:hover .slider {
    color: #fff!important;
  }
  .el-submenu__title:hover {
    color: #fff!important;
  }
  .el-submenu__title:hover .slider, .el-submenu__title:hover .el-icon-arrow-down {
    color: #fff!important;
  }
  .slider-0 {
    margin-right: 20px!important;
  }
  .slider-cart, .slider-alt, .slider-tree, .slider-home {
    margin-right: 15px!important;
  }
  .slider-motorcycle {
    margin-right: 10px!important;
  }
  .el-menu-item {
    height: 45px!important;
    line-height: 45px!important;
  }
  .el-submenu__title {
    height: 45px!important;
    line-height: 45px!important;
  }
  .user_name {
    margin-bottom: 0;
    margin-top: 5px;
  }
  .user_content {
    color: #cfcfcf;
    font-size: 14px;
    padding: 22px;
    background: #1f2224;
    padding-top: 28px;
  }
  .user_avator img {
    vertical-align: middle;
    height: 82px;
    width: auto;
  }
  .user_avator {
    margin: 0;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    overflow: hidden;
  }
  .logo_content {
    line-height: 57px;
    text-align: center;
    height: 57px;
    margin: 0;
  }
  .logo {
    width: 170px;
    vertical-align: middle;
  }
  .slider {
    margin-right: 18px;
  }
  ul {
    margin: 0!important;
  }
  .el-menu-item-group__title {
    padding: 0!important;
  }
  .nav-bar {
    width: 240px;
    border-right: none;
  }
</style>

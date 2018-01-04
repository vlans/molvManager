<template>
  <div class="content">
    <h3>商品列表</h3>
    <div style="height: 40px;margin-bottom: 20px;">
      <el-button type="primary" style="float: left" @click="create">添加商品</el-button>
      <el-cascader
        placeholder="筛选城市"
        :options="options"
        filterable
        change-on-select
        style="width: 150px; float: left;margin-top: -2px;margin-left: 15px; margin-right: 15px;"
      ></el-cascader>
      <el-input placeholder="请输入商品名称" v-model="search" style="width: 500px;float: left;height: 100%;">
        <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 110px">
          <el-option label="自由行" value="1"></el-option>
          <el-option label="日游小团" value="2"></el-option>
          <el-option label="餐饮美食" value="3"></el-option>
          <el-option label="深度体验" value="4"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table :data="tableData">
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="area" label="地区"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="updateTime" label="更新日期"></el-table-column>
      <el-table-column prop="size" label="大小"></el-table-column>
      <el-table-column prop="count" label="下载次数"></el-table-column>
      <el-table-column prop="shop" label="购买次数"></el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    methods: {
      create () {
        this.$router.push('/create')
      },
      handleCurrentChange (v) {
        this.currentPage = v
      }
    },
    data () {
      return {
        tableData: [],
        currentPage: 1,
        select: '',
        search: '',
        options: []
      }
    }
  }
</script>

<style scoped>
  .content {
  }
  .pagination {
    text-align: right;
  }
</style>

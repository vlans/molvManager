<template>
  <div class="content">
    <h2>订单列表</h2>
    <el-input placeholder="请输入订单号" v-model="search" style="width: 600px;margin-bottom: 20px;">
      <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 110px">
        <el-option label="全部" value="1"></el-option>
        <el-option label="未支付" value="2"></el-option>
        <el-option label="待支付" value="3"></el-option>
        <el-option label="交易成功" value="4"></el-option>
        <el-option label="异常" value="5"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-table :data="tableData" v-loading="loading" style="z-index: 30;">
      <el-table-column prop="id" label="订单号"></el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="shopID" label="购买ID"></el-table-column>
      <el-table-column prop="contact" label="联系方式"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="createTime" label="下单时间"></el-table-column>
      <el-table-column prop="status" label="订单状态"></el-table-column>
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
    name: 'order',
    methods: {
      async orderList () {
        var data = {
          number: '1',
          pageNum: '20'
        }
        await this.$http(
          {
            url: 'http://120.79.33.51:8080/motortrip/api/merchandise/merchandiseOrderListBackendQuery',
            type: 'post',
            data: data
          }
        )
      },
      handleCurrentChange (v) {
        this.currentPage = v
      }
    },
    data () {
      return {
        select: '1',
        search: '',
        tableData: [],
        currentPage: 1,
        loading: true
      }
    }
  }
</script>

<style scoped>
  .pagination {
    text-align: right;
    margin-top: 20px;
  }
</style>

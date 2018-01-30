<template>
  <div class="content">
    <h2>商品列表</h2>
    <div style="height: 40px;margin-bottom: 20px;">
      <el-button type="primary" style="float: left" @click="create">添加商品</el-button>
      <el-cascader
        placeholder="筛选城市"
        :options="options"
        change-on-select
        v-model="areaValue"
        @change="changeHandler"
        style="width: 200px; float: left;margin-top: -2px;margin-left: 15px; margin-right: 15px;"
      ></el-cascader>
      <el-input placeholder="请输入商品名称" v-model="search" style="width: 500px;float: left;height: 100%;" @keydown.enter.native="searchBtn">
        <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 110px">
          <el-option label="自由行" value="1"></el-option>
          <el-option label="日游小团" value="2"></el-option>
          <el-option label="餐饮美食" value="3"></el-option>
          <el-option label="深度体验" value="4"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click.native="searchBtn"></el-button>
      </el-input>
    </div>
    <el-table :data="tableData" v-loading="loading" style="z-index: 30;">
      <el-table-column prop="title" label="商品名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="area" label="地区"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="updateTime" label="更新日期"></el-table-column>
      <el-table-column prop="size" label="大小"></el-table-column>
      <el-table-column prop="downloadNumber" label="下载次数"></el-table-column>
      <el-table-column prop="buyNumber" label="购买次数"></el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import area from '../common/area'
  export default {
    name: 'list',
    methods: {
      changeHandler (v, n) {
        this.provinceId = ''
        this.cityId = ''
        this.countyId = ''
        area.forEach((k) => {
          if (k.label === v[0]) {
            this.provinceId = k.id
            if (v[1]) {
              k.children.forEach(l => {
                if (l.label === v[1]) {
                  this.cityId = l.id
                }
                if (v[2]) {
                  l.children.forEach(m => {
                    if (m.label === v[2]) {
                      this.countyId = m.id
                    }
                  })
                }
              })
            }
          }
        })
      },
      searchBtn () {
        this.goodsList()
      },
      async goodsList () {
        this.loading = true
        var option = {
          number: String(this.currentPage),
          pageNum: '20',
          title: String(this.search),
          type: String(this.select),
          provinceId: this.provinceId,
          cityId: this.cityId,
          countyId: this.countyId
        }
        var { data, errorCode } = await this.$http(
          {
            url: 'http://120.79.33.51:8080/motortrip/api/merchandise/merchandiseListBackendQuery',
            type: 'post',
            data: option
          }
        )
        if (errorCode === 0) {
          this.tableData = data.merchandiseList
          this.total = data.rowCount
        }
        this.loading = false
      },
      create () {
        this.$router.push('/create')
      },
      handleCurrentChange (v) {
        this.currentPage = v
        this.goodsList()
      }
    },
    created () {
      this.goodsList()
    },
    data () {
      return {
        tableData: [],
        currentPage: 1,
        select: '',
        search: '',
        options: area,
        loading: false,
        total: 0,
        areaValue: [],
        provinceId: '',
        cityId: '',
        countyId: ''
      }
    }
  }
</script>

<style scoped>
  .content {
  }
  .pagination {
    text-align: right;
    margin-top: 20px;
  }
</style>

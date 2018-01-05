<template>
  <div class="content">
    <div class="form">
      <h2>添加商品</h2>
      <div class="line">
        <span class="label">
          <span class="required">*</span>
          地区标签
        </span>
        <el-cascader
          v-model="create.area"
          placeholder="请选择城市"
          :options="options"
          filterable
          change-on-select
        ></el-cascader>
      </div>
      <div class="line">
        <span class="label">
          <span class="required">*</span>
          商品名称
        </span>
        <el-input v-model="create.name" placeholder="请输入商品名称" class="float"></el-input>
      </div>
      <div class="line">
        <span class="label" style="float: left;margin-right: 20px;">
          <span class="required"></span>
          商品简介
        </span>
        <el-input v-model="create.desc" type="textarea" placeholder="请输入商品简介" class="float"></el-input>
      </div>
      <div class="line">
        <span class="label">
          <span class="required">*</span>
          商品价格
        </span>
        <el-input v-model="create.price" placeholder="请输入商品价格" class="float"></el-input>
      </div>
      <div class="line">
        <span class="label">
          <span class="required">*</span>
          商品类型
        </span>
        <el-select v-model="create.type" placeholder="请选择商品类型" filterable>
          <el-option label="自由行" value="1"></el-option>
          <el-option label="日游小团" value="2"></el-option>
          <el-option label="餐饮美食" value="3"></el-option>
          <el-option label="深度体验" value="4"></el-option>
        </el-select>
      </div>
      <div class="line">
        <span class="label" style="float:left;margin-right: 20px;">
          <span class="required">*</span>
          封面图
        </span>
        <el-upload
          style="float: left;"
          class="avatar-uploader float"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          v-model="create.cover"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="line">
        <span class="label" style="float: left;margin-right: 20px;">
          <span class="required">*</span>
          PDF上传
        </span>
        <el-upload
          style="float: left"
          class="avatar-uploader float"
          action="https://jsonplaceholder.typicode.com/posts/"
          v-model="create.pdf"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="line">
        <span class="label" style="float: left;margin-right: 20px;">
          <span class="required">*</span>
          商品描述
        </span>
        <vue-editor v-model="content" class="float" style="float: left;"></vue-editor>
      </div>
      <div>
        <el-button type="primary" @click="submit">发布</el-button>
        <el-button>保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  export default {
    name: 'create',
    methods: {
      submit () {
        var flag = this.validator()
        if (flag) {
          this.$message.error('请检查必填项是否填写完整')
          // return
        }
      },
      validator () {
        var flag = false
        for (var i in this.create) {
          if (i !== 'desc') {
            if (this.create[i]) {
              if (!flag) {
                flag = false
              }
            } else {
              flag = true
            }
          }
        }
        return flag
      },
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg' || 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 1

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG,PNG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!')
        }
        return isJPG && isLt2M
      }
    },
    data () {
      return {
        create: {
          name: '',
          area: [],
          desc: '',
          price: '',
          type: '',
          cover: '',
          pdf: ''
        },
        content: '',
        options: [],
        imageUrl: ''
      }
    },
    components: {
      VueEditor
    }
  }
</script>

<style>
  .required {
    color: #FF0000;
  }
  .label {
    display: inline-block;
    width: 80px;
    text-align: right;
    margin-right: 15px;
  }
  .form {
    width: 70%;
    margin: 0 auto;
    padding: 30px 0;
  }
  .line {
    margin-bottom: 20px;
  }
  .line:after {
    clear: both;
    content: '';
    display: block;
  }
  .float {
    width: calc(90% - 80px);
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .el-upload__input {
    display: none!important;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>

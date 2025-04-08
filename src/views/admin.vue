<template>
  <div>
    <div class="card">
      <el-input class="custom-input" v-model="input.value" placeholder="所需要查询的姓名" :prefix-icon="Search"></el-input>
      <el-button type="primary" icon="Search" @click="">搜索</el-button>
    </div>
    <div class="card">
      <el-button type="danger" icon="Delete" @click="">删除</el-button>
      <el-button type="primary" icon="CirclePlus" @click="">添加</el-button>
      <el-button type="warning" icon="Edit" @click="">修改</el-button>
      <el-button type="success" icon="Upload" @click="">导入</el-button>
      <el-button type="info" icon="Download" @click="">导出</el-button>
    </div>
    <div>
      <el-table :data="input.TableData" :header-cell-style="{color: '#333', background: '#c2d8ff'}">
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="age" label="年龄" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="action" label="电话" width="180">
        </el-table-column>
      </el-table>
    </div>
    <div class="card">
      <el-pagination
          v-model:current-page="input.PageNum"
          :page-size="input.PageSize"
          layout="total, prev, pager, next"
          :total="input.totol"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script setup>
  import { reactive } from 'vue'
  import {Search} from "@element-plus/icons-vue";
  import {handleCurrentChange} from "element-plus/es/components/tree/src/model/util";
  import request from "../../utils/request.js";
  import {ElMessage} from "element-plus";
  const  input = reactive({
    value: '',
    PageNum: 1,
    PageSize: 10,
    totol: 6,
    TableData: [
        {
          name: '',
          age: '',
          address: '',
          phone: ''
        },]
  })
  request.get('admin/select').then(res => {
    if (res.code === '200'){
      console.log(res)
    }else {
      ElMessage.error(res.msg)
    }

  })

</script>
<style scoped>
.custom-input {
  width: 340px;
  margin-right: 5px;
}
</style>
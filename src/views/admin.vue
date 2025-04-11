<template>
  <div>
    <div class="card">
      <el-input clearable class="custom-input" v-model="input.value" placeholder="所需要查询的名称" :prefix-icon="Search"></el-input>
      <el-input clearable class="custom-input" v-model="input.username" placeholder="所需要查询的账号" :prefix-icon="Search"></el-input>
      <el-button type="primary" icon="Search" @click="load">搜索</el-button>
      <el-button icon="RefreshRight" @click="reset">重置</el-button>
    </div>
    <div class="card">
      <el-button type="danger" icon="Delete" @click="">删除</el-button>
      <el-button type="primary" icon="CirclePlus" @click="headAdd">添加</el-button>
      <el-button type="warning" icon="Edit" @click="">修改</el-button>
      <el-button type="success" icon="Upload" @click="">导入</el-button>
      <el-button type="info" icon="Download" @click="">导出</el-button>
    </div>
    <div>
      <el-table :data="input.TableData" :header-cell-style="{color: '#333', background: '#c2d8ff'}">
        <el-table-column prop="id" label="编码"></el-table-column>
        <el-table-column prop="username" label="账号"></el-table-column>
        <el-table-column prop="password" label="密码"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="phone" label="电话">
        </el-table-column>
      </el-table>
    </div>
    <div class="card">
<el-pagination
    v-model:current-page="input.PageNum"
    v-model:page-size="input.PageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="input.total"
    :page-sizes="[5, 10, 20]"
    @size-change="load"
    @current-change="load"
/>

    </div>

    <el-dialog v-model="input.FormVisible" title="管理员信息" width="500">
      <el-form ref="fromRef" :model="input.form" :rules="input.rules" label-width="80px" style="padding: 20px 30px 20px 0">
        <el-form-item prop="username" label="账号" :label-width="formLabelWidth" >
          <el-input v-model="input.form.username" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="password" label="密码" :label-width="formLabelWidth">
          <el-input v-model="input.form.password" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="name" label="名称" :label-width="formLabelWidth">
          <el-input v-model="input.form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="address" label="地址" :label-width="formLabelWidth">
          <el-input v-model="input.form.address" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="email" label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="input.form.email" autocomplete="off" />
        </el-form-item>
        <el-form-item prop="phone" label="电话" :label-width="formLabelWidth">
          <el-input v-model="input.form.phone" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="input.FormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add">确 认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import {onMounted, reactive, ref} from 'vue'
  import {Search} from "@element-plus/icons-vue";
  import request from "../../utils/request.js";
  import {ElMessage} from "element-plus";
  const  input = reactive({
    value: '',
    username:'',
    PageNum: 1,
    PageSize: 5,
    total: 0,
    FormVisible: false,
    TableData: [{},],
    form:{},
    rules:{
      username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
      ],
      name: [
        { required: true, message: '请输入名称', trigger: 'blur' }
      ],
      address: [
        { required: true, message: '请输入地址', trigger: 'blur' }
      ],
      email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
      ],
      phone: [
        { required: true, message: '请输入电话', trigger: 'blur' }
      ]
    },
  })

const fromRef = ref(null)

const load = () => {
  request.get('/admin/selectPage', {
    params: {
      pageNum: input.PageNum,
      pageSize: input.PageSize,
      name: input.value, // 对应后端的 name 字段
      username: input.username // 对应后端的 username 字段
    }
  }).then((res) => {
    input.TableData = res.data.list;
    input.total = res.data.total;
    console.log(res.data);
  }).catch((err) => {
    ElMessage.error("数据加载失败" + err);
  });
};


load()
const  reset = () => {
  input.value = ''
  input.username = ''
  load();

};
const headAdd= () => {
  input.FormVisible = true
  input.form = {}
}
const add=()=>{
  fromRef.value.resetFields((valid)=>{
    if(valid){
      request.post('admin/add',input.form).then(res=>{
        if(res.code==200){
          ElMessage.success("添加成功")
          input.FormVisible = false
          load()
        }else{
          ElMessage.error("添加失败")
        }
      })
    }else{
      ElMessage.error("请填写完整信息")
    }
  })
}
</script>
<style scoped>
.custom-input {
  width: 340px;
  margin-right: 5px;
}
</style>
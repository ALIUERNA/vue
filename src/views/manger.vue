<template>
<!--  头部区域-->
  <div class="title">
    <div style="font-size: 20px;color: deepskyblue;background-color: #3a456b;width: 240px;height: 60px;display: flex;align-items: center;">
      <img src="@/assets/img/logo.png" alt="" style="width: 40px;height: 40px;margin-right: 10px">
      <span>登录账号与人数</span>
    </div>
    <div style="flex: 1"></div>
  </div>
<!--下方区域输出-->
  <div style="display: flex">
    <!--侧边导航栏-->
    <div style="width: 240px; ">
      <el-menu :default-openends="['1']" default-active="1" style="min-height: calc(100vh - 60px)">
        <el-menu-item index="/manager/home"> <el-icon><House /></el-icon>首页</el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>数据管理</span>
          </template>
          <el-menu-item index="1-1">二级菜单</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
<!--    数据渲染区域-->
    <div>

    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.title{
  height: 60px;
  //background-color: deepskyblue;
  display: flex;
  align-items: center;
  //border-bottom: 1px solid #eee;
}
.el-menu{
  background-color: #3a456b;
  border-color: #3a456b;
}
</style>
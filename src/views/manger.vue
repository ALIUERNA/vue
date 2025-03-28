<template>
<!--  头部区域-->
  <div class="title">
    <div class="header-left">
      <img src="@/assets/img/logo.png" alt="" class="logo">
      <span>登录账号与人数</span>
    </div>
    <div class="header-middle">
      首页/数据分析
    </div>
    <div class="header-right">
      <el-dropdown>
        <div class="user-info">
          <img class="avatar" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
          <span>管理员</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
<!--下方区域输出-->
  <div style="display: flex">
    <!--侧边导航栏-->
    <div style="width: 240px; box-shadow: 0 0 8px rgba(0,0,0,.12);">
      <el-menu :default-openends="['1']" default-active="1"  style="min-height: calc(100vh - 60px)" text-color="#fff">
        <el-menu-item index="/manager/home"> <el-icon><House /></el-icon>首页</el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>数据管理</span>
          </template>
        </el-sub-menu>
        <el-menu-item index="1-1"><el-icon><User /></el-icon>人员管理</el-menu-item>
      </el-menu>
    </div>
<!--    数据渲染区域-->
    <div style="flex: 1;width: 0;background-color: #e8eaff;padding: 10px">
      <RouterView />
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
  height: 50px;
  color: #ddd;
  background-color: #3a456b;
  border-color: #3a456b;
}
.el-sub-menu__title{
  background-color: #3a456b;
  color: #ddd;
}
.el-menu-item.is-active{
  background-color: #537bee;
  color: #fff;
}
::v-deep(.el-sub-menu__title:hover) {
  background-color: #648af3 !important;
}
.el-menu-item:not(.is-active):hover{
  background-color: #648af3;
  color: #333;
}
.el-dropdown{
  cursor: pointer;
}
.el-tooltip__trigger{
  outline: none ;
}
.header-left {
  font-size: 20px;
  color: deepskyblue;
  background-color: #3a456b;
  width: 240px;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: none;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.header-middle {
  flex: 1;
  height: 100%;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.header-right {
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 20px;
  border-bottom: 1px solid #ddd;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
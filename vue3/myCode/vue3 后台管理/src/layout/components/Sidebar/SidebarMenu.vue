<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->
<template>
  <!-- 一级 menu 菜单 -->
  <!-- <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  > -->
  <el-menu
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    :default-active="activeMenu"
    :collapse="!$store.getters.sidebarOpened"
    router
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
    <!-- 子集 menu 菜单 -->
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>
    <!-- 具体菜单项 -->
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue';
import SidebarItem from './SidebarItem';
import { useRouter, useRoute } from 'vue-router';
import { filterRouters, generateMenus } from '@/utils/route';

// 计算路由表结构
const router = useRouter();
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes());
  return generateMenus(filterRoutes);
});

// 写两遍todo
// 计算高亮 menu 的方法
const route = useRouter();
const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
</script>

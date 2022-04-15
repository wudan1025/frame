<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->
<template>
  <div class="">
    <div class="logo-container">
      <el-avatar
        :size="logoHeight"
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
        {{ $t('msg.test') }}
      </h1>
    </div>
    ...
  </div>
</template>
<script setup>
const logoHeight = 44;
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>

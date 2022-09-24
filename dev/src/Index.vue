<template>
  <div class="container wh100">
    <span>
      <SimpleFrontend></SimpleFrontend>
      <span>关于我：<a href="https://www.yuque.com/wetoria">Wetoria</a></span><br />
      <span>最新文章：<a href="https://www.yuque.com/wetoria/essays">I'm Vip</a></span><br />
      <span>练习项目地址：<router-link to="/simple-frontend/practices/index">Practices</router-link></span>
    </span>
  </div>
</template>

<script setup>
import SimpleFrontend from './simple-frontend'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
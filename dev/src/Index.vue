<template>
  <div class="container wh100">
    <span>
      <SimpleFrontend></SimpleFrontend>
      <span>关于我：<a href="https://www.yuque.com/wetoria">Wetoria</a></span><br />
      <span>最新文章：<a href="https://www.yuque.com/wetoria/essays">I'm Vip</a></span><br />
      <span>前端学习平台：<a href="https://www.yuque.com/wetoria/simplest-frontend">极简化前端</a></span><br />
      <span>练习项目地址：<router-link to="/simple-frontend/practices/index">Practices</router-link></span><br />
    </span>
    <span
      style="
        position: absolute;
        bottom: 0;
        opacity: 0.4;
        font-size: 12px;
      "
    >
    版本: {{ SystemInfo.version }}</span>
  </div>
</template>

<script setup>
import SimpleFrontend from './simple-frontend'
import {ref} from 'vue'
import DefaultSystemInfo from '../public/data/SystemInfo.json'
import {getProjectData} from './Tools/request'


const SystemInfo = ref(DefaultSystemInfo)
getProjectData('/data/SystemInfo.json').then((res) => {
  console.log('res is ', res)
  SystemInfo.value = res?.data || {}
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
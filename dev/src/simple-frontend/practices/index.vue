<template>
    <div class="questions-container">
      <span 
        v-for="(item, index) of practicesList"
        :key="index"
      >
        <router-link :to="item.path">第{{ index + 1 }}题</router-link>
      </span>
    </div>
</template>

<script setup>
const practicesList = [
  {
    path: './practice1'
  },
  {
    path: './'
  },
  {
    path: './'
  },
  {
    path: './'
  },
  {
    path: './'
  },
  {
    path: './'
  },
  { 
    path: './'
  },
  {
    path: './'
  },
  {
    path: './'
  },
  {
    path: './'
  },
  {
    path: './'
  },
  {
    path: './'
  },
  {
    path: './'
  },
  {
    path: './'
  },
]
</script>

<style scoped>
  .questions-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Menlo;
  }
</style>
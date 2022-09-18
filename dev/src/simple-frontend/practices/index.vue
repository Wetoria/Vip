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
const practices = import.meta.glob('./*')

const practicesList = Object.keys(practices)
  .filter(i => !i.includes('index'))
  .map(i => ({ path: i.split('.vue')[0]  }))
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
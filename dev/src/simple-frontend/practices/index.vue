<template>
    <div class="questions-container">
      <span class="index-area">
        <span 
          v-for="(item, index) of practicesList"
          :key="index"
        >
          <router-link :to="item.path">{{ `第${index + 1}题${item.name ? `：${item.name}` : ''}` }}</router-link>
        </span>
      </span>
      <BackButton path="/">返回主页</BackButton>
    </div>
</template>

<script setup>
const practices = import.meta.glob('./*', { eager: true })

const practicesList = Object.keys(practices)
  .filter(i => !i.includes('index'))
  .map(i => ({ path: i.split('.vue')[0], name: practices[i].default.questionDesc  }))
</script>

<style scoped>
  .questions-container {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: Menlo;
    align-items: center;
    justify-content: center;
  }
  .index-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
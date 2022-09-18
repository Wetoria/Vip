<template>
  <div class="back-btn">
    <router-link :to="path">
      <slot></slot>
    </router-link>
  </div>
</template>

<script setup>
  const props = defineProps({
    path: String,
  })
</script>

<style>
  .back-btn {
    padding: 4px 10px !important;
    border: 2px solid var(--theme-color);
    border-radius: 8px;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    transition: 0.4s;
  }
  .back-btn:hover {
    background: var(--theme-color);
  }
  .back-btn:hover a {
    color: white;
  }
</style>
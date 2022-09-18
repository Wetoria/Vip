<template>
  <div class="container">
    <div class="main">
      <div class="left"></div>
      <div class="middle"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  min-width: 800px;
}

.main {
  width: calc(100% - 40px - 20px);
  height: 500px;
  padding: 10px;
  display: flex;
}

.main, .left, .right, .middle {
  border: 1px solid white;
  border-radius: 10px;
}

.left, .right {
  width: 200px;
  height: 100%;
}

.middle {
  width: calc(100% - 400px - 20px);
  margin: 0 10px;
}
</style>
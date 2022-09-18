<template>
  <div class="container">
    <div class="question-container">
      <h1>第一题</h1>
      <p>实现下面这个布局。左侧两边的区域宽度为 200px，中间区域则会随浏览器的大小改变而改变。</p>
      <div class="main">
        <div class="left"></div>
        <div class="middle"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.container {
  width: calc(100% - 40px);
  height: 100%;
  padding: 10px 20px;
  min-width: 800px;
}

.question-container p {
  margin-bottom: 10px;
}

.main {
  width: calc(100% - 20px);
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